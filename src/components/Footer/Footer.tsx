import React from "react";

import "./footer.css"
type Content = {
    [key: string]: string[];
}
type SocialInfo = {
    [key: string]: string;

}

interface FooterProps {
    year: number,
    brandName: string,
    licence: string,
    urlLogo: string,
    altLogo: string,
    footerContents: ReadonlyArray<Content>,
    socialTitle: string,
    socialInfo: ReadonlyArray<SocialInfo>
}

const Footer: React.FC<FooterProps> = ({
    year,
    brandName,
    licence,
    urlLogo,
    altLogo,
    footerContents,
    socialTitle,
    socialInfo
}) => {



    return (
        <footer className="footer">
            <div className="footer__container">
                <img src={urlLogo} alt={altLogo} className="footer__logo" />
                {footerContents.map((content, indx) => {
                    const title: string = Object.keys(content)[0];
                    const items: string[] = content[title];

                    return (
                        <section key={indx} className="footer__content">
                            <h5 className="footer__content--title">{title}</h5>
                            {items.map((item, index) => <p key={index} className="footer__content--text">{item}</p>)}
                        </section>
                    )
                })}
                <section className="footer__content--social">
                    <h5 className="footer__content--title">{socialTitle}</h5>
                    <div className="footer__social--wrap">
                        {socialInfo.map((element, index) => {
                            return (
                                <a key={index} href={element.socialLink || ""} target="_blank">
                                    <img className="footer__social--icon" src={element.socialIcon || ""} alt={element.socialDescription || ""} />
                                </a>)
                        }
                        )}
                    </div>
                </section>
            </div>
            <section className="footer__footer">
                <p>&copy; {year} {brandName} | {licence} </p>
            </section>
        </footer>
    )
}

export default Footer;