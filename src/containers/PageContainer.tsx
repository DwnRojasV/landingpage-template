import React from "react";

import "./pageContainer.css"

interface PageContainerProps {
    prop:string
}

const PageContainer: React.FC<PageContainerProps> = () => {

    return(
        <div className="page__container">
        </div>
    )
}

export default PageContainer;