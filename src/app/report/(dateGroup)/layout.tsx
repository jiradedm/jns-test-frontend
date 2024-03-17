"use client";

import { Menu } from "@headlessui/react";
import type { FC, PropsWithChildren } from "react";
import React from "react";

import DatePickerSection from "../components/datePicker";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto flex w-[95%] flex-col gap-2">
      <Menu />
      <DatePickerSection />
      {children}
    </div>
  );
};

export default Layout;
