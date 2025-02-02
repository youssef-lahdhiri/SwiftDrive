"use client ";

import  useStore  from "@/app/store/store";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";
import type { MarkType } from "@/app/components/maps";

 export  default function CustumMarker({ mark }: { mark: MarkType }) {
  const setPlace = useStore((state) => state.setPlace);
  const [markerRef, marker] = useAdvancedMarkerRef();
const place = useStore((state) => state.place);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(() => {
    setInfoWindowShown((isShown) => !isShown);
    setPlace(mark.name);
  }, []);

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        title={mark.name}
        ref={markerRef}
        position={mark.position}
        onClick={handleMarkerClick}
      />
      {place==mark.name && (
        <InfoWindow anchor={marker} onClose={handleClose}>
            <h2 className="text-md text-center font-semibold ">{mark.name}</h2>
          
        </InfoWindow>
      )}
    </>
  );
}
