import { query } from "$app/server";
import cache from "$lib/services/cache";
import client from "./api/sallingClient";
import { z } from "zod/mini";

const jobEndpoint = `/v1/jobs/`;
const jobsEndpoint = `/v1/jobs?brand=netto&country=dk`;

export const getJob = query(z.string(), async (id: string): Promise<Job> => {
  return cache.get(`job_${id}`, () => client.Get<Job>(jobEndpoint + `/${id}`));
});

export const getJobs = query(z.number(), async (page = 1, perPage = 10): Promise<JobList> =>  {
  const cacheKey = `jobs_page_${page}`;

  const cachedResponse: JobList = await cache.get(cacheKey, async () => {
    const response = await client.GetRemote(jobsEndpoint + `&page=${page}`);

    let pages: number = Number(response.headers.get('x-total-count')) ?? 0;
    pages = Math.ceil(pages / perPage);
    const retrievedJobs: Job[] = await response.json();

    const jobs = retrievedJobs.map(job => ({
      title: job.title,
      id: job.id,
      address: job.address
    }));  

    return { pages, jobs };
  });

  return cachedResponse;
})

export interface JobList {
  pages: number;
  jobs: JobResume[];
}

export interface JobResume extends Pick<Job, | 'title' | 'id' | 'address'> {
  title : string;
  id: string;
  address?: Address;
}
