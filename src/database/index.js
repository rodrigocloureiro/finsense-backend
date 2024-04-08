import pg from 'pg';

const client = new pg.Client({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

client.connect();

export default async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
