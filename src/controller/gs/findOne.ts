import {NextApiRequest} from "next";
import {auth} from "@/lib/auth";
import prisma from "@/lib/prisma";

const findOne = async function (req: NextApiRequest) {
    const cek = await auth(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const id = req.query.id as string;
    try {
        const gs = await prisma.guru_and_staffs.findUnique({
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
        return {
            status: 200,
            data: {
                success: true,
                data: gs
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

export default findOne;