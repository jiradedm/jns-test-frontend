"use client";

import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Link from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { Item, ItemDetail } from "@/store/report";
import { items, useReportStore } from "@/store/report";

import Chart from "../components/chart";
import Profile from "../components/profile";

interface Props {
  typeName: string;
}

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  item: Item;
  active?: boolean;
}

const ItemComponent: FC<ItemProps> = ({ item, active = false, ...props }) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center gap-1 rounded-full text-primary py-1 px-2 border border-primary cursor-pointer",
        active && "bg-primary text-white border-none",
      )}
      {...props}
    >
      <FontAwesomeIcon icon={item.icon} />
      <div>{item.name}</div>
    </div>
  );
};

interface ListComponentProps {
  name: string;
  detail: ItemDetail;
  index: number;
}

const ListComponent: FC<ListComponentProps> = ({ name, detail, index }) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-black text-sm text-white">
        {index}
      </div>
      <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-lg border-2 border-gray-300 p-1">
        <Profile detail={detail} showBook />
        <div className="flex items-center gap-3 px-3 text-sm">
          <div className="h-7 w-1 bg-gray-300" />
          <FontAwesomeIcon icon={faComment} className=" text-primary" />
          <div className="truncate">
            {detail.number} {name}
          </div>
        </div>
      </div>
    </div>
  );
};

const TypePage: NextPage<{ params: Props }> = ({ params }) => {
  const { display } = useReportStore();

  const activeSeries = useMemo(() => {
    const item = items.find(({ name }) => name === params.typeName);
    if (!item) return [];
    return [
      { name: item.name, data: item.details.map((detail) => detail.number) },
    ];
  }, [params]);

  const activeItem = useMemo(() => {
    const item = items.find(({ name }) => name === params.typeName);
    return item;
  }, [params]);

  return (
    <>
      <div className="flex w-full gap-2 overflow-x-auto">
        {items.map((item) => (
          <Link
            key={item.name}
            href={`/report/type/${item.name}`}
            className="w-full"
          >
            <ItemComponent item={item} active={params.typeName === item.name} />
          </Link>
        ))}
      </div>
      {display === "list" && (
        <div className="flex flex-col gap-2">
          {activeItem?.details.map((detail, index) => (
            <Link key={index} href="/report/full">
              <ListComponent
                name={activeItem.name}
                detail={detail}
                index={index + 1}
              />
            </Link>
          ))}
        </div>
      )}
      {display === "graph" && <Chart series={activeSeries} />}
    </>
  );
};

export default TypePage;
