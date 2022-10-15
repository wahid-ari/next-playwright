export default function Alert({ className, children, pills, large, ...rest }) {
  return (
    <div {...rest} className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-blue-600 bg-opacity-10 bg-blue-600`}
    >
      {children}
    </div>
  )
}

Alert.green = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-green-600 bg-opacity-10 bg-green-600`}
    >
      {children}
    </div>
  )
}

Alert.yellow = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-yellow-600 bg-opacity-10 bg-yellow-600`}
    >
      {children}
    </div>
  )
}

Alert.red = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-red-600 bg-opacity-10 bg-red-600`}
    >
      {children}
    </div>
  )
}

Alert.orange = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-orange-600 bg-opacity-10 bg-orange-600`}
    >
      {children}
    </div>
  )
}

Alert.purple = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-violet-600 bg-opacity-10 bg-violet-600`}
    >
      {children}
    </div>
  )
}

Alert.dark = ({ className, children, pills, large }) => {
  return (
    <div className={`
      ${className ? className + " " : ""} 
      ${large ? "text-sm" : "text-xs"} 
      ${pills ? "rounded-full" : "rounded-lg"}
      p-3 mb-2 text-gray-600 dark:text-gray-400 bg-opacity-10 bg-gray-400 dark:border-gray-600`}
    >
      {children}
    </div>
  )
}