import { NextRequest } from 'next/server';
import { getCountries } from '@/lib/queries';
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = searchParams.get('query'); // e.g. `/api/search?query=hello`
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const countries = await getCountries();
  
  return new Response(
    JSON.stringify(countries, (key, value) =>
      typeof value === "bigint" ? Number(value) : value, 
    ),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}