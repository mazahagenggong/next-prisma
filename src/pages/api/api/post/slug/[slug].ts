import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";
import {SlugAPI} from "@/controller/api/post";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['POST'],
    });
    await runMiddleware(req, res, cors);

    switch (req.method) {
        case "POST" :
            const data = await SlugAPI(req);
            if (data.data.success) {
                return res.status(data.status).json(data.data.data);
            } else {
                return res.status(data.status).json(data.data);
            }
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}