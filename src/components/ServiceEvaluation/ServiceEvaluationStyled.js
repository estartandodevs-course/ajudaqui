import styled from "styled-components";
import { Typography } from "../Typography";

export const ContainerEvaluation = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const ContentEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const IconsEvaluation = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

export const DescriptionEvaluation = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.secondary};
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
`;