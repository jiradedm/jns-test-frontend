"use client";

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowDown,
  faArrowUpFromBracket,
  faChartSimple,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import type { FC } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

import Tab from "@/app/report/components/tab";
import { useReportStore } from "@/store/report";

interface IconWrapperProps {
  active: boolean;
  onClick: () => void;
  icon: IconDefinition;
}

const IconWrapper: FC<IconWrapperProps> = ({ active, onClick, icon }) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={twMerge(
        "text-gray-400 text-2xl cursor-pointer",
        active && "text-primary",
      )}
      icon={icon}
    />
  );
};

interface DateData {
  endValue: Date | null;
  startValue: Date | null;
  rangeDates: Date[] | null;
}

const DatePickerSection = () => {
  const { display, setDisplay } = useReportStore();

  const today = new Date();
  const tmr = new Date(+today + 1000 * 60 * 60 * 24);

  const [date, setDate] = React.useState<DateData>({
    startValue: today,
    endValue: tmr,
    rangeDates: [today, tmr],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <>
      <div className="flex items-center gap-[4%] py-2">
        <Tab className="mr-[2%]" />
        <IconWrapper
          icon={faChartSimple}
          active={display === "graph"}
          onClick={() => setDisplay("graph")}
        />
        <IconWrapper
          icon={faList}
          active={display === "list"}
          onClick={() => setDisplay("list")}
        />
      </div>
      <div>
        <div className="mx-auto flex items-center gap-2">
          <div className="relative w-[calc(100%-56px)]">
            <Datepicker
              onChange={handleChange}
              locale={enUS}
              classNames={{}}
              startValue={date.startValue}
              endValue={date.endValue}
            />
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs text-primary">
            <FontAwesomeIcon icon={faArrowDown} />
            <div>Today</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <div>
          {format(date.startValue || new Date(), "dd")}
          {format(
            date.endValue || date.startValue || new Date(),
            " - dd MMMM yyyy",
          )}
        </div>
        <FontAwesomeIcon
          icon={faArrowUpFromBracket}
          className="cursor-pointer text-xl text-primary"
        />
      </div>
    </>
  );
};

export default DatePickerSection;
