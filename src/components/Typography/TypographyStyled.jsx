import styled from "styled-components";

const h1 = styled.h1`
  font-size: ${(props) => props.theme.typography.h1?.fontSize};
  color: ${(props) => props.color || props.theme.palette.colors.text};
  font-weight: ${(props) => {
    return props.weight || `${props.theme.typography.h1?.fontWeight}`;
  }};
  font-family: ${(props) => props.theme.typography.h1?.fontFamily};
  `;

const h2 = styled.h2`
  font-size: ${(props) => props.theme.typography.h2?.fontSize};
  color: ${(props) => props.color || props.theme.palette.colors.text};
  font-weight: ${(props) => {
    return props.weight || `${props.theme.typography.h2?.fontWeight}`;
  }};
  font-family: ${(props) => props.theme.typography.h2?.fontFamily};
  `;

const body1 = styled.p`
  font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
  color: ${(props) => props.color || props.theme.palette.colors.text};
  font-weight: ${(props) => {
    return props.weight || `${props.theme.typography.body1?.fontWeight}`;
  }};
  font-family: ${(props) => `${props.theme.typography.body1?.fontFamily}`};
`;

const Typographies = {
  h1,
  h2,
  body1,
};

export { Typographies };
