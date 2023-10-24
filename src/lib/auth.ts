import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export const auth = async function (req:any){
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

export const admin = async function (req:any){
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
        if (user.role !== 'admin') {
            return {
                status: 401,
                data: {
                    success: false,
                    message: 'Anda bukan admin'
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