import type { ComponentPropsWithoutRef, FC } from "react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const tabs = ["Daily", "Weekly", "Monthly"];

const Tab: FC<ComponentPropsWithoutRef<"div">> = ({ className }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={twMerge(
        "relative flex w-full border-b-2 py-1 text-center font-[500] text-gray-400",
        className,
      )}
    >
      <div
        className="absolute -bottom-0.5 h-0.5 rounded-full bg-primary transition-all"
        style={{
          width: `${100 / tabs.length}%`,
          left: `${(active * 100) / tabs.length}%`,
        }}
      />
      {tabs.map((tab, index) => (
        <div
          className={twMerge(
            "w-full cursor-pointer px-2",
            active === index && "text-black",
          )}
          key={index}
          onClick={() => setActive(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tab;
