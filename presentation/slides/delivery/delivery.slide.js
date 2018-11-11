import React from "react";
//import Delivery from "../../../assets/delivery.jpg";

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
    <Image src="{Delivery}" style={styles.image} />
  </Slide>
);
