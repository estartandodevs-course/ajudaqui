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
  margin-top: 30px;
  `;
export const Subtitle = styled(Typography).attrs({
  variant: "body1",
  color: "#4E3681",
})`
  `;

export const ImageCenter = styled.img`
  margin-top: 32px;
  text-align: center;
  max-width: 203px;
  max-height: 203px;
`;
export const ImageSubLogo = styled.img`
  margin-top: 10px;
  margin-bottom: 43px;
`;
