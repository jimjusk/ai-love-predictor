export const config = {
  api: {
    url: process.env.API_URL,
    timeout: 30000,
  },
  monitoring: {
    sentry: {
      dsn: process.env.SENTRY_DSN,
      environment: 'production',
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  },
  security: {
    rateLimit: true,
    cors: {
      origin: ['https://ailovepredictor.com'],
    },
  },
}; 