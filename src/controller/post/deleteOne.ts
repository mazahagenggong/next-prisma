import {NextApiRequest} from "next";
import {auth} from "@/lib/auth";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

const deleteOne = async function (req: NextApiRequest) {
    const cek = await auth(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const id = req.query.id as string;
    try {
        const post:any = await prisma.posts.findUnique({
            where: {
                id: id
            }
        });
        if (!post) {
            return {
                status: 404,
                data: {
                    success: false,
                    message: 'guru atau staff tidak ditemukan'
                }
            }
        }
        if (post.gambar && post.gambar !== process.env.DEFAULT_POST_IMAGE && post.gambar !== '' ) {
            await cloudinary.uploader.destroy(post.gambar, {
                resource_type: 'image'
            });
        }
        await prisma.posts.delete({
            where: {
                id: id
            }
        });
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil menghapus data',
            }
        }
    } catch (e) {
        return {
            status: 500,
            data: {
                success: false,
                message: e
            }
        }
    }
}

export default deleteOne;