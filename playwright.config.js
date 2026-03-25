const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /* Run tests in files in sequence on CI to avoid triggering anti-bot protections */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI to handle flaky network or slow page loads */
  retries: process.env.CI ? 2 : 0,

  /* Use 1 worker on CI to maintain a single IP footprint and avoid CAPTCHAs/Blocks */
  workers: process.env.CI ? 1 : undefined,

  /* Smart reporter configuration:
     - On CI (GitHub): Uses 'github' for annotations and 'list' for clear step-by-step logs.
     - Locally: Uses 'list' for clean terminal output and 'html' for a detailed report.
  */
  reporter: process.env.CI 
    ? [['github'], ['list']] 
    : [['list'], ['html', { open: 'never' }]],

  /* Shared settings for all the projects below. */
use: {
    baseURL: 'https://practicesoftwaretesting.com',

    /* Increased timeouts for CI environments (GitHub Actions is often slower) */
    actionTimeout: 15000,
    navigationTimeout: 20000,

    /* Collect trace and video only on failure for easier debugging */
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

    /* Fixed viewport to prevent elements from hiding in mobile/hamburger menus */
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
    args: ['--window-size=1920,1080'],
  },

    /* Masking the browser as a real user to bypass basic bot detection */
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',

    launchOptions: {
      /* Add a small delay between actions to simulate human-like interaction */
      slowMo: 150,
      args: [
        /* IMPORTANT: Disables the flag that identifies the browser as automated */
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
      ],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    /* 1. Chromium project - Always active (Local & CI) */
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'auth/user-state.json',
        contextOptions: {
          javaScriptEnabled: true,
          trace: 'on', 
          video: 'on',
        },
      },
    },

    /* 2. Add Firefox and Webkit ONLY if we are NOT on GitHub Actions (CI) */
    ...(!process.env.CI ? [
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
    ] : []),
  ],
});