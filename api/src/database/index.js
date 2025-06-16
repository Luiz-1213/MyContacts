const { Client } = require('pg');
const { env } = require('../config/env');

// Objeto contendo as infos de conexão e acesso
const client = new Client({
  host: env.host,
  port: env.port,
  user: env.user,
  password: env.pass,
  database: env.name,
});

// Efetuando conexão
client.connect();

// Função de query
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
