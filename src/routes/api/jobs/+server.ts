// src/routes/api/jobs/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { SALLING_API_KEY } from '$env/static/private';
import cache from '$lib/server/cache';

export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') || 1);

    const cachedResponse = await cache.get(`jobs_page_${page}`, async () => {
        const response = await fetch(`https://api.sallinggroup.com/v1/Jobs?brand=netto&country=DK&page=${page}`, {
          headers: {
            'Authorization': `Bearer ${SALLING_API_KEY}`,
            'Accept': 'application/json'
          }
        })

        const jobCount = response.headers.get('x-total-count');
	      const jobs = await response.json();
    
        return {
          jobs: jobs,
          count: jobCount
        };
      }
    );



    const totalCount = cachedResponse.count;
    const newResponse = { pages: totalCount, items: cachedResponse.jobs };
    
    return new Response(JSON.stringify(newResponse), {
      headers: {
        'Content-Type': 'application/json',
        'X-Total-Count': totalCount || '',
        'cache-control': 'max-age=6000'
      }
    });
};