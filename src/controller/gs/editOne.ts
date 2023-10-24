import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

const editOne = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const id = req.query.id as string;
    try {
        const gs: any = await prisma.guru_and_staffs.findUnique({
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
        let body = req.body;
        if (!body.jenis) {
            return {
                status: 404,
                data: {
                    success: false,
                    message: 'Jenis tidak boleh kosong'
                }
            }
        }

        const old_image = gs.profile.image;
        body.updated_at = new Date();
        const protect: string[] = ['_id', '__v', 'nama', 'jenis', 'created_at'];
        for (let key in gs) {
            if (!protect.includes(key)) {
                gs[key] = undefined;
            }
        }
        if (body.profile.image) {
            if (old_image !== 'website/gs/gpbe2jttvnhh1egbw6in') {
                await cloudinary.uploader.destroy(old_image, {
                    resource_type: 'image'
                });
            }
        } else {
            body.profile.image = old_image;
        }
        const data = await prisma.guru_and_staffs.update({
            where: {
                id: id
            },
            data: body
        });
        return {
            status: 200,
            data: {
                success: true,
                message: `Data dengan id ${id} berhasil diupdate`,
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