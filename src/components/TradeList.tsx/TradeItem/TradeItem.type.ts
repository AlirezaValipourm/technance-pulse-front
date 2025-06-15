import { TTrade } from "@/core/declarations/types/trade";

export interface ITradeItemProps {
    trade: TTrade,
    onClick: (trade: TTrade) => void
    className?: string
}