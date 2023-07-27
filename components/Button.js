const BASE_TAILWIND =
  "bg-black text-white text-sm py-4 px-8 rounded-full font-bold";

export default function Button({ text }) {
  return <button className={BASE_TAILWIND}>{text}</button>;
}
