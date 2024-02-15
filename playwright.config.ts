import {defineConfig, devices} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: '.',
    timeout: 60000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 2 : 1,
    reporter: process.env.CI ? 'github' : 'html',
    maxFailures: undefined,
    use: {
        headless: true,
        actionTimeout: 10000,
        navigationTimeout: 30000,
        trace: 'on',
        video: 'off',
        testIdAttribute: 'data-test-id',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ],

});
