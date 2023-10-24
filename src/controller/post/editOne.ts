import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import moment from "moment";

const editOne = async function (req: NextApiRequest) {
    const cek: any = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const id = req.query.id as string;
    try {
        const post: any = await prisma.posts.findUnique({
            where: {
                id: id
            }
        });
        if (!post) {
            return {
                status: 404,
                data: {
                    success: false,
                    message: 'post tidak ditemukan'
                }
            }
        }
        let body = req.body;
        const required = [
            'judul',
            'slug',
            'body',
            'kategori',
            'excerpt',
            'time',
        ];
        const slug = body.slug;
        const slug_count = await prisma.posts.count({
            where: {
                slug: slug,
                id: {
                    not: id
                }
            }
        });
        if (slug_count > 0) {
            return {
                status: 400,
                data: {
                    success: false,
                    message: 'Slug sudah digunakan'
                }
            }
        }
        if (!required.every(key => Object.keys(body).includes(key))) {
            return {
                status: 400,
                data: {
                    success: false,
                    message: 'Data tidak lengkap'
                }
            }
        }
        body.author = cek.data.data.nama;
        body.created_at = moment(`${body.time} 12:00`, "YYYY-MM-DD HH:mm").utcOffset(420).toDate();
        body.updated_at = new Date();

        const old_image = post.gambar;
        body.updated_at = new Date();

        if (body.gambar) {
            if (old_image !== process.env.DEFAULT_POST_IMAGE) {
                await cloudinary.uploader.destroy(old_image, {
                    resource_type: 'image'
                });
            }
        } else {
            body.gambar = old_image;
        }

        const data = await prisma.posts.update({
            where: {
                id: id
            },
            data: body
        });
        return {
            status: 200,
            data: {
                success: true,
                message: `Post dengan id ${id} berhasil diupdate`,
                data: data
            }
        }
    } catch (e: any) {
        console.log(e)
        return {
            status: 500,
            data: {
                success: false,
                message: e
            }
        }
    }
}

export default editOne;