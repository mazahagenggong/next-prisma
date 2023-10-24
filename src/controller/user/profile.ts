import {NextApiRequest} from "next";
import {auth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import validator from "validator";
import isEmail = validator.isEmail;
import cloudinary from "@/lib/cloudinary";

const profile = async function (req: NextApiRequest) {
    const cek: any = await auth(req);
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
        'nama',
        'username',
        'gambar',
        'email'
    ];
    for (const field of required) {
        if (body[field] == null || body[field] === '') {
            let the_field;
            switch (field) {
                case 'nama':
                    the_field = 'Nama';
                    break;
                case 'username':
                    the_field = 'Username';
                    break;
                case 'gambar':
                    the_field = 'Gambar';
                    break;
                case 'email':
                    the_field = 'Email';
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

    const {nama, username, gambar, email} = body;
    if (!isEmail(body.email)) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Password baru minimal 8 karakter'
            }
        };
    }
    try {
        let user_data: any = await prisma.users.findUnique({
            where: {id: user_id},
            select: {
                id: true,
                username: true,
                email: true,
                nama: true,
                gambar: true,
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
        if (user_data.gambar !== process.env.DEFAULT_USER_IMAGE) {
            await cloudinary.uploader.destroy(user_data.gambar, {
                resource_type: 'image'
            });
        }
        await prisma.users.update({
            where: {id: user_id},
            data: {
                nama: nama,
                username: username,
                email: email,
                gambar: gambar
            }
        });
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil mengubah data'
            }
        }
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

export default profile;