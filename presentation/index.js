// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck
} from "spectacle";

import Title from "./slides/title.slide";
import Intro from "./slides/intro.slide";
import Company from "./slides/company-intro.slide";
import Summary from "./slides/summary/summary.slide";
import Test from "./slides/test/test.slide";
import Development from "./slides/development/development.slide";
import Style from "./slides/style/style.slide";
import Delivery from "./slides/delivery/delivery.slide";
import Questions from "./slides/questions/question.slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#FF8C00",
  secondary: "#183842",
  tertiary: "#7c7c7c",
  quaternary: "white"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={1000} theme={theme}>
        <Title />
        <Intro />
        <Company />
        <Summary />
        <Test />
        <Development />
        <Style />
        <Delivery />
        <Questions />
      </Deck>
    );
  }
}
