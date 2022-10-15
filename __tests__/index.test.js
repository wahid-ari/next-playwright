import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Home from '@/pages/index'

describe('Renders Components in Home', () => {
  // CODE ---------------------------------------------------- 
  it('renders a Code HTML component in Home Page', () => {
    render(<Home />)
    const codeWrapper = screen.getByTestId('code-wrapper-html')
    const code = screen.getByTestId('code-html')
    expect(codeWrapper).toBeInTheDocument()
    expect(codeWrapper).toHaveClass('Code text-sm rounded-md border')
    expect(code).toBeInTheDocument()
    expect(code).toHaveClass('language-html')
  })
  it('renders a Code Javascript component in Home Page', () => {
    render(<Home />)
    const codeWrapper = screen.getByTestId('code-wrapper-js')
    const code = screen.getByTestId('code-js')
    expect(codeWrapper).toBeInTheDocument()
    expect(codeWrapper).toHaveClass('Code text-sm rounded-md border')
    expect(code).toBeInTheDocument()
    expect(code).toHaveClass('language-javascript')
  })
  // AVATAR ---------------------------------------------------- 
  it('renders a Avatar component in Home Page', () => {
    render(<Home />)
    const avatar = screen.getByTestId('avatar')
    const image = screen.getByTestId('img-component-1')
    expect(avatar).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(avatar).toHaveClass('relative h-8 w-8 border-blue-500 border-2 rounded-full')
    expect(image).toHaveClass('rounded-full')
  })
  it('renders a Avatar component and have src and alt in Home Page', () => {
    render(<Home />)
    const avatar = screen.getByTestId('avatar-md')
    const image = screen.getByTestId('img-component-2')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('!h-12 !w-12 !border-red-500')
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('rounded-full')
    expect(image).toHaveAttribute('src')
    expect(image).toHaveAttribute('alt', 'Image Component')
  })
  // PROGRESS ---------------------------------------------------- 
  it('renders a Progress component in Home Page', () => {
    render(<Home />)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('bg-gray-200 dark:bg-neutral-800 rounded-full')
  })
  it('renders a Progress.percentage component in Home Page', () => {
    render(<Home />)
    const progress = screen.getByTestId('progress-percentage')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveClass('bg-gray-200 dark:bg-neutral-800 rounded-full')
    expect(progress).toHaveTextContent('50')
  })
  // SPINNER ---------------------------------------------------- 
  it('renders a Spinner component in Home Page', () => {
    render(<Home />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('fill-blue-600')
  })
  it('renders a Spinner small in Home Page', () => {
    render(<Home />)
    const spinner = screen.getByTestId('spinner-small')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('!w-6 !h-6')
  })
  it('renders a Spinner large in Home Page', () => {
    render(<Home />)
    const spinner = screen.getByTestId('spinner-large')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('!w-10 !h-10')
  })
  // SNIPPET ---------------------------------------------------- 
  it('renders a Snippet in Home Page', () => {
    render(<Home />)
    const snippet = screen.getByTestId('snippet')
    const snippetText = screen.getByText('yarn add @heroicons/react')
    expect(snippet).toBeInTheDocument()
    expect(snippet).toContainElement(snippetText)
  })
  // STATUS INDICATOR ---------------------------------------------------- 
  it('renders a StatusIndicator in Home Page', () => {
    render(<Home />)
    const status = screen.getByTestId('status-indicator')
    const statusText = screen.getByText('Status Normal')
    expect(status).toBeInTheDocument()
    expect(status).toContainElement(statusText)
  })
  // TEXTAREA ---------------------------------------------------- 
  it('renders a Textarea component in Home Page', () => {
    render(<Home />)
    const textarea = screen.getByTestId('textarea-component')
    expect(textarea).toBeInTheDocument()
  })
  it('renders a Textarea component and disabled in Home Page', () => {
    render(<Home />)
    const textarea = screen.getByTestId('textarea-component-disabled')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toBeDisabled()
  })
  it('renders a Textarea component and typed a text in Home Page', async () => {
    render(<Home />)
    const textarea = screen.getByTestId('textarea-component')
    const textareaValue = screen.getByTestId('textarea-value')
    expect(textarea).toBeInTheDocument()
    // click the textarea value, then type a "Text"
    await userEvent.type(textarea, 'Text Area')
    // the textareaValue should have "Text" content
    expect(textareaValue).toHaveTextContent('Text Area')
  })
  // RADIO ---------------------------------------------------- 
  it('renders a Radio in Home Page', () => {
    render(<Home />)
    const radioRed = screen.getByTestId('radio-red')
    const radioBlue = screen.getByTestId('radio-blue')
    expect(radioRed).toBeInTheDocument()
    expect(radioBlue).toBeInTheDocument()
    expect(radioRed).not.toBeChecked()
    expect(radioBlue).not.toBeChecked()
  })
  it('renders a Radio and select Red radio in Home Page', async () => {
    render(<Home />)
    const radioRed = screen.getByTestId('radio-red')
    const radioBlue = screen.getByTestId('radio-blue')
    const radioValue = screen.getByTestId('radio-value')
    expect(radioRed).toBeInTheDocument()
    expect(radioBlue).toBeInTheDocument()
    // when clicked option with value 'red',
    // option red must be checked
    await userEvent.click(radioRed)
    expect(radioRed).toBeChecked()
    expect(radioValue).toHaveTextContent('red')
  })
  // CHECKBOX ---------------------------------------------------- 
  it('renders a Checkbox in Home Page', () => {
    render(<Home />)
    const checkboxRed = screen.getByTestId('checkbox-red')
    const checkboxBlue = screen.getByTestId('checkbox-blue')
    expect(checkboxRed).toBeInTheDocument()
    expect(checkboxBlue).toBeInTheDocument()
    expect(checkboxRed).not.toBeChecked()
    expect(checkboxBlue).not.toBeChecked()
  })
  it('renders a Checkbox and select Red checkbox in Home Page', async () => {
    render(<Home />)
    const checkboxRed = screen.getByTestId('checkbox-red')
    const checkboxBlue = screen.getByTestId('checkbox-blue')
    const checkboxValue = screen.getByTestId('checkbox-value')
    expect(checkboxRed).toBeInTheDocument()
    expect(checkboxBlue).toBeInTheDocument()
    // when clicked option with value 'red',
    // option red must be checked
    await userEvent.click(checkboxRed)
    expect(checkboxRed).toBeChecked()
    expect(checkboxValue).toHaveTextContent('red')
  })
  // SELECT ---------------------------------------------------- 
  it('renders a Select in Home Page', () => {
    render(<Home />)
    const select = screen.getByTestId('select')
    expect(select).toBeInTheDocument()
    expect(select).toHaveClass('text-sm rounded-md')
    expect(select).toHaveTextContent('Red')
  })
  it('renders a Select and select red option in Home Page', async () => {
    render(<Home />)
    const select = screen.getByTestId('select')
    const red = screen.getByTestId('option-red')
    const blue = screen.getByTestId('option-blue')
    const selectValue = screen.getByTestId('select-value')
    expect(select).toBeInTheDocument()
    // when clicked option with value 'red', 
    // option red must be true and other options must be false
    await userEvent.selectOptions(select, red)
    expect(red.selected).toBe(true);
    expect(blue.selected).toBe(false);
    expect(selectValue).toHaveTextContent('red');
  })
  // INPUT ---------------------------------------------------- 
  it('renders a Input component in Home Page', () => {
    render(<Home />)
    const input = screen.getByTestId('input-component')
    expect(input).toBeInTheDocument()
  })
  it('renders a Input component and disabled in Home Page', () => {
    render(<Home />)
    const input = screen.getByTestId('input-component-disabled')
    expect(input).toBeInTheDocument()
    expect(input).toBeDisabled()
  })
  it('renders a Input component and typed a text in Home Page', async () => {
    render(<Home />)
    const input = screen.getByTestId('input-component')
    const inputValue = screen.getByTestId('input-value')
    expect(input).toBeInTheDocument()
    // click the input value, then type a "Text"
    await userEvent.type(input, 'Text')
    // the inputValue should have "Text" content
    expect(inputValue).toHaveTextContent('Text')
  })
  // INPUT PASSWORD ---------------------------------------------------- 
  it('renders a InputPassword component in Home Page', () => {
    render(<Home />)
    const inputpassword = screen.getByTestId('inputpassword-component')
    expect(inputpassword).toBeInTheDocument()
  })
  it('renders a InputPassword component and disabled in Home Page', () => {
    render(<Home />)
    const inputpassword = screen.getByTestId('inputpassword-component-disabled')
    expect(inputpassword).toBeInTheDocument()
    expect(inputpassword).toBeDisabled()
  })
  it('renders a InputPassword component and typed a password in Home Page', async () => {
    render(<Home />)
    const inputpassword = screen.getByTestId('inputpassword-component')
    const passwordValue = screen.getByTestId('inputpassword-value')
    expect(inputpassword).toBeInTheDocument()
    // click the inputpassword value, then type a "Text"
    await userEvent.type(inputpassword, 'abc123')
    // the passwordValue should have "Text" content
    expect(passwordValue).toHaveTextContent('abc123')
  })
  it('renders a InputPassword component and click show password in Home Page', async () => {
    render(<Home />)
    const inputpassword = screen.getByTestId('inputpassword-component')
    const showPasswordBtn = screen.getByTestId('inputpassword-btn')
    expect(inputpassword).toBeInTheDocument()
    // click the inputpassword show password button
    await userEvent.click(showPasswordBtn)
    // the inputpassword should show the password by changing type to text
    expect(inputpassword).toHaveAttribute('type', 'text')
  })
  // HEADING ---------------------------------------------------- 
  it('renders a Heading in Home Page', () => {
    render(<Home />)
    const heading = screen.getByTestId('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-4xl font-semibold')
  })
  // BUTTON ---------------------------------------------------- 
  it('renders a Button component in Home Page', () => {
    render(<Home />)
    const button = screen.getByTestId('button-component')
    expect(button).toBeInTheDocument()
  })
  it('renders a Button Pills component in Home Page', () => {
    render(<Home />)
    const button = screen.getByTestId('button-component-pills')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('rounded-full')
  })
  it('renders a Button component and disabled in Home Page', () => {
    render(<Home />)
    const button = screen.getByTestId('button-component-disabled')
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
  // BUTTON OUTLINE ---------------------------------------------------- 
  it('renders a ButtonOutline component in Home Page', () => {
    render(<Home />)
    const buttonoutline = screen.getByTestId('button-outline-component')
    expect(buttonoutline).toBeInTheDocument()
  })
  it('renders a ButtonOutline Pills component in Home Page', () => {
    render(<Home />)
    const buttonoutline = screen.getByTestId('button-outline-component-pills')
    expect(buttonoutline).toBeInTheDocument()
    expect(buttonoutline).toHaveClass('rounded-full')
  })
  it('renders a ButtonOutline component and disabled in Home Page', () => {
    render(<Home />)
    const buttonoutline = screen.getByTestId('button-outline-component-disabled')
    expect(buttonoutline).toBeInTheDocument()
    expect(buttonoutline).toBeDisabled()
  })
  // LINKBUTTON ---------------------------------------------------- 
  it('renders a LinkButton component in Home Page', () => {
    render(<Home />)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toBeInTheDocument()
  })
  it('renders a LinkButton Pills in Home Page', () => {
    render(<Home />)
    const linkbutton = screen.getByText('Link Button Pills')
    expect(linkbutton).toBeInTheDocument()
    expect(linkbutton).toHaveClass('rounded-full')
  })
  it('renders a LinkButton and have Attribute "href" in Home Page', () => {
    render(<Home />)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toBeInTheDocument()
    expect(linkbutton).toHaveAttribute('href', '/#')
  })
  it('renders a LinkButton and have Attribute "title, aria-label" in Home Page', () => {
    render(<Home />)
    const linkbutton = screen.getByText('Link Button')
    expect(linkbutton).toBeInTheDocument()
    expect(linkbutton).toHaveAccessibleDescription()
    expect(linkbutton).toHaveAccessibleDescription('A link to start over')
  })
  // LINK BUTTON OUTLINE ---------------------------------------------------- 
  it('renders a LinkButtonOutline component in Home Page', () => {
    render(<Home />)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toBeInTheDocument()
  })
  it('renders a LinkButtonOutline Pills in Home Page', () => {
    render(<Home />)
    const linkbuttonoutline = screen.getByText('Link Button Outline Pills')
    expect(linkbuttonoutline).toBeInTheDocument()
    expect(linkbuttonoutline).toHaveClass('rounded-full')
  })
  it('renders a LinkButtonOutline and have Attribute "href" in Home Page', () => {
    render(<Home />)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toBeInTheDocument()
    expect(linkbuttonoutline).toHaveAttribute('href', '/#')
  })
  it('renders a LinkButtonOutline and have Attribute "title, aria-label" in Home Page', () => {
    render(<Home />)
    const linkbuttonoutline = screen.getByText('Link Button Outline')
    expect(linkbuttonoutline).toBeInTheDocument()
    expect(linkbuttonoutline).toHaveAccessibleDescription()
    expect(linkbuttonoutline).toHaveAccessibleDescription('A link to start over')
  })
  // ALERT ---------------------------------------------------- 
  it('renders a Alert in Home Page', () => {
    render(<Home />)
    const alert = screen.getByText('Alert')
    expect(alert).toBeInTheDocument()
  })
  it('renders a Alert pills in Home Page', () => {
    render(<Home />)
    const alert = screen.getByText('Alert Pills')
    expect(alert).toBeInTheDocument()
  })
  it('renders a Alert large in Home Page', () => {
    render(<Home />)
    const alert = screen.getByText('Alert Large')
    expect(alert).toBeInTheDocument()
  })
  it('renders a Alert and have default class in Home Page', () => {
    render(<Home />)
    const alert = screen.getByText('Alert')
    expect(alert).toHaveClass('text-blue-600 bg-opacity-10 bg-blue-600')
  })
  // ALERT OUTLINE ---------------------------------------------------- 
  it('renders a AlertOutline in Home Page', () => {
    render(<Home />)
    const alertoutline = screen.getByText('Alert Outline')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a AlertOutline pills in Home Page', () => {
    render(<Home />)
    const alertoutline = screen.getByText('Alert Outline Pills')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a AlertOutline large in Home Page', () => {
    render(<Home />)
    const alertoutline = screen.getByText('Alert Outline Large')
    expect(alertoutline).toBeInTheDocument()
  })
  it('renders a AlertOutline and have default class in Home Page', () => {
    render(<Home />)
    const alertoutline = screen.getByText('Alert Outline')
    expect(alertoutline).toHaveClass('text-blue-600 border border-blue-500')
  })
  // BADGE ---------------------------------------------------- 
  it('renders a Badge in Home Page', () => {
    render(<Home />)
    const badge = screen.getByText('Badge')
    expect(badge).toBeInTheDocument()
  })
  it('renders a Badge pills in Home Page', () => {
    render(<Home />)
    const badge = screen.getByText('Badge Pills')
    expect(badge).toBeInTheDocument()
  })
  it('renders a Badge large in Home Page', () => {
    render(<Home />)
    const badge = screen.getByText('Badge Large')
    expect(badge).toBeInTheDocument()
  })
  it('renders a Badge and have default class in Home Page', () => {
    render(<Home />)
    const badge = screen.getByText('Badge')
    expect(badge).toHaveClass('text-blue-600 bg-blue-100')
  })
  // BADGE OUTLINE ---------------------------------------------------- 
  it('renders a BadgeOutline in Home Page', () => {
    render(<Home />)
    const badgeoutline = screen.getByText('Badge Outline')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a BadgeOutline pills in Home Page', () => {
    render(<Home />)
    const badgeoutline = screen.getByText('Badge Outline Pills')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a BadgeOutline large in Home Page', () => {
    render(<Home />)
    const badgeoutline = screen.getByText('Badge Outline Large')
    expect(badgeoutline).toBeInTheDocument()
  })
  it('renders a BadgeOutline and have default class in Home Page', () => {
    render(<Home />)
    const badgeoutline = screen.getByText('Badge Outline')
    expect(badgeoutline).toHaveClass('text-blue-500 border border-blue-500')
  })
  // KBD ---------------------------------------------------- 
  it('renders a kbd in Home Page', () => {
    render(<Home />)
    const kbd = screen.getByText('Ctrl')
    expect(kbd).toBeInTheDocument()
    expect(kbd).toHaveClass('text-xs font-semibold')
    expect(kbd).toHaveTextContent('Ctrl')
  })
  // LABEL ---------------------------------------------------- 
  it('renders a Label in Home Page', () => {
    render(<Home />)
    const label = screen.getByText('Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('text-sm block')
    expect(label).toHaveTextContent('Label')
  })
  // NOTE ---------------------------------------------------- 
  it('renders a Note in Home Page', () => {
    render(<Home />)
    const note = screen.getByText('Note Description')
    expect(note).toBeInTheDocument()
    expect(note).toHaveClass('text-sm')
    expect(note).toHaveTextContent('Note Description')
  })
  // TEXT ---------------------------------------------------- 
  it('renders a Text in Home Page', () => {
    render(<Home />)
    const text = screen.getByText('Text')
    expect(text).toBeInTheDocument()
    expect(text).toHaveClass('text-sm')
    expect(text).toHaveTextContent('Text')
  })
  // DIVIDER ---------------------------------------------------- 
  it('renders a Divider in Home Page', () => {
    render(<Home />)
    const divider = screen.getByTestId('divider')
    expect(divider).toBeInTheDocument()
  })
  it('renders a Divider with Text Center in Home Page', () => {
    render(<Home />)
    const divider = screen.getByTestId('divider-center')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveTextContent('Divider Text Center')
  })
  // CARD ---------------------------------------------------- 
  it('renders a Card in Home Page', () => {
    render(<Home />)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })
  it('renders a Card with Text Content in Home Page', () => {
    render(<Home />)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveTextContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
  })
  // CONTAINER ---------------------------------------------------- 
  it('renders a Container in Home Page', () => {
    render(<Home />)
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
  })
  it('renders a Container with Text Content in Home Page', () => {
    render(<Home />)
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
  })
  it('renders a Container Medium with Text "p-4" class in Home Page', () => {
    render(<Home />)
    const container = screen.getByTestId('container-medium')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('p-4')
  })
  // SECTION ---------------------------------------------------- 
  it('renders a Section in Home Page', () => {
    render(<Home />)
    const section = screen.getByTestId('section')
    expect(section).toBeInTheDocument()
  })
  it('renders a Section with Title and Body Text Content in Home Page', () => {
    render(<Home />)
    const section = screen.getByTestId('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveTextContent('Section Title')
    expect(section).toHaveTextContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
  })
  it('renders a Section with Attribute in Home Page', () => {
    render(<Home />)
    const section = screen.getByTestId('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id')
  })
})