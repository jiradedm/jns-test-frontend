"use client";

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faDiamond,
  faGift,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";
import React from "react";

interface Item {
  name: string;
  icon: IconDefinition;
  amount: number;
}

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  item: Item;
}

const ItemComponent: FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 py-8">
      <div className="flex items-center gap-1 text-primary">
        <FontAwesomeIcon icon={item.icon} />
        <div>{item.name}</div>
      </div>
      <div className="pt-4 text-3xl font-semibold">{item.amount}</div>
      <div className="text-sm text-gray-400">{item.name}</div>
    </div>
  );
};

const items = [
  { name: "Like", icon: faThumbsUp, amount: 34 },
  { name: "Comment", icon: faComment, amount: 56 },
  { name: "Point", icon: faGift, amount: 450 },
  { name: "Diamond", icon: faDiamond, amount: 40 },
];

const ReportPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link key={item.name} href={`/report/type/${item.name}`}>
            <ItemComponent item={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ReportPage;
