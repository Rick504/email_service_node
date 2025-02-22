export const config = {
  testMode: process.env.TEST_MODE === 'true',
  port: process.env.PORT || 3000,
  client: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};
