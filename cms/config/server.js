module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS', [
      'dev-app-key-1-change-me',
      'dev-app-key-2-change-me',
      'dev-app-key-3-change-me',
      'dev-app-key-4-change-me',
    ]),
  },
  proxy: {
    koa: env.bool('PROXY_KOA', true),
  },
  http: {
    serverOptions: {
      requestTimeout: env.int('REQUEST_TIMEOUT', 600000),
    },
  },
});
