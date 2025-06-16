if (!process.env.REACT_APP_API_URL) {
  throw new Error('API_URL is required in the env file');
}

export const env = {
  apiUrl: process.env.REACT_APP_API_URL,
};
