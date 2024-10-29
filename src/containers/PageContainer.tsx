import React from "react";
import IntroBanner from "../components/IntroBanner/IntroBanner";

import "./pageContainer.css"
import Slider from "../components/slider/Slider";

interface PageContainerProps {
    sections: string[]
}

const sliderProps = {
    images: [
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        },
        {
            src: "./elementor-placeholder-image.webp",
            alt: "Placeholder to image"
        }
    ]
}

const PageContainer: React.FC<PageContainerProps> = ({
    sections
}) => {
    const idBanner: string = sections[0];
    const idSlider: string = sections[1];

    return (
        <div className="page__container">
            <IntroBanner idBanner={idBanner} />
            <Slider
                idSlider={idSlider}
                title={idSlider}
                sliderImages={sliderProps.images}
            />
        </div>
    )
}

export default PageContainer;