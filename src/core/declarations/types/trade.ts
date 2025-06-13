import { TradeType } from "@/core/declarations/enums/tradeType";

export type TTrade = {
    id: string;
    type: TradeType;
    amount: string;
    asset: string;
    position: { lat: number; lng: number };
    timestamp: number;
}