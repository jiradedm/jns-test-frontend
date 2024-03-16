"use client";

import { create } from "zustand";

interface GeneralStore {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  searchText: "",
  setSearchText: (searchText) => {
    set({ searchText });
  },
}));
