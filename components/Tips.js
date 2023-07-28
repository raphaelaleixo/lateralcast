import { useState } from "react";
import Button from "./Button";

export default function Tips({ tips }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="my-2 mb-4">
        {tips.map((tip, index) =>
          index <= count ? (
            <div
              className="p-6 my-2 border-4 rounded-md border-black font-bold text-md"
              key={tip.id}
            >
              {tip.tip}
            </div>
          ) : null
        )}
      </div>
      {count < tips.length - 1 ? (
        <Button
          text={`Show tip ${count + 2} of ${tips.length}`}
          action={() => setCount(count + 1)}
        />
      ) : null}
    </div>
  );
}
