import { test, expect } from '@playwright/test';

test('Playwright native page should have several link related to tests', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page).toHaveURL('/playwright-native');

  await page.getByRole('link', { name: 'toBeChecked' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeChecked');
  await expect(page.getByRole('heading', { name: 'toBeChecked' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeDisabled' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeDisabled');
  await expect(page.getByRole('heading', { name: 'toBeDisabled' })).toBeVisible();
  
  await page.getByRole('link', { name: 'toBeEditable' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeEditable');
  await expect(page.getByRole('heading', { name: 'toBeEditable' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeEmpty' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeEmpty');
  await expect(page.getByRole('heading', { name: 'toBeEmpty' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeEnabled' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeEnabled');
  await expect(page.getByRole('heading', { name: 'toBeEnabled' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeFocused' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeFocused');
  await expect(page.getByRole('heading', { name: 'toBeFocused' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeHidden' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeHidden');
  await expect(page.getByRole('heading', { name: 'toBeHidden' })).toBeVisible();

  await page.getByRole('link', { name: 'toBeVisible' }).click();
  await expect(page).toHaveURL('/playwright-native#toBeVisible');
  await expect(page.getByRole('heading', { name: 'toBeVisible' })).toBeVisible();

  await page.getByRole('link', { name: 'toContainText' }).click();
  await expect(page).toHaveURL('/playwright-native#toContainText');
  await expect(page.getByRole('heading', { name: 'toContainText' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveAttribute' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveAttribute');
  await expect(page.getByRole('heading', { name: 'toHaveAttribute' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveClass' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveClass');
  await expect(page.getByRole('heading', { name: 'toHaveClass' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveCss' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveCss');
  await expect(page.getByRole('heading', { name: 'toHaveCss' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveId' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveId');
  await expect(page.getByRole('heading', { name: 'toHaveId' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveText' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveText');
  await expect(page.getByRole('heading', { name: 'toHaveText' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveValue' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveValue');
  await expect(page.getByRole('heading', { name: 'toHaveValue' })).toBeVisible();

  await page.getByRole('link', { name: 'toHaveValues' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveValues');
  await expect(page.getByRole('heading', { name: 'toHaveValues' })).toBeVisible();
  
  await page.getByRole('link', { name: 'toHaveTitle' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveTitle');
  await expect(page.getByRole('heading', { name: 'toHaveTitle' })).toBeVisible();
  
  await page.getByRole('link', { name: 'toHaveURL' }).click();
  await expect(page).toHaveURL('/playwright-native#toHaveURL');
  await expect(page.getByRole('heading', { name: 'toHaveURL' })).toBeVisible();
  
});

test.describe('Test components in Native Page', () => {
  test('render a heading', async ({ page }) => {
    await page.goto('/playwright-native');
    const heading = page.getByTestId('heading');
    await expect(heading).toBeVisible()
  });

  test('renders a native button', async ({ page }) => {
    await page.goto('/playwright-native');
    const button = page.getByTestId('button-native')
    await expect(button).toBeVisible()
  });

  test('renders a native input', async ({ page }) => {
    await page.goto('/playwright-native');
    const input = page.getByTestId('input-native')
    await expect(input).toBeVisible()
  });

  test('renders <a></a> tag with link as text and not disabled', async ({ page }) => {
    await page.goto('/playwright-native');
    const aTag = page.getByRole('link', { name: 'link' })
    await expect(aTag).toBeVisible()
    await expect(aTag).not.toBeDisabled()
  });
});

test('Test toBeChecked', async ({ page }) => {
  await page.goto('/playwright-native');
  const inputCheckboxChecked = page.getByTestId('input-checkbox-checked')
  const inputCheckboxUnchecked = page.getByTestId('input-checkbox-unchecked')
  await expect(inputCheckboxChecked).toBeChecked()
  await expect(inputCheckboxUnchecked).not.toBeChecked()
  const inputRadioChecked = page.getByTestId('input-radio-checked')
  const inputRadioUnchecked = page.getByTestId('input-radio-unchecked')
  await expect(inputRadioChecked).toBeChecked()
  await expect(inputRadioUnchecked).not.toBeChecked()
})

test('Test toBeDisabled', async ({ page }) => {
  await page.goto('/playwright-native');
  const button = page.getByTestId('button-native-disabled')
  const input = page.getByTestId('input-native-disabled')
  const aTag = page.getByRole('link', { name: 'link' })
  await expect(button).toBeDisabled()
  await expect(input).toBeDisabled()
  await expect(aTag).not.toBeDisabled()
})

test('Test toBeEditable', async ({ page }) => {
  await page.goto('/playwright-native');
  const input = page.getByTestId('input-native-editable')
  await expect(input).toBeEditable()
})

test('Test toBeEmpty', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('empty')).toBeEmpty()
  await expect(page.getByTestId('not-empty')).toBeEmpty()
  await expect(page.getByTestId('with-whitespace')).toBeEmpty()
  await expect(page.getByTestId('with-comment')).toBeEmpty()
})

test('Test toBeEnabled', async ({ page }) => {
  await page.goto('/playwright-native');
  const button = page.getByTestId('button-native-enabled')
  const input = page.getByTestId('input-native-enabled')
  await expect(button).toBeEnabled()
  await expect(input).toBeEnabled()
})

test('Test toBeFocused', async ({ page }) => {
  await page.goto('/playwright-native');
  const button = page.getByTestId('button-tobefocused')
  const input = page.getByTestId('input-tobefocused')
  await button.click()
  await expect(button).toBeFocused()
  await input.click()
  await expect(input).toBeFocused()
})

test('Test toBeHidden', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('does-not-exist')).toBeHidden()
  await expect(page.getByText('Visibility Hidden Example')).toBeHidden()
  await expect(page.getByText('Display None Example')).toBeHidden()
  await expect(page.getByText('Hidden Attribute Example')).toBeHidden()
})

test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('html-element')).toBeVisible()
  await expect(page.getByTestId('svg-element')).toBeVisible()
  await expect(page.getByText('Zero Opacity Example')).toBeVisible()
  await expect(page.getByText('Hidden Parent Example')).toBeVisible()
  await expect(page.getByText('Visible Example')).toBeVisible()
  await expect(page.getByText('Hidden Details Example')).toBeVisible()
  await expect(page.getByText('Visible Details Example')).toBeVisible()
})

test('Test toContainText', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('div-tocontaintext')).toContainText('to Contain Text')
  await expect(page.getByTestId('div-tocontaintext')).toContainText('Text')
  await expect(page.locator('ul > li')).toContainText(['Text 1', 'Text 3']);
})

test('Test toHaveAttribute', async ({ page }) => {
  await page.goto('/playwright-native');
  const button = page.getByTestId('ok-button')
  await expect(button).toBeDisabled()
  await expect(button).toHaveAttribute('disabled', "")
  await expect(button).toHaveAttribute('type', 'submit')
  await expect(button).not.toHaveAttribute('type', 'button')
})

test('Test toHaveClass', async ({ page }) => {
  await page.goto('/playwright-native');
  const deleteButton = page.getByTestId('delete-button')
  const noClasses = page.getByTestId('no-classes')
  await expect(deleteButton).toHaveClass(/extra/)
  await expect(deleteButton).toHaveClass(/btn extra btn-danger text-sm/)
  await expect(deleteButton).not.toHaveClass('btn-link')
  // to check if the element has EXACTLY a set of classes
  await expect(deleteButton).toHaveClass('btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all', { exact: true })
  // if it has more than expected it is going to fail
  await expect(deleteButton).not.toHaveClass('btn-danger extra', { exact: true })
  await expect(noClasses).not.toHaveClass(/btn extra btn-danger text-sm/)
})

test('Test toHaveCss', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('button-tohavecss')).toHaveCSS('display', 'flex');
})

test('Test toHaveId', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page.getByTestId('button-tohaveid')).toHaveId('buttonId')
})

test('Test toHaveText', async ({ page }) => {
  await page.goto('/playwright-native');
  const element = page.getByTestId('text-content')
  await expect(element).toHaveText('Text Content')
  // to match the whole content
  await expect(element).toHaveText(/^Text Content$/)
  // to use case-insensitive match
  await expect(element).toHaveText(/content$/i)
  await expect(element).not.toHaveText('content')
  await expect(page.locator('.tohavetext > li')).toHaveText(['Text 1', 'Text 2', 'Text 3']);
})

test('Test toHaveValue', async ({ page }) => {
  await page.goto('/playwright-native');
  const textInput = page.getByTestId('input-text')
  const numberInput = page.getByTestId('input-number')
  const emptyInput = page.getByTestId('input-empty')
  const selectInput = page.getByTestId('select-number')
  await expect(textInput).toHaveValue('text')
  await expect(numberInput).toHaveValue("5")
  await expect(emptyInput).not.toHaveValue("empty")
  await expect(selectInput).toHaveValue('second')
})

test('Test toHaveValues', async ({ page }) => {
  await page.goto('/playwright-native');
  const locator = page.locator("id=favorite-colors");
  await locator.selectOption(["R", "G"]);
  await expect(locator).toHaveValues([/R/, /G/]);
})

test('Test toHaveTitle', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page).toHaveTitle(/Playwright Native/)
})

test('Test toHaveURL', async ({ page }) => {
  await page.goto('/playwright-native');
  await expect(page).toHaveURL(/playwright-native/)
})