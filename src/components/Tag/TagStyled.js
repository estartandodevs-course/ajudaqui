import styled from "styled-components";
import { Typography } from "..";

export const TagContainer = styled.div`
  width: 300px;
  border: ${(props) => `2px solid ${props.theme.palette.colors.border}`};
  display: flex;
  background: ${(props) => props.theme.palette.colors.light.grayish};
  align-items: center;
  justify-content: center;
`;

export const TagContent = styled(Typography).attrs({
  variant: "body1",
})`  
  color: ${(props) => props.theme.palette.colors.primaryVariant};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;
