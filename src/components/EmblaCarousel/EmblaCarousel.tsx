import '@/core/styles/embla.css'
import { EmblaOptionsType } from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { IEmblaCarouselProps } from './EmblaCarousel.type'

export const EmblaCarousel: FC<IEmblaCarouselProps> = ({ slides, options, direction = "forward" }) => {

    // Default options that ensure smooth auto scroll
    const defaultOptions: EmblaOptionsType = {
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false,
        direction: "ltr",
        ...options
    }

    const [emblaRef] = useEmblaCarousel(defaultOptions, [
        AutoScroll({
            playOnInit: true,
            stopOnInteraction: false,
            startDelay: 100,
            speed: 0.7,
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
            direction: direction,
        })
    ])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}