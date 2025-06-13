import { TradeType } from "@/core/declarations/enums/tradeType";
import { TTrade } from "@/core/declarations/types/trade";

export const generateMockTrade = (): TTrade => {
    const assets = ['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'LINK'];
    const types = [TradeType.SHORT, TradeType.LONG];

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        amount: (Math.random() * 10).toFixed(3),
        asset: assets[Math.floor(Math.random() * assets.length)],
        position: {
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
        },
        timestamp: Date.now(),
    };
};
