import queryString from 'querystring';
import { BASE_URL_API, BASE_KEY_API } from './config';

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);

  return fetch(`${BASE_URL_API}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${BASE_KEY_API}`,
      Origin: 'localhost',
      withCredentials: true,
    },
  });
}
