import Head from 'next/head'
import { useState } from "react";
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Badge from '../components/Badge';
import Button from "../components/Button"
import Counter from '../components/Counter';
import Input from "../components/Input"
import InputPassword from "../components/InputPassword"
import Label from "../components/Label"
import Note from "../components/Note"
import Text from "../components/Text"
import Select from "../components/Select"
import Kbd from '../components/Kbd';
import LinkButton from '../components/LinkButton';
import Divider from '../components/Divider';
import Card from '../components/Card';
import Container from '../components/Container';
import Section from '../components/Section';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import TextArea from '../components/TextArea';
import BackToTop from '../components/BackToTop';
import StatusIndicator from '../components/StatusIndicator';
import Snippet from '../components/Snippet';
import Spinner from '../components/Spinner';
import Progress from '../components/Progress';
import AlertOutline from '../components/AlertOutline';
import BadgeOutline from '../components/BadgeOutline';
import ButtonOutline from '../components/ButtonOutline';
import LinkButtonOutline from '../components/LinkButtonOutline';
import Avatar from '../components/Avatar';
import Code from '../components/Code';
import imgAvatar from '../public/avatar.png'
import Navbar from '../components/Navbar';

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [radioValue, setRadioValue] = useState();
  const [textareaValue, setTextareaValue] = useState();

  function handleTextareaChange(e) {
    setTextareaValue(e.target.value)
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handlePasswordChange(e) {
    setPasswordValue(e.target.value)
  }

  function handleSelectChange(e) {
    setSelectValue(e.target.value)
  }

  function handleCheckboxChange(e) {
    e.persist();
    if (e.target.checked) {
      setCheckboxValue([...checkboxValue, e.target.value]);
    } else {
      setCheckboxValue(
        checkboxValue.filter((item) => item !== e.target.value)
      );
    }
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
  }

  return (
    <div>
      <Head>
        <title>Next Playwright</title>
        <meta name="description" content="Next Playwright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="max-w-5xl mx-auto p-4">

          <h1 className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Components Test
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-8 ">
            <div>
              <a href="#code" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                code
              </a>
              <a href="#avatar" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                avatar
              </a>
              <a href="#progress" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                progress
              </a>
              <a href="#spinner" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                spinner
              </a>
              <a href="#snippet" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                snippet
              </a>
              <a href="#statusindicator" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                statusindicator
              </a>
              <a href="#textarea" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                textarea
              </a>
              <a href="#radio" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                radio
              </a>
              <a href="#checkbox" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                checkbox
              </a>
              <a href="#select" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                select
              </a>
            </div>
            <div>
              <a href="#input" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                input
              </a>
              <a href="#inputpassword" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                inputpassword
              </a>
              <a href="#button" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                button
              </a>
              <a href="#buttonoutline" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                buttonoutline
              </a>
              <a href="#linkbutton" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                linkbutton
              </a>
              <a href="#linkbuttonoutline" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                linkbuttonoutline
              </a>
              <a href="#alert" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                alert
              </a>
              <a href="#alertoutline" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                alertoutline
              </a>
              <a href="#badge" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                badge
              </a>
              <a href="#badgeoutline" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                badgeoutline
              </a>
            </div>
            <div>
              <a href="#heading" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                heading
              </a>
              <a href="#kbd" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                kbd
              </a>
              <a href="#label" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                label
              </a>
              <a href="#note" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                note
              </a>
              <a href="#text" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                text
              </a>
              <a href="#divider" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                divider
              </a>
              <a href="#card" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                card
              </a>
              <a href="#container" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                container
              </a>
              <a href="#section" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                section
              </a>
            </div>
          </div>

          <div className="my-8 pt-14" id="code">
            <Heading.h5 className="mb-2 italic">code</Heading.h5>
            <Code
              data-testid="code-wrapper-html"
              testId="code-html"
              lang='html'
              code={`<button data-testid="button-native-disabled" type="submit" disabled>
  Button Native Disabled
</button>`}
            />
            <Code
              data-testid="code-wrapper-js"
              testId="code-js"
              code={`test('Test toBeDisabled', () => {
  render(<Native />)
  const button = screen.getByTestId('button-native-disabled')
  expect(button).toBeDisabled()
})`}
            />
          </div>

          <div className="my-8 pt-14" id="avatar">
            <Heading.h5 className="mb-2 italic">avatar</Heading.h5>
            <Avatar src={imgAvatar} alt="Image Component" className="mb-3" data-testid="avatar" id="img-component-1" />
            <Avatar src={imgAvatar} alt="Image Component" className="!h-12 !w-12 !border-red-500" data-testid="avatar-md" id="img-component-2" />
          </div>

          <div className="my-8 pt-14" id="progress">
            <Heading.h5 className="mb-2 italic">progress</Heading.h5>
            <Progress className="mb-2" data-testid="progress" percent={50} height="h-2" />
            <Progress.percentage className="mb-2" data-testid="progress-percentage" percent={50} />
          </div>

          <div className="my-8 pt-14" id="spinner">
            <Heading.h5 className="mb-2 italic">spinner</Heading.h5>
            <Spinner data-testid="spinner" />
            <Spinner data-testid="spinner-small" small />
            <Spinner data-testid="spinner-large" large />
          </div>

          <div className="my-8 pt-14" id="snippet">
            <Heading.h5 className="mb-2 italic">snippet</Heading.h5>
            <Snippet data-testid="snippet" text="yarn add @heroicons/react" className="mb-1" />
          </div>

          <div className="my-8 pt-14" id="statusindicator">
            <Heading.h5 className="mb-2 italic">statusindicator</Heading.h5>
            <StatusIndicator data-testid="status-indicator" text="Status Normal" className="mb-1" />
            <StatusIndicator text="Success" success className="mb-1" />
            <StatusIndicator text="Warning" warning className="mb-1" />
          </div>

          <div className="my-8 pt-14" id="textarea">
            <Heading.h5 className="mb-2 italic">textarea</Heading.h5>
            <TextArea type="text" data-testid="textarea-component" value={textareaValue} onChange={handleTextareaChange} placeholder='Textarea Component' />
            <Text data-testid="textarea-value">{textareaValue}</Text>
            <TextArea.disabled type="text" data-testid="textarea-component-disabled" placeholder='Textarea Component Disabled' />
          </div>

          <div className="my-8 pt-14" id="radio">
            <Heading.h5 className="mb-2 italic">radio</Heading.h5>
            <Radio
              data-testid="radio-red"
              label="Red"
              name="red"
              value="red"
              onChange={handleRadioChange}
              checked={radioValue == "red"}
            />
            <Radio
              data-testid="radio-blue"
              label="Blue"
              name="blue"
              value="blue"
              onChange={handleRadioChange}
              checked={radioValue == "blue"}
            />
            <Text data-testid="radio-value">
              {radioValue}
            </Text>
          </div>

          <div className="my-8 pt-14" id="checkbox">
            <Heading.h5 className="mb-2 italic">checkbox</Heading.h5>
            <Checkbox
              data-testid="checkbox-red"
              label="Red"
              name="red"
              value="red"
              onChange={handleCheckboxChange}
              checked={checkboxValue.includes("red")}
            />
            <Checkbox
              data-testid="checkbox-blue"
              label="Blue"
              name="blue"
              value="blue"
              onChange={handleCheckboxChange}
              checked={checkboxValue.includes("blue")}
            />
            <Text data-testid="checkbox-value">
              {checkboxValue &&
                checkboxValue.map(item => {
                  return <span key={item}>{item}, </span>
                })
              }
            </Text>
          </div>

          <div className="my-8 pt-14" id="select">
            <Heading.h5 className="mb-2 italic">select</Heading.h5>
            <Select name="select" data-testid="select" onChange={handleSelectChange}>
              <Select.option data-testid="option-red" value="red">Red</Select.option>
              <Select.option data-testid="option-blue" value="blue">Blue</Select.option>
            </Select>
            <Text data-testid="select-value">{selectValue}</Text>
          </div>

          <div className="my-8 pt-14" id="input">
            <Heading.h5 className="mb-2 italic">input</Heading.h5>
            <Input type="text" data-testid="input-component" value={inputValue} onChange={handleInputChange} placeholder='Input Component' />
            <Text data-testid="input-value">{inputValue}</Text>
            <Input.disabled type="text" data-testid="input-component-disabled" placeholder='Input Component Disabled' />
          </div>

          <div className="my-8 pt-14" id="inputpassword">
            <Heading.h5 className="mb-2 italic">inputpassword</Heading.h5>
            <InputPassword data-testid="inputpassword-component" btnTestId="inputpassword-btn" value={passwordValue} onChange={handlePasswordChange} />
            <Text data-testid="inputpassword-value">{passwordValue}</Text>
            <InputPassword data-testid="inputpassword-component-disabled" disabled />
          </div>

          <div className="my-8 pt-14" id="button">
            <Heading.h5 className="mb-2 italic">button</Heading.h5>
            <Button data-testid="button-component" onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Component</Button>
            <Button data-testid="button-component-pills" pills onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Component</Button>
            <Button data-testid="button-component-disabled" disabled onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Component Disabled</Button>
          </div>

          <div className="my-8 pt-14" id="buttonoutline">
            <Heading.h5 className="mb-2 italic">buttonoutline</Heading.h5>
            <ButtonOutline data-testid="button-outline-component" onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Outline Component</ButtonOutline>
            <ButtonOutline data-testid="button-outline-component-pills" pills onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Outline Component</ButtonOutline>
            <ButtonOutline data-testid="button-outline-component-disabled" disabled onClick={() => alert("Button Component Clicked")} className="my-2 block">Button Outline Component Disabled</ButtonOutline>
          </div>

          <div className="my-8 pt-14" id="linkbutton">
            <Heading.h5 className="mb-2 italic">link button</Heading.h5>
            <LinkButton data-testid="linkbutton-component" href="#" aria-label="Home page" title="A link to start over">Link Button</LinkButton><br /><br />
            <LinkButton data-testid="linkbutton-component-pills" href="#" pills>Link Button Pills</LinkButton>
          </div>

          <div className="my-8 pt-14" id="linkbuttonoutline">
            <Heading.h5 className="mb-2 italic">link button outline</Heading.h5>
            <LinkButtonOutline data-testid="linkbutton-outline-component" href="#" aria-label="Home page" title="A link to start over">Link Button Outline</LinkButtonOutline><br /><br />
            <LinkButtonOutline data-testid="linkbutton-outline-component-pills" href="#" pills>Link Button Outline Pills</LinkButtonOutline>
          </div>

          <div className="my-8 pt-14" id="alert">
            <Heading.h5 className="mb-2 italic">alert</Heading.h5>
            <Alert data-testid="alert">Alert</Alert>
            <Alert data-testid="alert-pills" pills>Alert Pills</Alert>
            <Alert data-testid="alert-large" large>Alert Large</Alert>
          </div>

          <div className="my-8 pt-14" id="alertoutline">
            <Heading.h5 className="mb-2 italic">alertoutline</Heading.h5>
            <AlertOutline data-testid="alertoutline">Alert Outline</AlertOutline>
            <AlertOutline data-testid="alertoutline-pills" pills>Alert Outline Pills</AlertOutline>
            <AlertOutline data-testid="alertoutline-large" large>Alert Outline Large</AlertOutline>
          </div>

          <div className="my-8 pt-14" id="badge">
            <Heading.h5 className="mb-2 italic">badge</Heading.h5>
            <Badge data-testid="badge" className="mr-3">Badge</Badge>
            <Badge data-testid="badge-pills" pills className="mr-3">Badge Pills</Badge>
            <Badge data-testid="badge-large" large className="mr-3">Badge Large</Badge>
          </div>

          <div className="my-8 pt-14" id="badgeoutline">
            <Heading.h5 className="mb-2 italic">badgeoutline</Heading.h5>
            <BadgeOutline data-testid="badgeoutline" className="mr-3">Badge Outline</BadgeOutline>
            <BadgeOutline data-testid="badgeoutline-pills" pills className="mr-3">Badge Outline Pills</BadgeOutline>
            <BadgeOutline data-testid="badgeoutline-large" large className="mr-3">Badge Outline Large</BadgeOutline>
          </div>

          <div className="my-8 pt-14" id="heading">
            <Heading.h5 className="mb-2 italic">heading</Heading.h5>
            <Heading data-testid="heading">Heading</Heading>
          </div>

          <div className="my-8 pt-14" id="kbd">
            <Heading.h5 className="mb-2 italic">kbd</Heading.h5>
            <Kbd>Ctrl</Kbd>
          </div>

          <div className="my-8 pt-14" id="label">
            <Heading.h5 className="mb-2 italic">label</Heading.h5>
            <Label data-testid="label">Label</Label>
          </div>

          <div className="my-8  pt-14" id="note">
            <Heading.h5 className="mb-2 italic">note</Heading.h5>
            <Note title="Note Title : ">Note Description</Note>
          </div>

          <div className="my-8 pt-14" id="text">
            <Heading.h5 className="mb-2 italic">text</Heading.h5>
            <Text data-testid="text">Text</Text>
          </div>

          <div className="my-8 pt-14" id="divider">
            <Heading.h5 className="mb-2 italic">divider</Heading.h5>
            <Divider data-testid="divider" className="mb-4" />
            <Divider data-testid="divider-center" center text="Divider Text Center" />
          </div>

          <div className="my-8 pt-14" id="card">
            <Heading.h5 className="mb-2 italic">card</Heading.h5>
            <Card data-testid="card">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Text>
            </Card>
          </div>

          <div className="my-8 pt-14" id="container">
            <Heading.h5 className="mb-2 italic">container</Heading.h5>
            <Container data-testid="container">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Text>
            </Container>
            <Container data-testid="container-medium" medium>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Text>
            </Container>
          </div>

          <div className="my-8 pt-14" id="section">
            <Heading.h5 className="mb-2 italic">section</Heading.h5>
            <Section data-testid="section" id="section" name='Section Title'>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Text>
            </Section>
          </div>

          <Counter maxClicks={3} initialCount={1} />

        </div>
      </main>
    </div>
  )
}
