import { expect } from '@playwright/test';
import { test } from './fixture';
import testConfig from '../config.ts'

test.describe('Playwright homepage tests', () => {

    test('has title', async ({ page, unregisteredFbUsers }, testInfo) => {
        console.log('email :', unregisteredFbUsers.email, ' index :', unregisteredFbUsers.index, 'testName', testInfo.title)

        await page.goto('https://playwright.dev/');
        // Expect a title "to contain" a substring.


        await expect(page).toHaveTitle(/Playwright/);

    });

    test('get started link', async ({ page, unregisteredFbUsers }, testInfo) => {

        console.log('email :', unregisteredFbUsers.email, ' index :', unregisteredFbUsers.index, 'testName', testInfo.title)

        await page.goto('https://playwright.dev/');

        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();


        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test('this will fail', async ({ page, unregisteredFbUsers }, testInfo) => {

        console.log('email :', unregisteredFbUsers.email, ' index :', unregisteredFbUsers.index, 'testName', testInfo.title)

        expect(true).toBe(true);
    });

    test('Another Test', async ({ page, unregisteredFbUsers }, testInfo) => {

        console.log('email :', unregisteredFbUsers.email, ' index :', unregisteredFbUsers.index, 'testName', testInfo.title)

        expect(true).toBe(true);
    });


    test.only('testing secret', async ({ page, unregisteredFbUsers }, testInfo) => {

        console.log(testConfig.credentials)

    }); 
    
    test.only('testing secret 2', async ({ page, unregisteredFbUsers }, testInfo) => {

        console.log(testConfig.credentials)

    });

})
