import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  `;
export const Title = styled(Typography).attrs({
  variant: "h2",
  color: "#4E3681",
})`
  `;
export const Subtitle = styled(Typography).attrs({
  variant: "body1",
  color: "#4E3681",
})`
  `;

export const ImageCenter = styled.img`
  margin-top: 32px;
  margin-bottom: 43px;
  text-align: center;
  max-width: 203px;
  max-height: 203px;
`;

