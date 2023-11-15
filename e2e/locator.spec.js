 // @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach

test('should navigate to the locator page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/playwright-locator');
  // The url should be "/" (baseURL is used there)
  await expect(page).toHaveURL('/playwright-locator');
  // The page should contain an heading with "Components Test"
  await expect(page.getByRole('heading', { name: 'Playwright Page Locator' })).toBeVisible();
})

test('test uncheck', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('uncheck');
  const isChecked = await element.isChecked();
  console.log(isChecked);
  expect(isChecked).toBe(true);
  await element.uncheck();
  const isUnchecked = await element.isChecked();
  console.log(isUnchecked);
  expect(isUnchecked).toBe(false);
})

test('test setChecked', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('setChecked');
  await element.setChecked(true);
  const isChecked = await element.isChecked();
  console.log(isChecked);
  expect(isChecked).toBe(true);
  await element.setChecked(false);
  const isUnchecked = await element.isChecked();
  console.log(isUnchecked);
  expect(isUnchecked).toBe(false);
})

test('test isChecked', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isChecked');
  const isChecked = await element.isChecked();
  console.log(isChecked);
  expect(isChecked).toBe(true);
})

test('test isDisabled', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isDisabled');
  const isDisabled = await element.isDisabled();
  console.log(isDisabled);
  expect(isDisabled).toBe(true);
})

test('test isEditable', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isEditable');
  const isEditable = await element.isEditable();
  console.log(isEditable);
  expect(isEditable).toBe(true);
})

test('test isEnabled', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isEnabled');
  const isEnabled = await element.isEnabled();
  console.log(isEnabled);
  expect(isEnabled).toBe(true);
})

test('test isHidden', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isHidden');
  const isHidden = await element.isHidden();
  console.log(isHidden);
  expect(isHidden).toBe(true);
})

test('test isVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  const element = page.getByTestId('isVisible');
  const isVisible = await element.isVisible();
  console.log(isVisible);
  expect(isVisible).toBe(true);
})