import {NextApiRequest} from "next";
import {datacard} from "@/lib/card";
import prisma from "@/lib/prisma";

const alldata = async function (req: NextApiRequest){
    const reqbody = req.body;
    const search_list = [
        'judul',
        'body',
        'kategori',
        'author'
    ];
    const sort_by = {created_at: "desc"};
    const data = await datacard(prisma.posts, reqbody, search_list, sort_by);
    return {
        status: data.status,
        data: data.data
    }
}

export default alldata;