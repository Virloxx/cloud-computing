import { NextRequest } from 'next/server';
import { getCountries, getCountryByName, postNewCountry } from '@/lib/queries';
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get('country'); // e.g. `/api/search?query=hello`
 
  if (query !== null){
    const countries = await getCountryByName(query + " "); //because data in DB is "CountryName<whitespace>"
  
    return new Response(
      JSON.stringify(countries, (key, value) =>
        typeof value === "bigint" ? Number(value) : value, 
      ),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const added = postNewCountry(data.country);

    return new Response(
      JSON.stringify(added),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
}