import {PrismaClient} from '../../prisma/generated/client';

declare global {
    var pc: PrismaClient | undefined;
}

const prisma = globalThis.pc || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.pc = prisma;

export default prisma;