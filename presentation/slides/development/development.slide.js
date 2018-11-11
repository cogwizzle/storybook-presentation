import React from "react";
import Development from "../../../assets/development.jpg";

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
    <Image src={Development} style={styles.image}/>
  </Slide>
);
