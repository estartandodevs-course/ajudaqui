import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

export const TabBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  position: relative;
  border-top: 2px solid;
  border-image: ${(props) => `${props.theme.palette.colors.gradientBackground} 1`};
  align-self: flex-end;
  height: 64px;
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 8px 0;
  padding: 0 10px;
  cursor: pointer;
`;

export const Ball = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: -7px;
  left:${(props) => `
    calc(
      calc(
        calc(
          calc(100% / 4) / 2
        ) * ${props.$dotPosition}
      ) - 5px
    );
  `};
  background: ${(props) => props.theme.palette.colors.gradientBackground};
  border-radius: 100%;
  transition: .2s ease-in-out;
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

