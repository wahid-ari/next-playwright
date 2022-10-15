import Link from 'next/link';
import { useContext } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { GlobalContext } from "../utils/GlobalContext";

export default function Navbar() {
  const [darkMode, setDarkMode] = useContext(GlobalContext);

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow-sm">
      {/* <div className="sticky top-0 z-10 bg-opacity-40 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-900 backdrop-filter backdrop-blur"> */}
      <div className="flex items-center justify-between gap-3 p-4 max-w-5xl mx-auto">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Components</a>
          </Link>
          <Link href="/native">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Native</a>
          </Link>
          <Link href="/example">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Example</a>
          </Link>
          <Link href="/playwright-native">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Playwright Native</a>
          </Link>
          <Link href="/playwright-example">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Playwright Example</a>
          </Link>
          <Link href="/playwright-locator">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Playwright Locator</a>
          </Link>
          <Link href="/playwright-form">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Playwright Form</a>
          </Link>
          <Link href="/playwright-forms">
            <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Playwright Forms</a>
          </Link>
        </nav>
        {darkMode ?
          <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
          :
          <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
        }
      </div>
    </div>
  )
}