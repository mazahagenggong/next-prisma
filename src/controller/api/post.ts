import {NextApiRequest} from "next";
import prisma from "@/lib/prisma";

export const SlugAPI = async function (req: NextApiRequest) {
    const slug = req.query.slug as string;
    try {
        const post = await prisma.posts.findFirst({
            where: {
                slug: slug
            }
        });
        console.log(post);
        if (!post) {
            console.log("Post tidak ditemukan");
            return {
                status: 400,
                data: {
                    success: false,
                    message: "Post tidak ditemukan"
                }
            }
        }
        return {
            status: 200,
            data: {
                success: true,
                message: "Post ditemukan",
                data: post,
            }
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                success: false,
                message: err
            }
        }
    }

}