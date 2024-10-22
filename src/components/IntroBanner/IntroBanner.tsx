import React from "react";

import "./introBanner.css";

interface IntroBannerProps {
    introBannerMessage:string,
    ctaButtonText: string,
    imgInfo: string[]
}

const IntroBanner: React.FC<IntroBannerProps> = ({
    introBannerMessage = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum atque provident ad laudantium blanditiis,",
    ctaButtonText= "CTA Text",
    imgInfo =["./elementor-placeholder-image.webp", "Placeholder image background"]
})=>{

    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__container--circle">
                    <h1 className="banner__container--title">
                        {introBannerMessage}
                    </h1>
                    <button className="banner__CTA-button">
                        {ctaButtonText}
                    </button>
                </div>
            </div>
            <img src={imgInfo[0]} alt={imgInfo[1]} className="banner__background" />
        </div>
    );
}

export default IntroBanner;