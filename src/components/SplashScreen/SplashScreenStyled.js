import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  `;
export const Title = styled(Typography).attrs({
  variant: "h2",
  weight: 400,
  color: "#4E3681",
})`

  `;
export const Subtitle = styled(Typography).attrs({
  variant: "body1",
  weight: 400,
  color: "#4E3681",
})`

    `;
export const ImageTop = styled.img`
  position: static;
  max-width: 100%;
  top: 0;
`;

export const ImageCenter = styled.img`
  margin: 32px 0;
  text-align: center;
  max-width: 203px;
  max-height: 203px;
`;
export const ImageSubLogo = styled.img`
  margin-bottom: 43px;
`;

export const ImageBottom = styled.img`
  position: static;
  max-width: 100%;
  bottom: 0;
  left: 0px;
`;
