import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import prisma from "@/lib/prisma"
import runMiddleware from "@/lib/runMiddleware";
import jwt from "jsonwebtoken"

const post = async function (req: any) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return {
            status: 401,
            data: {
                success: false,
                message: 'Token tidak ada'
            }
        }
    }
    try {
        const cek_token: any = jwt.verify(token, process.env.JWT_SECRET ?? '');
        if (!cek_token.id) {
            return {
                status: 401,
                data: {
                    success: false,
                    message: 'Token tidak valid'
                }
            }
        }
        const id_user = await cek_token.id ?? 'xxx';
        const user = await prisma.users.findUnique({
            where: {id: id_user},
            select: {
                id: true,
                username: true,
                email: true,
                nama: true,
                gambar: true,
                role: true,
            },
        });
        if (!user) {
            return {
                status: 401,
                data: {
                    success: false,
                    message: 'User tidak ditemukan'
                }
            }
        }
        return {
            status: 200,
            data: {
                success: true,
                data: user
            }
        }
    } catch (error: any) {
        return {
            status: 500,
            data: {
                success: false,
                error: error
            }
        }
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['POST'],
    })
    await runMiddleware(req, res, cors)

    if (req.method === "POST") {
        const data = await post(req);
        return res.status(data.status).json(data.data);
    }
}