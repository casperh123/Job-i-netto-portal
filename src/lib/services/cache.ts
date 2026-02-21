// $lib/server/cache.ts
import Redis from 'ioredis';

import { REDIS_URL } from '$env/static/private';

const redis = new Redis(REDIS_URL);
const DAY_IN_SECONDS = 60 * 60 * 24;

export default {
  async get<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const cached = await redis.get(key);

    console.log(key);
    
    if (cached) {
      return JSON.parse(cached) as T;
    }
    
    const data = await fetchFn();
    await redis.set(key, JSON.stringify(data), 'EX', DAY_IN_SECONDS);
    
    return data;
  }
};
