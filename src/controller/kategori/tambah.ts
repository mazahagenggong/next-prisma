import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";

const tambah = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
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
    ];
    if (!required.every(key => Object.keys(body).includes(key))) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Data tidak lengkap',
            }
        }
    }
    body.created_at = new Date();

    try {
        const data = await prisma.kategoris.create({
            data: body
        });
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil menambahkan data',
                data: data
            }
        }
    } catch (err:any) {
        return {
            status: 500,
            data: {
                success: false,
                message: err
            }
        }
    }
}
export default tambah;