import styled from 'styled-components';
import { theme } from '../../../styles';
import { Typography } from '../../elements/Typography';

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 14px 24px;

  @media(min-width: 1200px){
    max-width: 400px;
    margin: 0 auto;
  }

`;

/* const variants = {
  default: css`
    border: 1px solid ${(props) => `${props.theme.palette.colors.purple} `};
  `,

  emergency: css`
    border: 1px solid ${(props) => `${props.theme.palette.colors.emergency} `};
  `,

  aguardando: css`
    border: 1px solid ${(props) => `${props.theme.palette.colors.primary} `};
    `,

  primaryVariant: css`
    border: 1px solid
    ${(props) => `${props.theme.palette.colors.primaryVariant} `};
  `,
}; */

export const Card = styled.div`
  width: 100%;
  height: 175px;
  border-radius: 5px 5px 9px 9px;
`;

// const backgrounds = {
//   default: css`
//     background-color: ${(props) => `${props.theme.palette.colors.secondaryVariant} `};
//     border-top-color: ${(props) => `${props.theme.palette.colors.purple} `};
//   `,

//   emergency: css`
//     background-color: ${(props) => `${props.theme.palette.colors.emergency} `};
//     border-top-color: ${(props) => `${props.theme.palette.colors.emergency} `};
//   `,

//   aguardando: css`
//     background-image: ${(props) => `${props.theme.palette.colors.gradientBackground} `};
//     border-top-color: ${(props) => `${props.theme.palette.colors.gradientBackground} `};
//   `,

//   primaryVariant: css`
//     background-color: ${(props) => `${props.theme.palette.colors.primaryVariant} `};
//     border-top-color: ${(props) => `${props.theme.palette.colors.primaryVariant} `};
//   `,
// };

export const UserAction = styled.div`
  width: 100%;
  height: 24%;
  border-top: 1px solid;
  cursor: pointer;
  border-radius: 0 0 9px 9px;

`;

export const ActionDescription = styled(Typography).attrs({
  variant: 'body1',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.color || props.theme.palette.colors.white};
`;

export const UserInfos = styled.div`
  padding: 15px 10px;
  display: flex;
  width: 100%;
  height: 76%;
`;

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
  flex: 2;
`;

export const NameTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DistanceTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserName = styled(Typography).attrs({
  variant: 'body1',
})`
  font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
  font-weight: 700;
`;

export const RequestedTask = styled(Typography).attrs({
  variant: 'body1',
})`
  font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
  color: ${(props) => props.theme.palette.colors.light.gray};
`;

export const Distance = styled(Typography).attrs({
  variante: 'body1',
})`
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${(props) => props.theme.typography.body1?.fontSizeSubtitles};
`;

export const TaskTime = styled(Typography).attrs({
  variant: 'body1',
  color: theme.palette.colors.light.gray,
})`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.typography.body1?.fontSizeSubtitles};
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: none;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 100%;
  object-fit: cover;
`;
