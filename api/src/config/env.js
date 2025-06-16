function getEnvVariable(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Environment variable ${name} is required but was not provided`,
    );
  }
  return value;
}

// eslint-disable-next-line import/prefer-default-export
export const env = {
  host: getEnvVariable('DB_HOST'),
  port: getEnvVariable('DB_PORT'),
  user: getEnvVariable('DB_USER'),
  pass: getEnvVariable('DB_PASS'),
  name: getEnvVariable('DB_NAME'),
};
