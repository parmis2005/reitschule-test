"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { site } from "@/lib/data";
import "leaflet/dist/leaflet.css";

const horseIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      display:flex;align-items:center;justify-content:center;
      width:44px;height:44px;border-radius:9999px;
      background:#a9673a;border:3px solid #fffdf8;
      box-shadow:0 8px 20px rgba(30,58,43,0.35);
      transform:translate(-50%,-100%);
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fffdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4h1a3 3 0 0 1 3 3 1 1 0 0 0 1 1 2 2 0 0 1 2 2c0 1.5-1.5 2-1.5 3.5V16a2 2 0 0 1-2 2h-1"/>
        <path d="M9 4c-1.5 0-3 1-3 3 0 1-.5 2-1.5 2.5S3 11 3 12.5 4 15 4 16v2a2 2 0 0 0 2 2h1"/>
        <path d="M8 20l.5-4M14 20l-.5-4" />
      </svg>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -46],
});

export default function Map() {
  const { lat, lng } = site.coords;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={[lat, lng]} icon={horseIcon}>
        <Popup>
          <div className="p-1 text-sm">
            <p className="font-semibold text-forest">{site.name}</p>
            <p className="text-charcoal/70">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
