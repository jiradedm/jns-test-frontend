"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type FC } from "react";

import { useGeneralStore } from "@/store/general";

interface Place {
  displayName: {
    text: string;
    languageCode: string;
  };
  formattedAddress: string;
  photo: string;
}

interface PlaceProps {
  place: Place;
}

const PlaceComponent: FC<PlaceProps> = ({ place }) => {
  return (
    <div className="grid grid-cols-[120px_auto] gap-3">
      <img
        src={place.photo || "https://maps.googleapis.com/maps/api/place/photo"}
        className="w-full"
        alt={place.displayName.text}
      />
      <div className="flex flex-col gap-3 py-1">
        <div className="text-lg font-[500]">{place.displayName.text}</div>
        <div className="line-clamp-3">{place.formattedAddress}</div>
      </div>
    </div>
  );
};

export default function PlacePage() {
  const { searchText } = useGeneralStore();

  const places = useQuery({
    queryKey: ["place", searchText],
    queryFn: async () => {
      if (!searchText) return [];
      const res = await axios.get<Place[]>(
        `${process.env.NEXT_PUBLIC_API}/place/${searchText}`,
      );
      return res.data;
    },
    initialData: [],
  });

  return (
    <div className="mx-auto flex max-w-[600px] flex-col gap-3">
      {places.data.length === 0 ? (
        <div className="py-[30%] text-center">
          {places.isFetching ? "loading ..." : "places not found"}
        </div>
      ) : (
        places.data.map((place, index) => (
          <PlaceComponent key={index} place={place} />
        ))
      )}
    </div>
  );
}
