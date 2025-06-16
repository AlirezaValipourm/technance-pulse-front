import { TGeoLocation } from '../geoLocation'

// Type test functions
const createValidLocation = (lat: number, lng: number): TGeoLocation => ({ lat, lng })

describe('TGeoLocation Type', () => {
  it('accepts valid latitude and longitude values', () => {
    const location: TGeoLocation = createValidLocation(40.7128, -74.0060)
    expect(location.lat).toBe(40.7128)
    expect(location.lng).toBe(-74.0060)
  })

  it('handles extreme coordinate values', () => {
    // North pole
    const northPole: TGeoLocation = createValidLocation(90, 0)
    expect(northPole.lat).toBe(90)
    expect(northPole.lng).toBe(0)

    // South pole  
    const southPole: TGeoLocation = createValidLocation(-90, 0)
    expect(southPole.lat).toBe(-90)
    expect(southPole.lng).toBe(0)

    // International date line
    const dateLine: TGeoLocation = createValidLocation(0, 180)
    expect(dateLine.lat).toBe(0)
    expect(dateLine.lng).toBe(180)

    // Prime meridian
    const primeMeridian: TGeoLocation = createValidLocation(0, 0)
    expect(primeMeridian.lat).toBe(0)
    expect(primeMeridian.lng).toBe(0)
  })

  it('handles negative longitude values', () => {
    // Western hemisphere coordinates
    const newYork: TGeoLocation = createValidLocation(40.7128, -74.0060)
    const losAngeles: TGeoLocation = createValidLocation(34.0522, -118.2437)
    
    expect(newYork.lng).toBeLessThan(0)
    expect(losAngeles.lng).toBeLessThan(0)
  })

  it('handles positive longitude values', () => {
    // Eastern hemisphere coordinates
    const london: TGeoLocation = createValidLocation(51.5074, -0.1278)
    const tokyo: TGeoLocation = createValidLocation(35.6762, 139.6503)
    
    expect(tokyo.lng).toBeGreaterThan(0)
  })

  it('works with decimal coordinates', () => {
    const preciseLocation: TGeoLocation = createValidLocation(40.712776, -74.005974)
    expect(preciseLocation.lat).toBe(40.712776)
    expect(preciseLocation.lng).toBe(-74.005974)
  })

  it('can be used in arrays', () => {
    const locations: TGeoLocation[] = [
      createValidLocation(40.7128, -74.0060), // New York
      createValidLocation(51.5074, -0.1278),  // London
      createValidLocation(35.6762, 139.6503), // Tokyo
    ]
    
    expect(locations).toHaveLength(3)
    expect(locations[0].lat).toBe(40.7128)
    expect(locations[1].lng).toBe(-0.1278)
    expect(locations[2].lat).toBe(35.6762)
  })

  it('supports object destructuring', () => {
    const location: TGeoLocation = createValidLocation(48.8566, 2.3522) // Paris
    const { lat, lng } = location
    
    expect(lat).toBe(48.8566)
    expect(lng).toBe(2.3522)
  })

  it('can be used in function parameters', () => {
    const calculateDistance = (point1: TGeoLocation, point2: TGeoLocation): number => {
      // Simple distance calculation for testing
      const latDiff = point2.lat - point1.lat
      const lngDiff = point2.lng - point1.lng
      return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff)
    }

    const newYork: TGeoLocation = createValidLocation(40.7128, -74.0060)
    const london: TGeoLocation = createValidLocation(51.5074, -0.1278)
    
    const distance = calculateDistance(newYork, london)
    expect(distance).toBeGreaterThan(0)
    expect(typeof distance).toBe('number')
  })
}) 