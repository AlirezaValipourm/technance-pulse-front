import { CryptoAssetsList } from "@/core/declarations/constants/CryptoAssetsList";
import { TradeType } from "@/core/declarations/enums/tradeType";
import { TTrade } from "@/core/declarations/types/trade";

export const generateMockTrade = (): TTrade => {
    const types = [TradeType.SHORT, TradeType.LONG];
    const randomCryptoAssetIndex = Math.floor(Math.random() * CryptoAssetsList.length)
    const cryptoAsset = CryptoAssetsList[randomCryptoAssetIndex]
    return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        amount: (Math.random() * 10).toFixed(3),
        asset: cryptoAsset.symbol,
        assetName: cryptoAsset.name,
        image: cryptoAsset.image,
        position: {
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
        },
        timestamp: Date.now(),
    };
};
