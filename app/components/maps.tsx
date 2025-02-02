"use client";

import markers from "@/app/data/places.json";
import {
  Map,
  APIProvider,

} from "@vis.gl/react-google-maps";
import CustumMarker from "@/app/components/custum-marker";
const containerStyle = {
  width: "100%",
  height: "100vh",
};
export type MarkType = {
  position: {
    lat: number;
    lng: number;
  };
  name: string;
};
const center = {
  lat: 49.872826,
  lng: 8.651193,
};

export default function Maps() {
  return (
    <>
      <APIProvider apiKey={""}>
    <Map 
    
    mapId="google-map-script"
    style={{margin:'auto', marginTop:"5px",width: '90%', height: '70vh'}}
      defaultCenter={center}
      defaultZoom={12}
      gestureHandling={'greedy'}
      disableDefaultUI={true}>
      {markers.map((mark,i)=>(mark.name!="choose a location"&&<CustumMarker key={i} mark={mark}  />))}
      </Map>
      </APIProvider>
    </>
  );
}
