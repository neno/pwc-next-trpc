import { PrismaClient } from '@prisma/client';

declare global {
  var prismaClient: PrismaClient | undefined;
}

export const prismaClient = global.prismaClient ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaClient = prismaClient;
}
