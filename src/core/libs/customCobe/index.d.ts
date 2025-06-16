import type Phenomenon from "phenomenon";

export interface Marker {
  location: [number, number];
  size: number;
  color?: [number, number, number];
}

export interface Layer3D {
  type: "3d";
  src: string;
  scale?: number;
  opacity?: number;
}

export interface Layer2D {
  type: "2d";
  src: string;
  scale?: number;
  opacity?: number;
  position?: number; // Z-order position, default 0
}

export interface COBEOptions {
  width: number;
  height: number;
  onRender: (state: Record<string, number | string>) => void;
  phi: number;
  theta: number;
  mapSamples: number;
  mapBrightness: number;
  mapBaseBrightness?: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers: Marker[];
  diffuse: number;
  devicePixelRatio: number;
  dark: number;
  opacity?: number;
  offset?: [number, number];
  scale?: number;
  context?: WebGLContextAttributes;
  mask?: {
    start?: number;
    end?: number;
    power?: number;
  };
  layers?: (Layer3D | Layer2D)[];
}

export default function createGlobe(
  canvas: HTMLCanvasElement,
  opts: COBEOptions
): Phenomenon;
