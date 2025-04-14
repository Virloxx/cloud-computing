import { PrismaClient } from "../../prisma/generated/prisma";

const prisma = new PrismaClient()

export async function getCountries() {
    const countries = await prisma.countries.findMany(

    );

    return countries;
}