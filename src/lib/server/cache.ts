const cache = new Map();
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export default {
  async get(key : string, fetchFn) {
    const cached = cache.get(key);
    
    if (cached && cached.expiry > Date.now()) {
      return cached.data;
    }
    
    const data = await fetchFn();
    
    cache.set(key, {
      data,
      expiry: Date.now() + DAY_IN_MS
    });
    
    return data;
  }
};