import type {PlaywrightTestConfig} from '@playwright/test'
import {devices} from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: '.',
    timeout: 60000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 2 : 1,
    reporter: process.env.CI ? [['github'], ['blob']] : 'html',
    maxFailures: undefined,
    use: {
        headless: true,
        actionTimeout: 10000,
        navigationTimeout: 30000,
        trace: 'retain-on-failure',
        video: 'off',
        testIdAttribute: 'data-test-id',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ],
}

export default config

