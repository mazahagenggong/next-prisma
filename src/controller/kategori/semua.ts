import {NextApiRequest} from "next";
import {datacard} from "@/lib/card";
import prisma from "@/lib/prisma";
import {admin} from "@/lib/auth";

const alldatant = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    const data = await prisma.kategoris.findMany();
    return {
        status: 200,
        data: {
            success: true,
            message: 'Berhasil mendapatkan data',
            data: data
        }
    }
}
export default alldatant;