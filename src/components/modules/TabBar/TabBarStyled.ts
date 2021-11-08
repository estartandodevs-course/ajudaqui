import styled from 'styled-components';
import { theme } from '../../styles/themes';
import { Typography } from '..';

export const Wrapper = styled.div`
  width: 100%;
  @media(min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95px;
    height: 100vh;
    background-image: ${(props) => props.theme.palette.colors.gradientBackground};
    border: none;
    position: fixed;
    left: 0;
  }
`;

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

  @media (min-width: 1200px) {
    width: 95px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    align-items: center;
    margin-left: 10px;
    border: none;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 8px 0;
  cursor: pointer;

  @media (min-width: 1200px) {
    align-items: flex-start;
    width: 80px;
    height: 65px;
    margin-left: auto;
    border: none;
    border-top-left-radius: 48%;
    border-bottom-left-radius: 48%;
    background-color: ${(props) => (props.$containerPosition
    ? theme.palette.colors.white
    : `${props} => ${props.theme.palette.colors.gradientBackground}`)};
  }
`;

export const Ball = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: -7px;
  left: ${(props) => `
    calc(
      calc(
        calc(
          calc(100% / 4) / 2
        ) * ${props.$dotPosition}
      ) - 6px
    );
  `};
  background: ${(props) => props.theme.palette.colors.gradientBackground};
  border-radius: 100%;
  transition: 0.6s ease-in-out;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ImageIcon = styled.img`
  margin-bottom: 4px;
  max-width: 26px;
  max-height: 26px;

  @media (min-width: 1200px) {
    margin-left: 15px;
    filter: ${(props) => (props.$containerPosition
    ? `${props} => ${props.theme.palette.colors.gradientBackground} 1`
    : 'brightness(100)')};
  }
`;

export const DescriptionIcon = styled(Typography).attrs({
  variant: 'body1',
  color: theme.palette.colors.primary,
})`
  font-size: ${(props) => props.theme.typography.body1?.fontSizeSubtitles};

  @media (min-width: 1200px) {
    display: none;
  }
`;
