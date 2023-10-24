import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";
import findOne from "@/controller/gs/findOne";
import deleteOne from "@/controller/gs/deleteOne";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['GET', 'DELETE'],
    })
    await runMiddleware(req, res, cors)

    switch (req.method) {
        case "GET" :
            const data = await findOne(req);
            if (data.data.success) {
                return res.status(data.status).json(data.data.data);
            } else {
                return res.status(data.status).json(data.data);
            }
        case "DELETE" :
            const dd = await deleteOne(req);
            return res.status(dd.status).json(dd.data);
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}