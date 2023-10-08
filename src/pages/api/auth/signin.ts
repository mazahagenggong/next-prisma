import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import prisma from "@/lib/prisma"
import runMiddleware from "@/lib/runMiddleware";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const post = async function (body: any) {
    try {
        const {username, password, remember} = body;
        if (!username || !password) {
            return {
                status: 200,
                data: {
                    success: false,
                    message: "Username dan password harus diisi"
                }
            }
        }
        const user = await prisma.users.findUnique({
            where: {username: username},
        });
        if (!user) {
            return {
                status: 200,
                data: {
                    success: false,
                    message: 'Username atau password salah'
                }
            }
        }
        // @ts-ignore
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return {
                status: 200,
                data: {
                    success: false,
                    message: 'Username atau password salah'
                }
            }
        }
        let expires;
        let kadaluarsa;
        if (remember) {
            expires = '7d';
            kadaluarsa = '7 hari';
        } else {
            expires = '1d';
            kadaluarsa = '1 hari';
        }
        const token = jwt.sign({id: user?.id}, process.env.JWT_SECRET ?? '', {
            expiresIn: expires,
        });
        let data = {
            id: user?.id,
            nama: user?.nama,
            username: user?.username,
            email: user?.email,
            role: user?.role,
            token: token,
            expires: kadaluarsa
        }
        return {
            status: 200,
            data: {
                success: true,
                message: 'Berhasil login',
                data: data
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
        const data = await post(req.body);
        return res.status(data.status).json(data.data);
    }
}