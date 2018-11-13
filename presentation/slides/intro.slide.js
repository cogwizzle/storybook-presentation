// Import React
import React from "react";
import ProfilePicture from "../../assets/joe-beard.jpg";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image
} from "spectacle";

export default () => (
  <Slide transition={["fade"]} bgColor="quaternary">
    <Heading size={5} caps lineHeight={1} textColor="secondary">
      Hi I'm Joe!
    </Heading>
    <Image src={ProfilePicture} />
  </Slide>
);
