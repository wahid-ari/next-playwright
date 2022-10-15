const { test, expect } = require('@playwright/test');

test.describe('Index Page', () => {
  test('should go to index page', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Components Test')).toBeVisible()
  });
  test('renders a Code HTML component in Home Page', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('code-wrapper-html')).toBeVisible()
    // This needs to be a full match
    await expect(page.getByTestId('code-wrapper-html')).toHaveClass('Code bg-gray-100 relative dark:bg-neutral-800 text-sm rounded-md border border-transparent dark:border dark:border-neutral-700 ')
    await expect(page.getByTestId('code-html')).toBeVisible()
    await expect(page.getByTestId('code-html')).toHaveClass('language-html')
  });
});

// CODE -------------------------------------------------------
test('renders a Code Javascript component in Home Page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('code-wrapper-js')).toBeVisible()
  // This needs to be a full match
  await expect(page.getByTestId('code-wrapper-js')).toHaveClass('Code bg-gray-100 relative dark:bg-neutral-800 text-sm rounded-md border border-transparent dark:border dark:border-neutral-700 ')
  await expect(page.getByTestId('code-js')).toBeVisible()
  await expect(page.getByTestId('code-js')).toHaveClass('language-javascript')
})

// AVATAR ----------------------------------------------------
test('renders a Avatar component in Home Page', async ({ page }) => {
  await page.goto('/')
  const avatar = page.getByTestId('avatar')
  const image = page.getByTestId('img-component-1')
  await expect(avatar).toBeVisible()
  await expect(avatar).toHaveClass(/relative h-8 w-8 border-blue-500 border-2 rounded-full/)
  await expect(image).toBeVisible()
  await expect(image).toHaveClass(/rounded-full/)
})
test('renders a Avatar component and have src and alt in Home Page', async ({ page }) => {
  await page.goto('/')
  const avatar = page.getByTestId('avatar-md')
  const image = page.getByTestId('img-component-2')
  const src = page.getByTestId('img-component-2').getAttribute('src');
  await expect(avatar).toBeVisible()
  await expect(avatar).toHaveClass(/!h-12 !w-12 !border-red-500/)
  await expect(image).toBeVisible()
  await expect(image).toHaveClass(/rounded-full/)
  await expect(image).toHaveAttribute('alt', 'Image Component')
  expect(src).not.toBeNull()
})

// PROGRESS ----------------------------------------------------
test('renders a Progress component in Home Page', async ({ page }) => {
  await page.goto('/')
  const progress = page.getByTestId('progress')
  await expect(progress).toBeVisible()
  await expect(progress).toHaveClass(/bg-gray-200 dark:bg-neutral-800 rounded-full/)
})
test('renders a Progress.percentage component in Home Page', async ({ page }) => {
  await page.goto('/')
  const progress = page.getByTestId('progress-percentage')
  await expect(progress).toBeVisible()
  await expect(progress).toHaveClass(/bg-gray-200 dark:bg-neutral-800 rounded-full/)
  await expect(progress).toHaveText(/50/)
})

// SPINNER ----------------------------------------------------
test('renders a Spinner component in Home Page', async ({ page }) => {
  await page.goto('/')
  const spinner = page.getByTestId('spinner')
  await expect(spinner).toBeVisible()
  await expect(spinner).toHaveClass(/fill-blue-600/)
})
test('renders a Spinner small in Home Page', async ({ page }) => {
  await page.goto('/')
  const spinner = page.getByTestId('spinner-small')
  await expect(spinner).toBeVisible()
  await expect(spinner).toHaveClass(/!w-6 !h-6/)
})
test('renders a Spinner large in Home Page', async ({ page }) => {
  await page.goto('/')
  const spinner = page.getByTestId('spinner-large')
  await expect(spinner).toBeVisible()
  await expect(spinner).toHaveClass(/!w-10 !h-10/)
})

// SNIPPET ----------------------------------------------------
test('renders a Snippet in Home Page', async ({ page }) => {
  await page.goto('/')
  const snippet = page.getByTestId('snippet')
  await expect(snippet).toBeVisible()
  await expect(snippet).toHaveClass(/border border-gray-300/)
  await expect(snippet).toHaveText(/yarn add @heroicons\/react/)
})

// STATUS INDICATOR ----------------------------------------------------
test('renders a StatusIndicator in Home Page', async ({ page }) => {
  await page.goto('/')
  const status = page.getByTestId('status-indicator')
  await expect(status).toBeVisible()
  await expect(status).toHaveClass(/flex items-center space-x-2/)
  await expect(status).toHaveText('Status Normal')
})

// TEXTAREA ----------------------------------------------------
test('renders a Textarea component in Home Page', async ({ page }) => {
  await page.goto('/')
  const textarea = page.getByTestId('textarea-component')
  await expect(textarea).toBeVisible()
  await expect(textarea).toBeEnabled()
})
test('renders a Textarea component and disabled in Home Page', async ({ page }) => {
  await page.goto('/')
  const textarea = page.getByTestId('textarea-component-disabled')
  await expect(textarea).toBeVisible()
  await expect(textarea).toBeDisabled()
})
test('renders a Textarea component and typed a text in Home Page', async ({ page }) => {
  await page.goto('/')
  const textarea = page.getByTestId('textarea-component')
  const textareaValue = page.getByTestId('textarea-value')
  await expect(textarea).toBeVisible()
  await expect(textarea).toBeEnabled()
  // click the textarea value, then type a "Text"
  await textarea.fill('Text Area')
  await expect(textarea).toHaveValue('Text Area')
  // the textareaValue should have "Text" content
  await expect(textareaValue).toHaveText('Text Area')
})

// RADIO ----------------------------------------------------
test('renders a Radio in Home Page', async ({ page }) => {
  await page.goto('/')
  const radioRed = page.getByTestId('radio-red')
  const radioBlue = page.getByTestId('radio-blue')
  await expect(radioRed).toBeVisible()
  await expect(radioBlue).toBeVisible()
  await expect(radioRed).not.toBeChecked()
  await expect(radioBlue).not.toBeChecked()
})
test('renders a Radio and select Red radio in Home Page', async ({ page }) => {
  await page.goto('/')
  const radioRed = page.getByTestId('radio-red')
  const radioBlue = page.getByTestId('radio-blue')
  const radioValue = page.getByTestId('radio-value')
  await expect(radioRed).toBeVisible()
  await expect(radioBlue).toBeVisible()
  await radioRed.click()
  await expect(radioRed).toBeChecked()
  await expect(radioBlue).not.toBeChecked()
  await expect(radioValue).toHaveText('red')
})

// CHECKBOX ----------------------------------------------------
test('renders a Checkbox in Home Page', async ({ page }) => {
  await page.goto('/')
  const checkboxRed = page.getByTestId('checkbox-red')
  const checkboxBlue = page.getByTestId('checkbox-blue')
  await expect(checkboxRed).toBeVisible()
  await expect(checkboxBlue).toBeVisible()
  await expect(checkboxRed).not.toBeChecked()
  await expect(checkboxBlue).not.toBeChecked()
})
test('renders a Checkbox and select Red checkbox in Home Page', async ({ page }) => {
  await page.goto('/')
  const checkboxRed = page.getByTestId('checkbox-red')
  const checkboxBlue = page.getByTestId('checkbox-blue')
  const checkboxValue = page.getByTestId('checkbox-value')
  await expect(checkboxRed).toBeVisible()
  await expect(checkboxBlue).toBeVisible()
  await checkboxRed.click()
  await expect(checkboxRed).toBeChecked()
  await expect(checkboxBlue).not.toBeChecked()
  await expect(checkboxValue).toHaveText(/red/)
})

// SELECT ----------------------------------------------------
test('renders a Select in Home Page', async ({ page }) => {
  await page.goto('/')
  const select = page.getByTestId('select')
  await expect(select).toBeVisible()
  await expect(select).toHaveClass(/text-sm rounded-md/)
  await expect(select).toHaveText(/Red/)
})
test('renders a Select and select red option in Home Page', async ({ page }) => {
  await page.goto('/')
  const select = page.getByTestId('select')
  const selectValue = page.getByTestId('select-value')
  await expect(select).toBeVisible()
  await select.selectOption('red');
  await expect(selectValue).toHaveText(/red/)
})
test('renders a Select and select blue option in Home Page', async ({ page }) => {
  await page.goto('/')
  const select = page.getByTestId('select')
  const selectValue = page.getByTestId('select-value')
  await expect(select).toBeVisible()
  await select.selectOption('blue');
  await expect(selectValue).toHaveText(/blue/)
})

// INPUT ----------------------------------------------------
test('renders a Input component in Home Page', async ({ page }) => {
  await page.goto('/')
  const input = page.getByTestId('input-component')
  await expect(input).toBeVisible()
})
test('renders a Input component and disabled in Home Page', async ({ page }) => {
  await page.goto('/')
  const input = page.getByTestId('input-component-disabled')
  await expect(input).toBeVisible()
  await expect(input).toBeDisabled()
})
test('renders a Input component and have type text in Home Page', async ({ page }) => {
  await page.goto('/')
  const input = page.getByTestId('input-component')
  await expect(input).toBeVisible()
  await expect(input).toHaveAttribute('type', 'text')
})
test('renders a Input component and typed a text in Home Page', async ({ page }) => {
  await page.goto('/')
  const input = page.getByTestId('input-component')
  const inputValue = page.getByTestId('input-value')
  await expect(input).toBeVisible()
  await input.fill('Text')
  await expect(inputValue).toHaveText('Text')
  await expect(input).toHaveValue('Text')
})

// INPUT PASSWORD ----------------------------------------------------
test('renders a InputPassword component in Home Page', async ({ page }) => {
  await page.goto('/')
  const inputpassword = page.getByTestId('inputpassword-component')
  await expect(inputpassword).toBeVisible()
})
test('renders a InputPassword component and disabled in Home Page', async ({ page }) => {
  await page.goto('/')
  const inputpassword = page.getByTestId('inputpassword-component-disabled')
  await expect(inputpassword).toBeVisible()
  await expect(inputpassword).toBeDisabled()
})
test('renders a InputPassword component and have type password in Home Page', async ({ page }) => {
  await page.goto('/')
  const inputpassword = page.getByTestId('inputpassword-component')
  await expect(inputpassword).toBeVisible()
  await expect(inputpassword).toHaveAttribute('type', 'password')
})
test('renders a InputPassword component and typed a password in Home Page', async ({ page }) => {
  await page.goto('/')
  const inputpassword = page.getByTestId('inputpassword-component')
  const inputpasswordValue = page.getByTestId('inputpassword-value')
  await expect(inputpassword).toBeVisible()
  await inputpassword.fill('Password123')
  await expect(inputpasswordValue).toHaveText('Password123')
  await expect(inputpassword).toHaveValue('Password123')
})
test('renders a InputPassword component and click show password in Home Page', async ({ page }) => {
  await page.goto('/')
  const inputpassword = page.getByTestId('inputpassword-component')
  const showPasswordBtn = page.getByTestId('inputpassword-btn')
  await expect(inputpassword).toBeVisible()
  await showPasswordBtn.click()
  await expect(inputpassword).toHaveAttribute('type', 'text')
})

// HEADING ----------------------------------------------------
test('renders a Heading in Home Page', async ({ page }) => {
  await page.goto('/')
  const heading = page.getByTestId('heading')
  await expect(heading).toBeVisible()
  await expect(heading).toHaveClass(/text-4xl mb-4 font-semibold/)
})

// BUTTON ----------------------------------------------------
test('renders a Button component in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-component')
  await expect(button).toBeVisible()
  await expect(button).toHaveClass(/text-sm text-white/)
  await expect(button).toBeEnabled()
})
test('renders a Button Pills component in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-component-pills')
  await expect(button).toBeVisible()
  await expect(button).toHaveClass(/rounded-full/)
  await expect(button).toBeEnabled()
})
test('renders a Button component and disabled in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-component-disabled')
  await expect(button).toBeVisible()
  await expect(button).toBeDisabled()
})

// BUTTON OUTLINE ----------------------------------------------------
test('renders a ButtonOutline component in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-outline-component')
  await expect(button).toBeVisible()
  await expect(button).toHaveClass(/text-sm text-blue-500/)
  await expect(button).toBeEnabled()
})
test('renders a ButtonOutline Pills component in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-outline-component-pills')
  await expect(button).toBeVisible()
  await expect(button).toHaveClass(/rounded-full/)
  await expect(button).toBeEnabled()
})
test('renders a ButtonOutline component and disabled in Home Page', async ({ page }) => {
  await page.goto('/')
  const button = page.getByTestId('button-outline-component-disabled')
  await expect(button).toBeVisible()
  await expect(button).toBeDisabled()
})

// LINK BUTTON ---------------------------------------------------- 
test('renders a LinkButton component in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveClass(/font-medium bg-blue-500 hover:bg-blue-600 text-white/)
})
test('renders a LinkButton Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-component-pills')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveClass(/rounded-full/)
})
test('renders a LinkButton and have Attribute "href" in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveAttribute('href', '/#')
})
test('renders a LinkButton and have Attribute "title, aria-label" in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveAttribute('title', 'A link to start over')
  await expect(linkbutton).toHaveAttribute('aria-label', 'Home page')
})

// LINK BUTTON OUTLINE ---------------------------------------------------- 
test('renders a LinkButtonOutline component in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-outline-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveClass(/font-medium text-blue-500/)
})
test('renders a LinkButtonOutline Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-outline-component-pills')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveClass(/rounded-full/)
})
test('renders a LinkButtonOutline and have Attribute "href" in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-outline-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveAttribute('href', '/#')
})
test('renders a LinkButtonOutline and have Attribute "title, aria-label" in Home Page', async ({ page }) => {
  await page.goto('/')
  const linkbutton = page.getByTestId('linkbutton-outline-component')
  await expect(linkbutton).toBeVisible()
  await expect(linkbutton).toHaveAttribute('title', 'A link to start over')
  await expect(linkbutton).toHaveAttribute('aria-label', 'Home page')
})

// ALERT ---------------------------------------------------- 
test('renders a Alert in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alert')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/text-blue-600 bg-opacity-10 bg-blue-600/)
})
test('renders a Alert Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alert-pills')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/rounded-full/)
})
test('renders a Alert Large in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alert-large')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/text-sm/)
})

// ALERT OUTLINE ---------------------------------------------------- 
test('renders a AlertOutline in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alertoutline')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/text-blue-600 border border-blue-500/)
})
test('renders a AlertOutline Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alertoutline-pills')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/rounded-full/)
})
test('renders a AlertOutline Large in Home Page', async ({ page }) => {
  await page.goto('/')
  const alert = page.getByTestId('alertoutline-large')
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/text-sm/)
})

// BADGE ---------------------------------------------------- 
test('renders a Badge in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badge')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/bg-blue-100 text-blue-600/)
})
test('renders a Badge Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badge-pills')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/rounded-full/)
})
test('renders a Badge Large in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badge-large')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/text-sm/)
})

// BADGE OUTLINE ---------------------------------------------------- 
test('renders a BadgeOutline in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badgeoutline')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/text-blue-500 border border-blue-500/)
})
test('renders a BadgeOutline Pills in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badgeoutline-pills')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/rounded-full/)
})
test('renders a BadgeOutline Large in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByTestId('badgeoutline-large')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/text-sm/)
})

// KBD ---------------------------------------------------- 
test('renders a Kbd in Home Page', async ({ page }) => {
  await page.goto('/')
  const badge = page.getByText('Ctrl')
  await expect(badge).toBeVisible()
  await expect(badge).toHaveClass(/text-xs font-semibold/)
  await expect(badge).toHaveText('Ctrl')
})

// LABEL ---------------------------------------------------- 
test('renders a Label in Home Page', async ({ page }) => {
  await page.goto('/')
  const label = page.getByTestId('label')
  await expect(label).toBeVisible()
  await expect(label).toHaveClass(/text-sm block/)
  await expect(label).toHaveText('Label')
})

// NOTE ---------------------------------------------------- 
test('renders a Note in Home Page', async ({ page }) => {
  await page.goto('/')
  const note = page.getByText(/Note Description/)
  await expect(note).toBeVisible()
  await expect(note).toHaveClass(/text-sm/)
  await expect(note).toHaveText(/Note Description/)
})

// TEXT ---------------------------------------------------- 
test('renders a Text in Home Page', async ({ page }) => {
  await page.goto('/')
  const text = page.getByTestId('text')
  await expect(text).toBeVisible()
  await expect(text).toHaveClass(/text-sm/)
  await expect(text).toHaveText('Text')
})

// DIVIDER ---------------------------------------------------- 
test('renders a Divider in Home Page', async ({ page }) => {
  await page.goto('/')
  const divider = page.getByTestId('divider')
  await expect(divider).toBeVisible()
})
test('renders a Divider with text center in Home Page', async ({ page }) => {
  await page.goto('/')
  const divider = page.getByTestId('divider-center')
  await expect(divider).toBeVisible()
  await expect(divider).toHaveText('Divider Text Center')
})

// CARD ---------------------------------------------------- 
test('renders a Card in Home Page', async ({ page }) => {
  await page.goto('/')
  const card = page.getByTestId('card')
  await expect(card).toBeVisible()
})
test('renders a Card with Text Content in Home Page', async ({ page }) => {
  await page.goto('/')
  const card = page.getByTestId('card')
  await expect(card).toBeVisible()
  await expect(card).toHaveText(/Lorem Ipsum is simply dummy text of the printing and typesetting industry/)
})

// CONTAINER ---------------------------------------------------- 
test('renders a Container in Home Page', async ({ page }) => {
  await page.goto('/')
  const container = page.getByTestId('container')
  await expect(container).toBeVisible()
})
test('renders a Container with Text Content in Home Page', async ({ page }) => {
  await page.goto('/')
  const container = page.getByTestId('container')
  await expect(container).toBeVisible()
  await expect(container).toHaveText(/Lorem Ipsum is simply dummy text of the printing and typesetting industry/)
})
test('renders a Container Medium with Text "p-4" class in Home Page', async ({ page }) => {
  await page.goto('/')
  const container = page.getByTestId('container-medium')
  await expect(container).toBeVisible()
  await expect(container).toHaveClass(/p-4/)
})

// SECTION ---------------------------------------------------- 
test('renders a Section in Home Page', async ({ page }) => {
  await page.goto('/')
  const section = page.getByTestId('section')
  await expect(section).toBeVisible()
})
test('renders a Section with Title and Body Text Content in Home Page', async ({ page }) => {
  await page.goto('/')
  const section = page.getByTestId('section')
  await expect(section).toBeVisible()
  await expect(section).toHaveText(/Section Title/)
  await expect(section).toHaveText(/Lorem Ipsum is simply dummy text of the printing and typesetting industry/)
})
test('renders a Section with Attribute in Home Page', async ({ page }) => {
  await page.goto('/')
  const section = page.getByTestId('section')
  await expect(section).toBeVisible()
  await expect(section).toHaveAttribute('id', 'section')
})