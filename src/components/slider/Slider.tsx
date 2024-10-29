import React, { useRef } from "react";

import "./slider.css"

type sliderImage = {
    [key: string]: string
}
interface SliderProps {
    idSlider: string
    title?: string
    sliderImages?: sliderImage[]
}
const renderImages = (images: sliderImage[]) => {
    return images?.map((image, index) => {
        return (
            <img
                key={index}
                id={`slider-img-${index}`}
                src={image.src}
                alt={image.alt}
                className="slider__container--img" />
        )
    }
    )
}

const Slider: React.FC<SliderProps> = ({
    idSlider,
    title,
    sliderImages
}) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const firstImage = document.getElementById(`slider-img-0`);
    const imageWidth = firstImage ? firstImage.scrollWidth : 200;
    const xScroll = imageWidth;

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -xScroll,
                behavior: "smooth"
            })
        }
    }
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: xScroll,
                behavior: "smooth"
            })
        }
    }


    return (
        <section id={idSlider} className="slider section" >
            {title ? <h2 className="slider__title">{title}</h2> : undefined}
            <div id="containerImages" className="slider__container" ref={sliderRef}>
                {sliderImages ? renderImages(sliderImages) : undefined}
            </div>
            <button className="slider__button" onClick={scrollLeft}>&lt;</button>
            <button className="slider__button" onClick={scrollRight}>&gt;</button>
        </section>
    )

}

export default Slider;