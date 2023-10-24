import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";

const reset = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    try {
        await prisma.posts.deleteMany();
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil menghapus semua data'
            }
        }
    } catch (e:any) {
        return {
            status: 500,
            data: {
                success: false,
                message: e.message
            }
        }
    }
}

export default reset;