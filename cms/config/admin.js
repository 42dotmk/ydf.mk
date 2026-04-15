module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dev-admin-jwt-secret-change-me'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dev-api-token-salt-change-me'),
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY', 'dev-encryption-key-change-me'),
    },
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'dev-transfer-token-salt-change-me'),
    },
  },
});
