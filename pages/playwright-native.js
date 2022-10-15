import Head from 'next/head'
import { useState } from "react";
import TestWrapperPlaywright from '../components/TestWrapperPlaywright';
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';

export default function Native() {

  const inputClassName = `text-sm transition-all w-full px-3 py-[0.6rem] rounded-md mt-2
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none`;
  const buttonClassName = `block my-2 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`;

  const [checked, setChecked] = useState(true)
  const [text, setText] = useState("text")
  const [number, setNumber] = useState(5)
  const [select, setSelect] = useState("second")

  return (
    <div>
      <Head>
        <title>Test Playwright Native</title>
        <meta name="description" content="Test Playwright Native Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen">

        <Navbar />

        <BackToTop />

        <div className="max-w-5xl mx-auto p-4">

          <h1 data-testid="heading" className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Playwright Native Test
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-8 ">
            <div>
              <a href="#toBeChecked" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeChecked
              </a>
              <a href="#toBeDisabled" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeDisabled
              </a>
              <a href="#toBeEditable" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeEditable
              </a>
              <a href="#toBeEmpty" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeEmpty
              </a>
              <a href="#toBeEnabled" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeEnabled
              </a>
              <a href="#toBeFocused" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeFocused
              </a>
            </div>
            <div>
              <a href="#toBeHidden" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeHidden
              </a>
              <a href="#toBeVisible" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toBeVisible
              </a>
              <a href="#toContainText" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toContainText
              </a>
              <a href="#toHaveAttribute" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveAttribute
              </a>
              <a href="#toHaveClass" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveClass
              </a>
              <a href="#toHaveCss" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveCss
              </a>
            </div>
            <div>
              <a href="#toHaveId" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveId
              </a>
              <a href="#toHaveText" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveText
              </a>
              <a href="#toHaveValue" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveValue
              </a>
              <a href="#toHaveValues" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveValues
              </a>
              <a href="#toHaveTitle" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveTitle
              </a>
              <a href="#toHaveURL" className="text-sm text-blue-500 hover:text-blue-600 transition-all block my-1">
                toHaveURL
              </a>
            </div>
          </div>

          <div className="my-4">
            <button data-testid="button-native" onClick={() => alert("Button Native Clicked")} type="submit"
              className={buttonClassName}>
              Button Native
            </button>
            <input type="text" data-testid="input-native" placeholder='Input Native' className={inputClassName} />
          </div>

          {/* Test toBeChecked */}
          <TestWrapperPlaywright link="locator-assertions-to-be-checked" title="toBeChecked" description={`Ensures the Locator points to a checked input.`}>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} data-testid="input-checkbox-checked" className="block my-2" />
            <input type="checkbox" data-testid="input-checkbox-unchecked" className="block my-2" />
            <input type="radio" checked={checked} onChange={(e) => setChecked(e.target.checked)} value="foo" data-testid="input-radio-checked" className="block my-2" />
            <input type="radio" value="foo" data-testid="input-radio-unchecked" className="block my-2" />
          </TestWrapperPlaywright>

          {/* Test toBeDisabled */}
          <TestWrapperPlaywright link="locator-assertions-to-be-disabled" title="toBeDisabled" description="Ensures the Locator points to a disabled element. Element is disabled if it has 'disabled' attribute or is disabled via 'aria-disabled'. Note that only native control elements such as HTML button, input, select, textarea, option, optgroup can be disabled by setting 'disabled' attribute. 'disabled' attribute on other elements is ignored by the browser.">
            <button data-testid="button-native-disabled" onClick={() => alert("Button Native Clicked")} type="submit" disabled
              className="block mt-4 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 cursor-not-allowed">
              Button Native Disabled
            </button>
            <input type="text" data-testid="input-native-disabled" placeholder='Input Native Disabled' disabled className={`${inputClassName} cursor-not-allowed`} />
            <a href="#" disabled className="my-2 text-blue-500 hover:text-blue-600 transition-all block">link</a>
          </TestWrapperPlaywright>

          {/* Test toBeEditable */}
          <TestWrapperPlaywright link="locator-assertions-to-be-editable" title="toBeEditable" description="Ensures the Locator points to an editable element.">
            <input type="text" value="input editable" data-testid="input-native-editable" placeholder='Input Native Enabled' className={`${inputClassName}`} />
          </TestWrapperPlaywright>

          {/* Test toBeEmpty */}
          <TestWrapperPlaywright link="locator-assertions-to-be-empty" title="toBeEmpty" description="Ensures the Locator points to an empty editable element or to a DOM node that has no text.">
            <span data-testid="not-empty">
              <span data-testid="empty"></span>
            </span>
            <span data-testid="with-whitespace"> </span>
            <span data-testid="with-comment">{/* comment */}</span>
          </TestWrapperPlaywright>

          {/* Test toBeEnabled */}
          <TestWrapperPlaywright link="locator-assertions-to-be-enabled" title="toBeEnabled" description="Ensures the Locator points to an enabled element.">
            <button data-testid="button-native-enabled" onClick={() => alert("Button Native Clicked")} type="submit"
              className="block mt-4 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 cursor-not-allowed">
              Button Native Enabled
            </button>
            <input type="text" data-testid="input-native-enabled" placeholder='Input Native Disabled' className={`${inputClassName} cursor-not-allowed`} />
          </TestWrapperPlaywright>

          {/* Test toBeFocused */}
          <TestWrapperPlaywright link="locator-assertions-to-be-focused" title="toBeFocused" description="Ensures the Locator points to a focused DOM node.">
            <button data-testid="button-tobefocused" onClick={() => alert("Button Native Clicked")} type="submit"
              className="block mt-4 rounded text-sm text-white transition-all outline-none px-3 py-1.5 font-medium bg-blue-500 hover:bg-blue-600 cursor-not-allowed">
              Button toBeFocused
            </button>
            <input type="text" data-testid="input-tobefocused" placeholder='Input toBeFocused' className={`${inputClassName} cursor-not-allowed`} />
          </TestWrapperPlaywright>

          {/* Test toBeHidden */}
          <TestWrapperPlaywright link="locator-assertions-to-be-hidden" title="toBeHidden" description="Ensures that Locator either does not resolve to any DOM node, or resolves to a non-visible one.">
            <div data-testid="visibility-hidden" style={{ visibility: 'hidden' }}>
              Visibility Hidden Example
            </div>
            <div data-testid="display-none" style={{ display: 'none' }}>Display None Example</div>
            <div data-testid="hidden-attribute" hidden className="text-sm dark:text-white">Hidden Attribute Example</div>
          </TestWrapperPlaywright>

          {/* Test toBeVisible */}
          <TestWrapperPlaywright link="locator-assertions-to-be-visible" title="toBeVisible" description={`Ensures that Locator points to an attached and visible DOM node.`}>
            <span data-testid="html-element">
              <span className="dark:text-white text-sm">Html Element</span>
            </span>
            <svg data-testid="svg-element" className="border border-red-500 rounded mt-2"></svg>
            <div data-testid="zero-opacity" style={{ opacity: 0 }}>Zero Opacity Example</div>
            <div style={{ opacity: 0 }}>
              <span data-testid="hidden-parent">Hidden Parent Example</span>
            </div>
            <div data-testid="visible" className="text-sm dark:text-white my-4">Visible Example</div>
            <details className="text-sm dark:text-white my-4">
              <summary>Title of hidden text</summary>
              Hidden Details Example
            </details>
            <details open className="text-sm dark:text-white my-4">
              <summary>Title of visible text</summary>
              <div>Visible Details Example</div>
            </details>
          </TestWrapperPlaywright>

          {/* Test toContainText */}
          <TestWrapperPlaywright link="locator-assertions-to-contain-text" title="toContainText" description={`Ensures the Locator points to an element that contains the given text. You can use regular expressions for the value as well. If you pass an array as an expected value, the expectations are:`}
            list={
              <>
                <TestWrapperPlaywright.list>Locator resolves to a list of elements.</TestWrapperPlaywright.list>
                <TestWrapperPlaywright.list>Elements from a subset of this list contain text from the expected array, respectively.</TestWrapperPlaywright.list>
                <TestWrapperPlaywright.list>The matching subset of elements has the same order as the expected array.</TestWrapperPlaywright.list>
                <TestWrapperPlaywright.list>Each text value from the expected array is matched by some element from the list.</TestWrapperPlaywright.list>
              </>
            }
          >
            <div data-testid="div-tocontaintext" className="text-sm dark:text-white my-4">to Contain Text</div>
            <ul className="dark:text-white text-sm">
              <li>Item Text 1</li>
              <li>Item Text 2</li>
              <li>Item Text 3</li>
            </ul>
          </TestWrapperPlaywright>

          {/* Test toHaveAttribute */}
          <TestWrapperPlaywright link="locator-assertions-to-have-attribute" title="toHaveAttribute" description={`Ensures the Locator points to an element with given attribute.`}>
            <button data-testid="ok-button" type="submit" disabled className={buttonClassName}>
              Ok Button
            </button>
          </TestWrapperPlaywright>

          {/* Test toHaveClass */}
          <TestWrapperPlaywright link="locator-assertions-to-have-class" title="toHaveClass" description={`Ensures the Locator points to an element with given CSS classes. This needs to be a full match or using a relaxed regular expression.`}>
            <button data-testid="delete-button" className={`btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`}>
              Delete item
            </button>
            <button data-testid="no-classes">No Classes</button>
          </TestWrapperPlaywright>

          {/* Test toHaveCss */}
          <TestWrapperPlaywright link="locator-assertions-to-have-css" title="toHaveCss" description={`Ensures the Locator resolves to an element with the given computed CSS style.`}>
            <button data-testid="button-tohavecss" style={{ display: 'flex' }} className={`btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`}>
              toHaveCss
            </button>
          </TestWrapperPlaywright>

          {/* Test toHaveId */}
          <TestWrapperPlaywright link="locator-assertions-to-have-id" title="toHaveId" description={`Ensures the Locator points to an element with the given DOM Node ID.`}>
            <button id="buttonId" data-testid="button-tohaveid" className={`btn extra btn-danger text-sm text-white py-1 px-2 block rounded my-3 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all`}>
              toHaveId
            </button>
          </TestWrapperPlaywright>

          {/* Test toHaveText */}
          <TestWrapperPlaywright link="locator-assertions-to-have-text" title="toHaveText" description={`Ensures the Locator points to an element with the given text. If you pass an array as an expected value, the expectations are:`}
            list={
              <>
                <TestWrapperPlaywright.list>Locator resolves to a list of elements.</TestWrapperPlaywright.list>
                <TestWrapperPlaywright.list>The number of elements equals the number of expected values in the array.</TestWrapperPlaywright.list>
                <TestWrapperPlaywright.list>Elements from the list have text matching expected array values, one by one, in order.</TestWrapperPlaywright.list>
              </>
            }
          >
            <span data-testid="text-content" className="dark:text-white">Text Content</span>
            <ul className="tohavetext dark:text-white text-sm">
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
            </ul>
          </TestWrapperPlaywright>

          {/* Test toHaveValue */}
          <TestWrapperPlaywright link="locator-assertions-to-have-value" title="toHaveValue" description={`Ensures the Locator points to an element with the given input value. You can use regular expressions for the value as well.`}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} data-testid="input-text" className={inputClassName} />
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} data-testid="input-number" className={inputClassName} />
            <input type="text" data-testid="input-empty" className={inputClassName} />
            <select data-testid="select-number" value={select} onChange={(e) => setSelect(e.target.value)} className={inputClassName}>
              <option value="first">First Value</option>
              <option value="second">Second Value</option>
              <option value="third">Third Value</option>
            </select>
          </TestWrapperPlaywright>

          {/* Test toHaveValues */}
          <TestWrapperPlaywright link="locator-assertions-to-have-values" title="toHaveValues" description={`Ensures the Locator points to multi-select/combobox (i.e. a select with the multiple attribute) and the specified values are selected.`}>
            <select id="favorite-colors" multiple>
              <option value="R">Red</option>
              <option value="G">Green</option>
              <option value="B">Blue</option>
            </select>
          </TestWrapperPlaywright>

          {/* Test toHaveTitle */}
          <TestWrapperPlaywright link="page-assertions-to-have-title" title="toHaveTitle" description={`Ensures the page has the given title.`}>
          </TestWrapperPlaywright>

          {/* Test toHaveURL */}
          <TestWrapperPlaywright link="page-assertions-to-have-url" title="toHaveURL" description={`Ensures the page is navigated to the given URL.`}>
          </TestWrapperPlaywright>

        </div>
      </main>
    </div>
  )
}
