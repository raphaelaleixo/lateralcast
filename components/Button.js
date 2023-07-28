import Link from "next/link";
import { useMemo } from "react";

const BASE_TAILWIND =
  "bg-black text-white text-md py-4 px-8 rounded-full font-bold justify-between items-center inline-flex gap-4";

export default function Button({ text, icon, type = "button", href, action }) {
  const Component =
    type === "link" ? "a" : type === "nextLink" ? Link : "button";

  const buttonProps = useMemo(() => {
    if (type === "link") {
      return {
        href,
        target: "_blank",
      };
    }
    if (type === "button") {
      return {
        onClick: action,
      };
    }
    if (type === "nextLink") {
      return {
        href,
      };
    }
  }, [type, href, action]);

  return (
    <Component className={BASE_TAILWIND} {...buttonProps}>
      {text}
      {icon}
    </Component>
  );
}
