import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

export const TabBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  position: fixed;
  bottom: 0;
  border-top: 2px solid;
  border-image: ${(props) => `${props.theme.palette.colors.gradientBackground} 1`};
  `;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin: 8px 0;
  padding: 0 20px;
  cursor: pointer;
  `;

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  margin-top: -7px;
  background: ${(props) => (!props.$isActive ? "transparent" : props.theme.palette.colors.gradientBackground)};
  border-radius: 100%;
`;

export const ImageIcon = styled.img`
  margin-bottom: 4px;
  max-width: 26px;
  max-height: 26px;
`;

export const DescriptionIcon = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.primary,
})`
  font-size: ${(props) => props.theme.typography.body1?.fontSizeSubtitles};
`;

