import React from "react";
import IntroBanner from "../components/IntroBanner/IntroBanner";

import "./pageContainer.css"

interface PageContainerProps {
    prop:string
}

const PageContainer: React.FC<PageContainerProps> = () => {

    return(
        <div className="page__container">
            <IntroBanner />
        </div>
    )
}

export default PageContainer;