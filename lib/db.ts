import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;


// We are not using the below line of code because of hot reload feature
// which will create a prisma client everytime there is a change any file and the code is re-compiled

// export const db = new PrismaClient();