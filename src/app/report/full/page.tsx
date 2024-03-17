"use client";

import {
  faCalendar,
  faClock,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";

import { items } from "@/store/report";

import Profile from "../(dateGroup)/type/components/profile";

const detail = items[0].details[0];

const FullPage = () => {
  return (
    <div className="mx-auto flex w-[95%] flex-col gap-6 pt-[2%]">
      <div className="flex justify-between gap-1">
        <Profile detail={detail} />
        <div className="flex flex-col items-end text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCalendar} className="text-xs" />
            <div>{format(new Date(), "dd/mm/yyyy")}</div>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-xs" />
            <div>{format(new Date(), "hh:mm")}</div>
          </div>
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <div className="text-gray-400">Content {index}</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            obcaecati voluptatum cum ut reprehenderit harum recusandae ipsam in
            ea dolores non, fuga quaerat voluptate quis ullam corporis
            consequuntur natus quas
          </div>
        </div>
      ))}
      <div>
        <div className="text-gray-400">Images</div>
        <div className="flex gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="size-[80px] bg-gray-400" />
          ))}
        </div>
      </div>
      <div>
        <div className="text-gray-400">Attach File</div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faPaperclip} />
          <div className="font-[500] text-primary">Update Design.pdf</div>
        </div>
      </div>
    </div>
  );
};

export default FullPage;
