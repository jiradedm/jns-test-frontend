"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const menus = ["Submission", "Engagement"];

const Menu = () => {
  const [active, setActive] = useState("Engagement");

  return (
    <div className="flex w-full border-b-2 text-center font-[500]">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={twMerge(
            "w-full p-2 cursor-pointer text-gray-500",
            index !== 0 && "border-l-2",
            active === menu && "text-primary",
          )}
          onClick={() => setActive(menu)}
        >
          {menu}
        </div>
      ))}
    </div>
  );
};

export default Menu;
