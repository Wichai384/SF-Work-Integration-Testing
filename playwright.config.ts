import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  testMatch: ['**/*.spec.ts', '**/*.test.ts', '**/Work*.ts', '**/TestName.ts'],

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 3500,
    },
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      },
    },
  ],
});