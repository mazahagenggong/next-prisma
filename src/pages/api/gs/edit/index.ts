import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import runMiddleware from "@/lib/runMiddleware";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['GET','POST'],
    })
    await runMiddleware(req, res, cors)
    return res.status(200).json({success: true, data: 'halaman tidak ada'});
}