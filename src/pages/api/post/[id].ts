import type {NextApiRequest, NextApiResponse} from 'next';
import Cors from 'cors';
import runMiddleware from "@/lib/runMiddleware";
import findOne from "@/controller/post/findOne";
import deleteOne from "@/controller/post/deleteOne";
import editOne from "@/controller/post/editOne";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cors = Cors({
        methods: ['GET', 'DELETE', "PUT"],
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
        case "PUT" :
            const dp = await editOne(req);
            if (dp.data.success) {
                return res.status(dp.status).json(dp.data.data);
            } else {
                return res.status(dp.status).json(dp.data);
            }
        default:
            return res.status(404).json({
                error: "halaman tidak ada"
            })
    }
}