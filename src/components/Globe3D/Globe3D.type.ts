import { TGeoLocation } from "@/core/declarations/types/geoLocation";

export interface IGlobe3DProps {
    ref: React.RefObject<HTMLDivElement | null>
    focusLocation?: TGeoLocation
    markerSize?: number
}