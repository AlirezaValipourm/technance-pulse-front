"use client"
import { cn } from '@/components/uiKit/lib/utils';
import { TTrade } from "@/core/declarations/types/trade";
import { generateMockTrade } from "@/core/services/mock/tradeGenerator.mock";
import { AnimatePresence, motion } from "motion/react";
import { FC, useEffect, useState } from "react";
import { TradeItem } from "./TradeItem";
import { ITradeListProps } from "./TradeList.type";

export const TradeList: FC<ITradeListProps> = ({ onClick }) => {
    const [mockTrades, setMockTrades] = useState<TTrade[]>([]);

    useEffect(() => {
        const tradeGenerationInterval = setInterval(() => {
            const newTrade = generateMockTrade();
            console.log("newTrade", newTrade)
            setMockTrades((prev) => {
                if (prev.length >= 3) {
                    return [newTrade, ...prev.slice(0, 2)]
                } else {
                    return [newTrade, ...prev]
                }
            })
        }, 3000)

        return () => clearInterval(tradeGenerationInterval);
    }, [])

    return (
        <div className="flex flex-col gap-3 transition-all duration-300">
            <AnimatePresence mode="popLayout">
                {mockTrades.map((trade, index) => (
                    <motion.div
                        key={trade.id}
                        layout
                        initial={{
                            opacity: 0,
                            y: -20,
                            scale: 0.7
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.7
                        }}
                        className={cn("w-full")}
                    >
                        <TradeItem trade={trade} onClick={onClick} className={cn(
                            index === 0 ? "scale-x-[100%]" :
                                index === 1 ? "scale-x-[95%]" :
                                    "scale-x-[90%]"
                        )} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
