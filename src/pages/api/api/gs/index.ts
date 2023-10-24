import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import prisma from "@/lib/prisma"
import runMiddleware from "@/lib/runMiddleware";
import {gscard} from "@/lib/card";

const post = async function (req: NextApiRequest) {
    const reqbody = req.body;
    const search_list = [
        'nama',
        'jabatan',
        'bidang_studi'
    ];
    const status = 'semua';
    const sort_by = {nama: "asc"};
    const data = await gscard(prisma.guru_and_staffs, reqbody, search_list, sort_by, status);
    return {
        status: data.status,
        data: data.data
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

    switch (req.method) {
        case "POST" :
            const data = await post(req);
            return res.status(data.status).json(data.data);
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}