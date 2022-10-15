export default function Card({ className, children, ...rest }) {
  return (
    <div
      {...rest}
      className={`${className} p-4 sm:p-6 rounded-lg border dark:border-neutral-800`}
    >
      {children}
    </div>
  );
}
