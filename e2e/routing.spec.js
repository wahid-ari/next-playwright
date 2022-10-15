 // @ts-check
const { test, expect } = require('@playwright/test');

test('should navigate to the index, native and example page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // The url should be "/" (baseURL is used there)
  await expect(page).toHaveURL('/');
  // The page should contain an heading with "Components Test"
  await expect(page.getByRole('heading', { name: 'Components Test' })).toBeVisible()
  
  // Find an element with the text 'Native' and click on it
  await page.getByRole('link', { name: 'Native' }).click();
  await expect(page).toHaveURL('/native');
  await expect(page.getByRole('heading', { name: 'Native Test' })).toBeVisible()
  
  // Find an element with the text 'Playwright Native' and click on it
  await page.getByRole('link', { name: 'Playwright Native' }).click();
  await expect(page).toHaveURL('/playwright-native');
  await expect(page.getByRole('heading', { name: 'Playwright Native Test' })).toBeVisible()
  
  // Find an element with the text 'Playwright Form' and click on it
  await page.getByRole('link', { name: 'Playwright Form' }).click();
  await expect(page).toHaveURL('/playwright-form');
  await expect(page.getByRole('heading', { name: 'Playwright Form' })).toBeVisible()
  
  // Find an element with the text 'Playwright Form' and click on it
  await page.getByRole('link', { name: 'Playwright Forms' }).click();
  await expect(page).toHaveURL('/playwright-forms');
  await expect(page.getByRole('heading', { name: 'Playwright Forms' })).toBeVisible()
})