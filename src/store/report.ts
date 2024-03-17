"use client";

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faDiamond,
  faGift,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { create } from "zustand";

export interface ItemDetail {
  text1: string;
  text2: string;
  number: number;
}

export interface Item {
  name: string;
  icon: IconDefinition;
  details: ItemDetail[];
}

export const items: Item[] = [
  {
    name: "Like",
    icon: faThumbsUp,
    details: [
      { text1: "Skude Stiggags", text2: "Northfell", number: 40 },
      { text1: "Grieheck Unuceck", text2: "Darkacre", number: 35 },
      { text1: "Armul Drassla", text2: "Lightfalls", number: 50 },
      { text1: "Crourdus Mucalt", text2: "Grimewallow", number: 60 },
      { text1: "Wiergield Tingvack", text2: "Smoothhost", number: 55 },
      { text1: "Fludrugiar Strirgags", text2: "Stillscar", number: 58 },
      { text1: "Fazuhonn Filrack", text2: "Tradeholde", number: 56 },
    ],
  },
  {
    name: "Comment",
    icon: faComment,
    details: [
      { text1: "Gacho Striggays", text2: "Boneshield", number: 60 },
      { text1: "Shignu Crehla", text2: "Ironrun", number: 35 },
      { text1: "Fephea Corda", text2: "Ironpass", number: 40 },
      { text1: "Gheurle Zogrags", text2: "Purefront", number: 50 },
      { text1: "Pranmu Nengvuccot", text2: "Wildband", number: 55 },
      { text1: "Maghezhan Besslam", text2: "Basinpoint", number: 56 },
      { text1: "Ezmonle Ticrays", text2: "Elderburn", number: 58 },
    ],
  },
  {
    name: "Point",
    icon: faGift,
    details: [
      { text1: "Gingeumo Lolnard", text2: "Wildpeak", number: 60 },
      { text1: "Nilma Drelnahlas", text2: "Drycall", number: 55 },
      { text1: "Ushioge Truggay", text2: "Bleakfrost", number: 40 },
      { text1: "Pepin Farhard", text2: "Eastcairn", number: 35 },
      { text1: "Chlotar Lehmstock", text2: "Drywich", number: 56 },
      { text1: "Fulrad Neutram", text2: "Purewater", number: 58 },
      { text1: "Pepin Strittburrow", text2: "Blackpass", number: 50 },
    ],
  },
  {
    name: "Diamond",
    icon: faDiamond,
    details: [
      { text1: "Fulrad Vanderzel", text2: "Wildhost", number: 35 },
      { text1: "Erling Bilthorn", text2: "Bearmount", number: 40 },
      { text1: "Ebbo Knotstock", text2: "Mudshade", number: 50 },
      { text1: "Einhard Oldlein", text2: "Cloudbourne", number: 55 },
      { text1: "Aega Oldman", text2: "Whiteyard", number: 56 },
      { text1: "Kayla Bilroth", text2: "Scorchcoast", number: 58 },
      { text1: "Oda Oldhill", text2: "Blindstorm", number: 60 },
    ],
  },
];

type Display = "graph" | "list";

interface ReportStore {
  display: Display;
  setDisplay: (display: Display) => void;
}

export const useReportStore = create<ReportStore>((set) => ({
  display: "graph",
  setDisplay: (display) => {
    set({ display });
  },
}));
