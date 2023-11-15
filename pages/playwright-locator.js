import Head from 'next/head'
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import Code from '../components/Code';
import PlaywrightWrapper from '../components/PlaywrightWrapper';

export default function Native() {

  return (
    <div>
      <Head>
        <title>Playwright Page Locator</title>
        <meta name="description" content="Playwright Page Locator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen">

        <Navbar />

        <BackToTop />

        <div className="max-w-5xl mx-auto p-4">

          <h1 data-testid="heading" className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Playwright Page Locator
            <a href="https://playwright.dev/docs/api/class-page" className="text-sky-600 hover:text-sky-700 transition-all text-sm pl-4" target="_blank" rel="noreferrer">Docs</a>
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3">
            <div>
              <a href="#getByAltText" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByAltText
              </a>
              <a href="#getByLabel" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByLabel
              </a>
              <a href="#getByPlaceholder" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByPlaceholder
              </a>
              <a href="#getByRole" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByRole
              </a>
              <a href="#getByTestId" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByTestId
              </a>
              <a href="#getByText" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByText
              </a>
              <a href="#getByTitle" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                getByTitle
              </a>
            </div>
            <div>
              <a href="#goto" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                goto
              </a>
              <a href="#click" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                click
              </a>
              <a href="#fill" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                fill
              </a>
              <a href="#check" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                check
              </a>
              <a href="#uncheck" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                uncheck
              </a>
              <a href="#selectOption" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                selectOption
              </a>
            </div>
            <div>
              <a href="#isChecked" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isChecked
              </a>
              <a href="#isDisabled" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isDisabled
              </a>
              <a href="#isEditable" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isEditable
              </a>
              <a href="#isEnabled" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isEnabled
              </a>
              <a href="#isHidden" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isHidden
              </a>
              <a href="#isVisible" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                isVisible
              </a>
            </div>
          </div>

          {/* Page getByAltText*/}
          <PlaywrightWrapper
            title="getByAltText"
            link="https://playwright.dev/docs/api/class-page#page-get-by-alt-text"
            description={`Allows locating elements by their alt text. For example, this method will find the image by alt text "Castle":`}
          >
            <Code lang='html'
              code={`<img alt='Castle' src="castle.jpg">`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByAltText('Castle')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByLabel*/}
          <PlaywrightWrapper
            title="getByLabel"
            link="https://playwright.dev/docs/api/class-page#page-get-by-label"
            description={`Allows locating input elements by the text of the associated label. For example, this method will find the input by label text Password in the following DOM:`}
          >
            <Code lang='html'
              code={`<label for="password-input">Password:</label>
<input id="password-input" type="password">`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByLabel('password-input')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByPlaceholder*/}
          <PlaywrightWrapper
            title="getByPlaceholder"
            link="https://playwright.dev/docs/api/class-page#page-get-by-placeholder"
            description={`Allows locating input elements by the placeholder text. For example, this method will find the input by placeholder "Country":`}
          >
            <Code lang='html'
              code={`<input placeholder="Country">`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByPlaceholder('Country')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByRole*/}
          <PlaywrightWrapper
            title="getByRole"
            link="https://playwright.dev/docs/api/class-page#page-get-by-role"
            description={`Allows locating elements by their ARIA role, ARIA attributes and accessible name. Note that role selector does not replace accessibility audits and conformance tests, but rather gives early feedback about the ARIA guidelines. <"alert" | "blockquote"| "button"| "textbox"| "checkbox"| "combobox"| "dialog" | "figure" | "heading"| "img" | "link" | "option" | "radio">`}
          >
            <Code lang='html'
              code={`<button type='submit'>submit</button>
<a href="#">Get Started</a>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByRole('button', {name: 'submit'})).toBeVisible()
  await expect(page.getByRole('link', {name: 'Get Started'})).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByTestId*/}
          <PlaywrightWrapper
            title="getByTestId"
            link="https://playwright.dev/docs/api/class-page#page-get-by-test-id"
            description={`Locate element by the test id. By default, the data-testid attribute is used as a test id. Use selectors.setTestIdAttribute(attributeName) to configure a different test id attribute if necessary.`}
          >
            <Code lang='html'
              code={`<h1 data-testid="heading1">Heading 1</h1>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByTestId('heading1')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByText*/}
          <PlaywrightWrapper
            title="getByText"
            link="https://playwright.dev/docs/api/class-page#page-get-by-text"
            description={`Allows locating elements that contain given text.`}
          >
            <Code lang='html'
              code={`<p>Paragraph Text</p>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByText('Paragraph Text')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page getByTitle*/}
          <PlaywrightWrapper
            title="getByTitle"
            link="https://playwright.dev/docs/api/class-page#page-get-by-title"
            description={`Allows locating elements by their title. For example, this method will find the button by its title "Submit":`}
          >
            <Code lang='html'
              code={`<button title='Place the order'>Order Now</button>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test toBeVisible', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page.getByTitle('Place the order')).toBeVisible()
})`}
            />
          </PlaywrightWrapper>

          {/* Page goto*/}
          <PlaywrightWrapper
            title="goto"
            link="https://playwright.dev/docs/api/class-page#page-goto"
            description={`url <string> URL to navigate page to. The url should include scheme, e.g. https://. When a baseURL via the context options was provided and the passed URL is a path, it gets merged via the new URL() constructor. Returns the main resource response. In case of multiple redirects, the navigation will resolve with the first non-redirect response.`}
          >
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test goto', async ({ page }) => {
  await page.goto('/playwright-locator');
  await expect(page).toHaveURL("/playwright-locator")
})`}
            />
          </PlaywrightWrapper>

          {/* Page click*/}
          <PlaywrightWrapper
            title="click"
            link="https://playwright.dev/docs/api/class-page#page-click"
            description={`This method clicks an element matching selector by performing the following steps:

1. Find an element matching selector. If there is none, wait until a matching element is attached to the DOM.
2. Wait for actionability checks on the matched element, unless force option is set. If the element is detached during the checks, the whole action is retried.
3. Scroll the element into view if needed.
4. Use page.mouse to click in the center of the element, or the specified position.
5. Wait for initiated navigations to either succeed or fail, unless noWaitAfter option is set.`}
          >
            <Code lang='html'
              code={`<textarea type="text" data-testid="textarea-component" placeholder="Textarea Component"></textarea>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test click', async ({ page }) => {
  await page.goto('/playwright-locator');
  await page.getByTestId("textarea-component").click();
	await page.getByTestId("textarea-component").fill("textarea");
})`}
            />
          </PlaywrightWrapper>

          {/* Page fill*/}
          <PlaywrightWrapper
            title="fill"
            link="https://playwright.dev/docs/api/class-page#page-fill"
            description={`This method waits for an element matching selector, waits for actionability checks, focuses the element, fills it and triggers an input event after filling. Note that you can pass an empty string to clear the input field.

If the target element is not an <input>, <textarea> or [contenteditable] element, this method throws an error. However, if the element is inside the <label> element that has an associated control, the control will be filled instead.

To send fine-grained keyboard events, use page.type(selector, text[, options]).`}
          >
            <Code lang='html'
              code={`<input data-testid="input-component" type="text" placeholder="Input Component" value="">
<input data-testid="inputpassword-component" type="password" placeholder="Input Password Component" value="">
<input type="date" placeholder="Input Date" value="">`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test fill', async ({ page }) => {
  await page.goto('/playwright-locator');
  await page.getByTestId("input-component").click();
	await page.getByTestId("input-component").fill("input");
  await page.getByTestId("inputpassword-component").click();
	await page.getByTestId("inputpassword-component").fill("password");
  await page.locator('input[type="date"]').fill("2022-10-13");
})`}
            />
          </PlaywrightWrapper>

          {/* Page check*/}
          <PlaywrightWrapper
            title="check"
            link="https://playwright.dev/docs/api/class-page#page-check"
            description={`This method checks an element matching selector by performing the following steps:

1. Find an element matching selector. If there is none, wait until a matching element is attached to the DOM.
2. Ensure that matched element is a checkbox or a radio input. If not, this method throws. If the element is already checked, this method returns immediately.
3. Wait for actionability checks on the matched element, unless force option is set. If the element is detached during the checks, the whole action is retried.
4. Scroll the element into view if needed.
5. Use page.mouse to click in the center of the element.
6. Wait for initiated navigations to either succeed or fail, unless noWaitAfter option is set.
7. Ensure that the element is now checked. If not, this method throws.`}
          >
            <Code lang='html'
              code={`<input data-testid="radio-red" name="red" type="radio" value="red">
<input data-testid="radio-blue" name="blue" type="radio" value="blue"> 

<input data-testid="checkbox-red" name="red" type="checkbox" value="red">
<input data-testid="checkbox-blue" name="blue" type="checkbox" value="blue">
`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test check', async ({ page }) => {
  await page.goto('/playwright-locator');
  await page.getByTestId("radio-red").check();
	await page.getByTestId("radio-blue").check();

	await page.getByTestId("checkbox-red").check();
	await page.getByTestId("checkbox-blue").check();
})`}
            />
          </PlaywrightWrapper>

          {/* Page uncheck*/}
          <PlaywrightWrapper
            title="uncheck"
            link="https://playwright.dev/docs/api/class-page#page-uncheck"
            description={`This method unchecks an element matching selector by performing the following steps:

1. Find an element matching selector. If there is none, wait until a matching element is attached to the DOM.
2. Ensure that matched element is a checkbox or a radio input. If not, this method throws. If the element is already unchecked, this method returns immediately.
3. Wait for actionability checks on the matched element, unless force option is set. If the element is detached during the checks, the whole action is retried.
4. Scroll the element into view if needed.
5. Use page.mouse to click in the center of the element.
6. Wait for initiated navigations to either succeed or fail, unless noWaitAfter option is set.
7. Ensure that the element is now unchecked. If not, this method throws.`}
          >
            <Code lang='html'
              code={`<input data-testid="checkbox-red" name="red" type="checkbox" value="red">
<input data-testid="checkbox-blue" name="blue" type="checkbox" value="blue">`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test uncheck', async ({ page }) => {
  await page.goto('/playwright-locator');
  await page.getByTestId("checkbox-red").check();
	await page.getByTestId("checkbox-blue").check();
  await page.getByTestId("checkbox-blue").uncheck();
	await page.getByTestId("checkbox-red").uncheck();
})`}
            />
          </PlaywrightWrapper>

          {/* Page selectOption*/}
          <PlaywrightWrapper
            title="selectOption"
            link="https://playwright.dev/docs/api/class-page#page-select-option"
            description={`This method waits for an element matching selector, waits for actionability checks, waits until all specified options are present in the <select> element and selects these options.
If the target element is not a <select> element, this method throws an error. However, if the element is inside the <label> element that has an associated control, the control will be used instead.
Returns the array of option values that have been successfully selected.
Triggers a change and input event once all the provided options have been selected.`}
          >
            <Code lang='html'
              code={`<select data-testid="select" name="select">
  <option value="red" data-testid="option-red">Red</option>
  <option value="blue" data-testid="option-blue">Blue</option>
</select>`}
            />
            <Code
              code={`import { test, expect } from '@playwright/test';
              
test('Test selectOption', async ({ page }) => {
  await page.goto('/playwright-locator');
  await page.getByTestId("select").selectOption("red");
  await page.getByTestId("select").selectOption("blue");
})`}
            />
          </PlaywrightWrapper>

          {/* Page isChecked*/}
          <PlaywrightWrapper
            title="isChecked"
            link="https://playwright.dev/docs/api/class-locator#locator-is-checked"
            description={`Returns whether the element is checked. Throws if the element is not a checkbox or radio input.`}
          >
            <Code lang='html'
              code={`<input type="checkbox" checked="true" />`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isChecked', async ({ page }) => {
  const checkbox = page.getByRole('checkbox');
  const isChecked = await checkbox.isChecked();
  console.log(isChecked)
})`}
            />
          </PlaywrightWrapper>

          {/* Page isDisabled*/}
          <PlaywrightWrapper
            title="isDisabled"
            link="https://playwright.dev/docs/api/class-locator#locator-is-disabled"
            description={`Returns whether the element is disabled, the opposite of enabled.`}
          >
            <Code lang='html'
              code={`<button type="submit" disabled>
  Button
</button>`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isDisabled', async ({ page }) => {
  const button = page.getByRole('button', { name: 'Button' });
  const isDisabled = await button.isDisabled();
  console.log(isDisabled)
})`}
            />
          </PlaywrightWrapper>

          {/* Page isEditable*/}
          <PlaywrightWrapper
            title="isEditable"
            link="https://playwright.dev/docs/api/class-locator#locator-is-editable"
            description={`Returns whether the element is editable.`}
          >
            <Code lang='html'
              code={`<input type="text" placeholder='Input'/>`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isEditable', async ({ page }) => {
  const input = page.getByRole('input');
  const isEditable = await input.isEditable();
  console.log(isEditable)
})`}
            />
          </PlaywrightWrapper>

          {/* Page isEnabled*/}
          <PlaywrightWrapper
            title="isEnabled"
            link="https://playwright.dev/docs/api/class-locator#locator-is-enabled"
            description={`Returns whether the element is enabled.`}
          >
            <Code lang='html'
              code={`<input type="text" placeholder='Input'/>`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isEnabled', async ({ page }) => {
  const input = page.getByRole('input');
  const isEnabled = await input.isEnabled();
  console.log(isEnabled)
})`}
            />
          </PlaywrightWrapper>

          {/* Page isHidden*/}
          <PlaywrightWrapper
            title="isHidden"
            link="https://playwright.dev/docs/api/class-locator#locator-is-hidden"
            description={`Returns whether the element is hidden, the opposite of visible.`}
          >
            <Code lang='html'
              code={`<input type="hidden"/>`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isHidden', async ({ page }) => {
  const input = page.getByRole('input');
  const isHidden = await input.isHidden();
  console.log(isHidden)
})`}
            />
          </PlaywrightWrapper>

          {/* Page isVisible*/}
          <PlaywrightWrapper
            title="isVisible"
            link="https://playwright.dev/docs/api/class-locator#locator-is-visible"
            description={`Returns whether the element is visible.`}
          >
            <Code lang='html'
              code={`<input type="text" placeholder='Input' />`}
            />
            <Code
              code={`import { test } from '@playwright/test';
              
test('Test isVisible', async ({ page }) => {
  const input = page.getByRole('input');
  const isVisible = await input.isVisible();
  console.log(isVisible)
})`}
            />
          </PlaywrightWrapper>

        </div>
      </main>
    </div>
  )
}
