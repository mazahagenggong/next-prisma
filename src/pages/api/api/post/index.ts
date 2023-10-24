import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import prisma from "@/lib/prisma"
import runMiddleware from "@/lib/runMiddleware";
import {datacard} from "@/lib/card";

const post = async function (req: NextApiRequest){
    const reqbody = req.body;
    const search_list = [
        'judul',
        'body',
        'kategori',
        'author'
    ];
    const sort_by = {created_at: "desc"};
    const data = await datacard(prisma.posts, reqbody, search_list, sort_by);
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