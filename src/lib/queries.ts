import { PrismaClient } from "../../prisma/generated/prisma";

const prisma = new PrismaClient()

export async function getCountries() {
    const countries = await prisma.countries.findMany(

    );

    return countries;
}

export async function getCountryByName(name : string) {
    const countries = await prisma.countries.findMany({
        where:{
            country: name
        }
    }
    );

    return countries;
}