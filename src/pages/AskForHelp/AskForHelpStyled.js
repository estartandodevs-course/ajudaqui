import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerAskForHelp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 24px;
  z-index: 1;
`;

export const Text = styled(Typography).attrs({
  variant: "body1",
})`
  margin-bottom: 16px;
`;


export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const PositionButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
