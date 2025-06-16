/**
 * This function converts a geo location to angles
 * @param lat : Geo Latitude
 * @param long : Geo Longitude
 * @returns An array with coresponding angles
 */

export const locationToAngles = (lat:number, long:number):[number,number] => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
}