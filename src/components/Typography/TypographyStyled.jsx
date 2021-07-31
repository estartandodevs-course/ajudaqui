import styled from "styled-components";

export const Typography = styled.h1`
  font-family: ${({ font }) => font || "Open Sans"};

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "title":
        return "28px";
      case "subheading":
        return "22px";
      case "text":
        return "16px";
      case "button" || "link":
        return "14px";
      case "subtitle":
        return "12px";
      default:
        "text";
    }
  }};

  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "bold":
        return 700;
      default:
        "regular";
    }
  }};

  color: ${({ fontColor }) => {
    switch (fontColor) {
      case "standard":
        return "#0C011B";
      case "dark-gray":
        return "#2C2834";
      case "light-gray":
        return "#47454F";
      case "white":
        return "#FFf";
      default:
        "standard";
    }
  }};
`;
