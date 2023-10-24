import {NextApiRequest} from "next";
import {admin} from "@/lib/auth";
import prisma from "@/lib/prisma";

const backup = async function (req: NextApiRequest) {
    const cek = await admin(req);
    if (!cek.data.success) {
        return {
            status: cek.status,
            data: cek.data
        }
    }
    try {
        const data = await prisma.guru_and_staffs.findMany();
        data.forEach((item:any) => {
            for (const key in item) {
                if (item[key] === null || item[key] === "") {
                    delete item[key];
                } else if (typeof item[key] === "object") {
                    for (const nestedKey in item[key]) {
                        if (item[key][nestedKey] === null || item[key][nestedKey] === "") {
                            delete item[key][nestedKey];
                        }
                    }
                    if (Object.keys(item[key]).length === 0) {
                        delete item[key];
                    }
                }
            }
            delete item.id;
        });
        return {
            status: 200,
            data: {
                success: true,
                data: data
            }
        }
    } catch (e) {
        return {
            status: 500,
            data: {
                success: false,
                message: e
            }
        }
    }
}
export default backup;