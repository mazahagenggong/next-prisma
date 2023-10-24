import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";
import deleteOne from "@/controller/kategori/deleteOne";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['DELETE'],
    })
    await runMiddleware(req, res, cors)

    switch (req.method) {
        case "DELETE" :
            const dd = await deleteOne(req);
            return res.status(dd.status).json(dd.data);
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}