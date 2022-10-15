export default function TestWrapper({ title, description, list, children }) {
  return (
    <div className="pt-14" id={title}>
      <div className="flex items-center gap-x-2">
        <h5 className="dark:text-white font-semibold text-lg">{title}</h5>
        <a href={`https://github.com/testing-library/jest-dom#${title}`} target="_blank" rel="noreferrer" className="text-blue-500 text-xs font-semibold pt-1">Docs</a>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{description}</p>
      {list &&
        <ol className="mb-2 text-gray-700 dark:text-gray-300 text-sm list-decimal list-inside">
          {list}
        </ol>
      }
      {children}
    </div>
  )
}

TestWrapper.list = ({ children }) => {
  return (
    <li>{children}</li>
  )
}