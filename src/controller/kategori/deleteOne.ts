import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";

const deleteOne = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const id = req.query.id as string;
    try {
        const kat:any = await prisma.kategoris.findUnique({
            where: {
                id: id
            }
        });
        if (!kat) {
            return {
                status: 404,
                data: {
                    success: false,
                    message: 'kategori tidak ditemukan'
                }
            }
        }
        await prisma.kategoris.delete({
            where: {
                id: id
            }
        });
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil menghapus kategori',
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