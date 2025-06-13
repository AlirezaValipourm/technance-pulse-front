import { TGeoLocation } from "@/core/declarations/types/geoLocation";
import { TTrade } from "@/core/declarations/types/trade";

export interface IGlobe3DProps {
    trades: TTrade[],
    focusLocation: TGeoLocation | undefined
    markerSize?: number
}

// export type TGlobeSpinData = {
//     phi: number,
//     theta: number
// }