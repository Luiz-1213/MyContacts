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
  port: getEnvVariable('PORT'),
  databaseURI: getEnvVariable('DB_URI'),
};
