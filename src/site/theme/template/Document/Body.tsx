import React, { FC } from "react";

const Body: FC<BodyProps> = ({ htmlContent }) => (
  <body>
    <main id="root" dangerouslySetInnerHTML={{__html: htmlContent}}></main>
  </body>
);

interface BodyProps {
  htmlContent: string;
}

export default Body;
