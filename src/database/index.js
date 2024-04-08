import pg from 'pg';

const client = new pg.Client({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

client.connect();

export default async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
