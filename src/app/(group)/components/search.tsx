import type { FC } from "react";
import React, { useState } from "react";

import { useGeneralStore } from "@/store/general";

const Search: FC = () => {
  const [value, setValue] = useState("");
  const { setSearchText } = useGeneralStore();

  return (
    <div className="flex h-full flex-col justify-end">
      <div>Search</div>
      <div className="relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchText(value);
          }}
        >
          <input
            className="pr-6"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <div
          className="absolute right-0 top-0 cursor-pointer px-1"
          onClick={() => setSearchText(value)}
        >
          🔍
        </div>
      </div>
    </div>
  );
};

export default Search;
