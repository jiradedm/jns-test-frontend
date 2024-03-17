import type { FC, PropsWithChildren } from "react";
import React from "react";

import Footer from "./footer";
import Header from "./header";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh)] w-full overflow-auto">
      <Header />
      <div className="pb-[80px] pt-[calc(5%+40px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
