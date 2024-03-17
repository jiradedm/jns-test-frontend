import {
  faCheckCircle,
  faClock,
  faGear,
  faPaperPlane,
  faPenToSquare,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ComponentPropsWithoutRef, FC } from "react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Menu {
  icon: IconDefinition;
  name: string;
}

interface MenuItemProps extends ComponentPropsWithoutRef<"div"> {
  menu: Menu;
  active: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ menu, active, onClick }) => {
  return (
    <div
      className={twMerge(
        "text-xs text-gray-400 flex flex-col gap-1 items-center cursor-pointer w-full",
        active && "text-primary",
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={menu.icon} className="text-xl" />
      <div>{menu.name}</div>
    </div>
  );
};

const menus: Menu[] = [
  { name: "Write", icon: faPenToSquare },
  { name: "Appraisal", icon: faCheckCircle },
  { name: "Report", icon: faPaperPlane },
  { name: "Statistic", icon: faClock },
  { name: "Setting", icon: faGear },
];

const Footer: FC = () => {
  const [select, setSelect] = useState(3);

  return (
    <div className="fixed bottom-0 z-50 flex w-full justify-around border-t bg-white p-3">
      {menus.map((menu, index) => (
        <MenuItem
          key={menu.name}
          menu={menu}
          active={select === index}
          onClick={() => setSelect(index)}
        />
      ))}
    </div>
  );
};

export default Footer;
