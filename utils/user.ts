import { queryDB } from './helpers';

export async function getTestUser() {
  const result = await queryDB('SELECT username, password FROM users LIMIT 1');
  return result[0];
}
