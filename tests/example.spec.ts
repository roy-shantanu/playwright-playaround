import {expect, test} from '@playwright/test';

test.describe('Playwright homepage tests', () => {

    test.beforeAll('log details', () => {
        console.log(process.env.SHARD_TOTAL)
    })


    test('has title', async ({page}) => {
        console.log(process.env.SHARD_TOTAL)
        console.log(process.env.SHARD_INDEX)

        await page.goto('https://playwright.dev/');
        // Expect a title "to contain" a substring.

        await expect(page).toHaveTitle(/Playwright/);

    });

    test('get started link', async ({page}) => {

        console.log(process.env.SHARD_TOTAL)
        console.log(process.env.SHARD_INDEX)

        await page.goto('https://playwright.dev/');

        // Click the get started link.
        await page.getByRole('link', {name: 'Get started'}).click();

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
    });

    test('this will fail', async ({page}) => {
        console.log(process.env.SHARD_TOTAL)
        console.log(process.env.SHARD_INDEX)

        expect(true).toBe(false);
    });


})
