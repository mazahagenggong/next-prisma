import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";
import GSAPI from "@/controller/api/gs";

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
            const data = await GSAPI(req, "pimpinan");
            return res.status(data.status).json(data.data);
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}