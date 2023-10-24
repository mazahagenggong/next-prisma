import {NextApiRequest, NextApiResponse} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";

const tambah = async function (req: NextApiRequest, res: NextApiResponse) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    let body = req.body;
    if (!body.nama) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'nama tidak ada'
            }
        }
    }
    if (!body.jenis) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'jenis tidak ada'
            }
        }
    }
    body.created_at = new Date();
    for (const key in body) {
        if (body[key] === null || body[key] === "") {
            delete body[key];
        } else if (typeof body[key] === "object") {
            for (const key2 in body[key]) {
                if (body[key][key2] === null || body[key][key2] === "") {
                    delete body[key][key2];
                }
            }
            if (Object.keys(body[key]).length === 0) {
                delete body[key];
            }
        }
    }
    try {
        const data = await prisma.guru_and_staffs.create({
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
    } catch (e: any) {
        return {
            status: 500,
            data: {
                success: false,
                message: e.message
            }
        }
    }
}

export default tambah;