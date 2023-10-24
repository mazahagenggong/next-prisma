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
        const gs:any = await prisma.guru_and_staffs.findUnique({
            where: {
                id: id
            }
        });
        if (!gs) {
            return {
                status: 404,
                data: {
                    success: false,
                    message: 'guru atau staff tidak ditemukan'
                }
            }
        }
        if (gs.profile.image && gs.profile.image !== 'website/gs/gpbe2jttvnhh1egbw6in' && gs.profile.image !== '' ) {
            await cloudinary.uploader.destroy(gs.profile.image, {
                resource_type: 'image'
            });
        }
        const data = await prisma.guru_and_staffs.delete({
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