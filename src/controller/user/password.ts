import {NextApiRequest} from "next";
import {auth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import validator from "validator";
import isLength = validator.isLength;
import {AES, enc} from "crypto-js";

const password = async function (req: NextApiRequest) {
    const cek:any = await auth(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const user_id = cek.data.data.id;
    let body = req.body;
    if (!body) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Data tidak boleh kosong',
            }
        }
    }
    const required = [
        'password',
        'new_password',
        'confirm_password',
    ];
    for (const field of required) {
        if (body[field] == null || body[field] === '') {
            let the_field;
            switch (field) {
                case 'password':
                    the_field = 'Password lama';
                    break;
                case 'new_password':
                    the_field = 'Password baru';
                    break;
                case 'confirm_password':
                    the_field = 'Konfirmasi password';
                    break;
                default:
                    the_field = field;
                    break;
            }
            return {
                status: 400,
                data: {
                    success: false,
                    message: `${the_field} tidak boleh kosong`
                }
            };
        }
    }
    const {password, new_password, confirm_password} = body;
    if (new_password !== confirm_password) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Password baru dan konfirmasi password tidak sama'
            }
        };
    }
    if (password === new_password) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Password baru tidak boleh sama dengan password lama'
            }
        };
    }
    if (!isLength(new_password, {min: 8})) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Password baru minimal 8 karakter'
            }
        };
    }
    try {
        let user_data = await prisma.users.findUnique({
            where: {id: user_id},
            select: {
                id: true,
                password: true,
            }
        });
        if (!user_data) {
            return {
                status: 400,
                data: {
                    success: false,
                    message: 'User tidak ditemukan'
                }
            };
        }
        const secret = process.env.JWT_SECRET ?? '';
        const rp = AES.decrypt(user_data.password, secret).toString(enc.Utf8);
        if (password !== rp) {
            return {
                status: 400,
                data: {
                    success: false,
                    message: 'Password lama salah'
                }
            };
        }
        const newpassword = AES.encrypt(new_password, secret).toString();

        await prisma.users.update({
            where: {id: user_id},
            data: {
                password: newpassword
            }
        });
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil mengubah password'
            }
        };
    } catch (e) {
        return {
            status: 500,
            data: {
                success: false,
                message: e
            }
        };
    }
}

export default password;