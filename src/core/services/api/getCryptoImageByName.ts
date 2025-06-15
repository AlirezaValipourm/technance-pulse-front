export const getCryptoImageByName = async (name: string) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
    const data = await response.json()
    return data.image.small
}
