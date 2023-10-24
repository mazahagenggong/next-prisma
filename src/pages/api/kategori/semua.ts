import {NextApiRequest, NextApiResponse} from "next";
import Cors from "cors";
import runMiddleware from "@/lib/runMiddleware";
import alldatant from "@/controller/kategori/semua";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['GET'],
    });
    await runMiddleware(req, res, cors);

    switch (req.method) {
        case "GET" :
            const data = await alldatant(req);
            return res.status(data.status).json(data.data);
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            });
    }
}