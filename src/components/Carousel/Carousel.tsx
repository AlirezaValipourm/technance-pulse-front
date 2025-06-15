import { FC } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ICarouselProps } from "./Carousel.type";

export const Carousel: FC<ICarouselProps> = ({ slides, settings }) => {

    const settingsWithDefaults: Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        // cssEase: "",
        cssEase: "linear",
        easing: "linear",
        useCSS: true,
        waitForAnimate: false,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        initialSlide: 0,
        // adaptiveHeight: false,
        slidesToShow: 5.5,
        // lazyLoad: "progressive",
        // slidesToScroll: 1,
        // variableWidth: false,
        ...settings
    }

    return (
        <div className="slider-container">
            <Slider
                //  ref={sliderRef}
                {...settingsWithDefaults}
            >
                {/* {slides} */}
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
}