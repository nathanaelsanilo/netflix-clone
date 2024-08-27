import { PrismaClient } from "@prisma/client";

const client = globalThis.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

export default client;
