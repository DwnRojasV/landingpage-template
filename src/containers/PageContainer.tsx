import React from "react";
import IntroBanner from "../components/IntroBanner/IntroBanner";

import "./pageContainer.css"

interface PageContainerProps {
    sections: string[]
}

const PageContainer: React.FC<PageContainerProps> = ({
    sections
}) => {
    const idBanner: string = sections[0];
    return(
        <div className="page__container">
            <IntroBanner idBanner={idBanner} />
        </div>
    )
}

export default PageContainer;