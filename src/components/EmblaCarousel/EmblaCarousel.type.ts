import { EmblaOptionsType } from "embla-carousel"

export interface IEmblaCarouselProps {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
    direction?: 'forward' | 'backward'
}