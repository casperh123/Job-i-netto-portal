import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 2000 },   // ramp up
    { duration: '2m', target: 2000 },    // hold at high RPS
    { duration: '30s', target: 0 },     // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = 'https://jobinetto.dk';

export default function () {
  const jobsRes = http.get(`${BASE_URL}`);
  check(jobsRes, {
    'jobs status 200': (r) => r.status === 200,
  });
}
