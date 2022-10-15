import Heading from "./Heading";

export default function Section({ id, name = "", className, titleClassName, children, ...rest }) {
  return (
    <section {...rest} id={id} className={`${className ? className + "" : ""} my-2`}>
      <Heading.h4 className={"italic"}>{name}</Heading.h4>
      <div className="mb-2">{children}</div>
    </section>
  );
}
