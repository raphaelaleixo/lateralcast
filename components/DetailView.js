import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function DetailView({ title, children, isOpened = false }) {
  const [isOpen, setIsOpen] = useState(isOpened);
  const [className, setClassName] = useState("max-h-0");

  useEffect(() => {
    if (isOpen === true) {
      setClassName("max-h-[50rem]");
    } else {
      setClassName("max-h-0");
    }
  }, [isOpen]);

  return (
    <div className="border-t px-8 py-6 border-slate-400">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-extrabold text-xl">{title}</h2>
        <MdChevronRight className={` transition-all text-2xl ${isOpen ? "rotate-90" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all ${className}`}>
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}
