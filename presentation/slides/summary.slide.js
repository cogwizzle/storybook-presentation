// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Slide,
  Heading,
  List,
  ListItem
} from "spectacle";

export default () => (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>What is Storybook?</Heading>
    <List textColor="quaternary">
      <ListItem>Visual Testing Tool</ListItem>
      <ListItem>UI Development Environment</ListItem>
      <ListItem>Living Style Documentation</ListItem>
      <ListItem>Deliverable Value</ListItem>
    </List>
  </Slide>
);
