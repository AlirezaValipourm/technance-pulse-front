import { Typography } from "@/components/Typography/Typography"
import { cn } from "@/components/uiKit/lib/utils"
import { TradeType } from "@/core/declarations/enums/tradeType"
import { TrendingDown, TrendingUp } from "lucide-react"
import Image from "next/image"
import { ITradeItemProps } from "./TradeItem.type"

export const TradeItem: React.FC<ITradeItemProps> = ({ trade, onClick , className }) => {
    return (
        <div className={cn('flex gap-2 items-center cursor-pointer py-1.5 transition-all duration-300 bg-white text-foreground rounded-2xl px-3', className)} onClick={() => onClick(trade)}>
            <Image src={trade.image ?? ""} alt={trade.asset} width={18} height={18} />
            <div className="flex gap-1 items-center">
                <Typography variant="body-small" className="font-semibold">{trade.amount}</Typography>
                <Typography variant="body-small" className="font-semibold">{trade.asset}</Typography>
            </div>
            <div className="flex items-center gap-1">
                <Typography variant="tiny" className={cn("font-semibold", trade.type === TradeType.LONG ? "text-trade-success" : "text-trade-failure")}>{trade.type === TradeType.LONG ? "LONG TRADE" : "SHORT TRADE"}</Typography>
                {trade.type === TradeType.LONG ? (
                    <TrendingUp size={16} className='text-trade-success' />
                ) : (
                    <TrendingDown size={16} className='text-trade-failure' />
                )}

            </div>
        </div>
    )
}
