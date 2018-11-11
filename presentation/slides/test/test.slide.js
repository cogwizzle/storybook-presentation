import React from "react";
import Test from "../../../assets/testing.jpg";

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
  <Slide transition={["zoom"]} bgColor="primary">
    <Image src={Test} style={styles.image} />
  </Slide>
);
