// src/routes/api/jobs/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { SALLING_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') || 1);

    const apiResponse = await fetch(`https://api.sallinggroup.com/v1/Jobs?brand=netto&country=DK&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${SALLING_API_KEY}`,
        'Accept': 'application/json'
      }
    });

    const apiKey = SALLING_API_KEY;
    
    const data = await apiResponse.json();
    
    const totalCount = apiResponse.headers.get('x-total-count');
    const linkHeader = apiResponse.headers.get('link');
	const newResponse = { pages: totalCount, items: data };
    
    return new Response(JSON.stringify(newResponse), {
      headers: {
        'Content-Type': 'application/json',
        'X-Total-Count': totalCount || '',
        'Link': linkHeader || ''
      }
    });
};