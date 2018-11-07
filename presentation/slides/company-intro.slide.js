// Import React
import React from "react";
import UdigLogo from "../../assets/UDigLogo.svg";

// Import Spectacle Core tags
import {
  Slide,
  Image
} from "spectacle";

export default () => (
  <Slide transition={["fade"]} bgColor="quaternary">
    <Image src={UdigLogo} />
  </Slide>
);
