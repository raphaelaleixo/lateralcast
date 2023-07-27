import Link from "next/link";
import { useMemo } from "react";

export default function QuestionLink({ question, index }) {
  const styles = useMemo(() => {
    let finalColor;
    switch (index % 5) {
      case 0:
        finalColor = "bg-emerald-100";
        break;
      case 0:
        finalColor = "bg-orange-100";
        break;
      case 0:
        finalColor = "bg-yellow-100";
        break;
      case 0:
        finalColor = "bg-pink-100";
        break;
      case 0:
        finalColor = "bg-purple-100";
        break;
    }
    return `block px-8 py-6 my-0.5 ${finalColor}`;
  }, [index]);

  return (
    <Link href={`/question/${question.slug}`} className={styles}>
      <h3 className="font-bold text-sm truncate">{question.title}</h3>
    </Link>
  );
}
