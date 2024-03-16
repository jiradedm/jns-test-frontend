import type { FC } from "react";
import React from "react";

import Search from "../search";

const Header: FC = () => {
  return (
    <div className="flex h-[160px] items-center justify-between gap-3 border-b p-5">
      <div className="flex gap-3">
        <div className="size-24 border" />
        <div className="my-auto text-2xl font-[500]">Website Name</div>
      </div>
      <Search />
    </div>
  );
};

export default Header;
