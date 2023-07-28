import { findColorByIndex } from "@/lib/findColorByIndex";
import Link from "next/link";

export default function QuestionLink({ question, index }) {
  const color = findColorByIndex(index);

  return (
    <Link href={`/question/${question.slug}`} className={`flex items-center gap-2 px-8 py-6 my-0.5 ${color}`}>
      <span className="whitespace-nowrap">
        {question.emoji}
      </span>
      <h3 className="font-bold text-md">{question.title}</h3>
    </Link>
  );
}
