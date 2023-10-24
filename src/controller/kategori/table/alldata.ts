import {NextApiRequest} from "next";
import {datacard} from "@/lib/card";
import prisma from "@/lib/prisma";
import {admin} from "@/lib/auth";

const alldata = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const reqbody = req.body;
    const search_list = [
        'nama',
    ];
    const sort_by = {nama: "asc"};
    const data = await datacard(prisma.kategoris, reqbody, search_list, sort_by);
    return {
        status: data.status,
        data: data.data
    }
}
export default alldata;