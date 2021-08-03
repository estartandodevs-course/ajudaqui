import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

export const TabBar = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  border-top: 2px solid;
  border-image: ${(props) => props.theme.palette.colors.gradientBackground};
  `;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px 0;
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

