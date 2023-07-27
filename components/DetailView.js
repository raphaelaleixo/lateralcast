import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";

export default function DetailView({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [className, setClassName] = useState("max-h-0");

  useEffect(() => {
    if (isOpen === true) {
      setClassName("max-h-max");
    } else {
      setClassName("max-h-0");
    }
  }, [isOpen]);

  return (
    <div className="border-t px-8 py-4 border-slate-400">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-extrabold">{title}</h2>
        <MdChevronRight className={`text-2xl ${isOpen ? "rotate-90" : ""}`} />
      </div>
      <div className={`overflow-hidden ${className}`}>
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}
