import styled from "styled-components";
import { Typography } from "..";


export const TagContainer = styled.div`
  max-width: 180px;
  min-width: 52.78px;
  border: ${(props) => `1px solid ${props.theme.palette.colors.primaryVariant}`};
  display: flex;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.colors.light.grayish};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    background: ${(props) => props.theme.palette.colors.secondaryVariant};
  }
`;

export const TagContent = styled(Typography).attrs({
  variant: "body1",
})`
  margin: 0;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;
