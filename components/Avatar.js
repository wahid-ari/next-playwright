import Image from "next/image"

export default function Avatar({ className, src, alt, id, ...rest }) {
  return (
    <div {...rest} className={`${className ? className + " " : ""}relative h-8 w-8 border-blue-500 border-2 rounded-full`}>
      <Image data-testid={id} src={src} alt={alt} layout="fill" className={`${className ? className + " " : ""}rounded-full`} />
    </div>
  )
}