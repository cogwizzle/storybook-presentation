import React from "react";
import Style from "../../../assets/style-guide.jpg";

// Import Spectacle Core tags
import {
  Slide,
  Image
} from "spectacle";

const styles = {
  image: {
    height: "70vh"
  }
};

export default () => (
  <Slide transition={["zoom"]} bgColor="black">
    <Image src={Style} style={styles.image}/>
  </Slide>
);
