import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['GET'],
    });
    await runMiddleware(req, res, cors);

    return res.status(404).json({
        error: "halaman tidak ada"
    });
}