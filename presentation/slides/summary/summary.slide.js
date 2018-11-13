// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Slide,
  Heading,
  div
} from "spectacle";

const styles = {
  pictureWrapper: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridGap: "1rem",
    width: "80%",
    height: "70vh",
    margin: "auto",
    color: "white"
  },
  test: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: "100%"
  },
  dev: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: "100%"
  },
  style: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: "100%"
  },
  delivery: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    color: "black",
    height: "100%"
  }
};

export default () => (
  <Slide transition={["fade"]} bgColor="quaternary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>What is Storybook?</Heading>
    <div className="picture-wrapper">
      <div style={styles.test}>
        Testing and Debugging
      </div>
      <div style={styles.dev}>
        Development Platform
      </div>
      <div style={styles.style}>
        Style Guide
      </div>
      <div style={styles.delivery}>
        Deliverable
      </div>
    </div>
  </Slide>
);
