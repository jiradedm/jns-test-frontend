import type { FC, PropsWithChildren } from "react";
import React from "react";

import Footer from "./footer";
import Header from "./header";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
