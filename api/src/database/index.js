const { Client } = require('pg');
const { env } = require('../config/env');

// Objeto contendo as infos de conexão e acesso
const client = new Client({
  connectionString: env.databaseURI,
  ssl: {
    rejectUnauthorized: false, // Supabase exige SSL
  },
});

// Efetuando conexão
client.connect();

// Função de query
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
