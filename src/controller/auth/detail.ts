import {NextApiRequest} from "next";
import {auth} from "@/lib/auth";

const detail = async function (req: NextApiRequest) {
    return await auth(req);
}

export default detail;