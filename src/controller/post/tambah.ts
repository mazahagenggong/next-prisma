import {NextApiRequest, NextApiResponse} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";
import moment from "moment";

const tambah = async function (req: NextApiRequest) {
    const cek: any = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    let body = req.body;
    const required = [
        'judul',
        'slug',
        'body',
        'kategori',
        'excerpt',
    ];
    if (!required.every(key => Object.keys(body).includes(key))) {
        return {
            status: 400,
            data: {
                success: false,
                message: 'Data tidak lengkap'
            }
        }
    }
    const default_image = process.env.DEFAULT_POST_IMAGE;
    if (!body.gambar) {
        body.gambar = default_image;
    }
    if (body.time) {
        body.created_at = moment(`${body.time} 12:00`, "YYYY-MM-DD HH:mm").utcOffset(420).toDate();
    } else {
        if (!body.created_at) {
            body.created_at = new Date();
        }
    }
    body.author = cek.data.data.nama;

    try {
        const cek_slug = await prisma.posts.findMany({
            where: {
                slug: body.slug
            }
        });
        if (cek_slug.length > 0) {
            return {
                status: 400,
                data: {
                    success: false,
                    message: 'Slug sudah digunakan'
                }
            }
        }
        const data = await prisma.posts.create({
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