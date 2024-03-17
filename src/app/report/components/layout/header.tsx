import {
  faChevronLeft,
  faEllipsis,
  faHome,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";
import React, { useMemo } from "react";

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center gap-1 text-sm opacity-70"
      onClick={() => router.back()}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      <div>Back</div>
    </div>
  );
};

const Header: FC = () => {
  const pathname = usePathname();

  const overlayed = useMemo(() => pathname === "/report/full", [pathname]);

  return (
    <div className="fixed z-50 flex w-full justify-between bg-primary p-3 pt-[5%] text-white">
      {overlayed ? <BackButton /> : <FontAwesomeIcon icon={faHome} />}
      <Link href="/report">All Report</Link>
      <FontAwesomeIcon icon={overlayed ? faEllipsis : faSliders} />
    </div>
  );
};

export default Header;
