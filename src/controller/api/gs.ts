import {NextApiRequest} from "next";
import prisma from "@/lib/prisma";
import {gscard} from "@/lib/card";

const GSAPI = async function (req: NextApiRequest, status: string) {
    const reqbody = req.body;
    const search_list = [
        'nama',
        'jabatan',
        'bidang_studi'
    ];
    const sort_by = {nama: "asc"};
    const data = await gscard(prisma.guru_and_staffs, reqbody, search_list, sort_by, status);
    return {
        status: data.status,
        data: data.data
    }
}

export default GSAPI;