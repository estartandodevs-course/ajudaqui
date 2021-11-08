import styled from 'styled-components';
import { theme } from '../../../styles/themes';
import { Typography } from '../../Typography';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  height: 358px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.colors.white};
  margin-bottom: 20px;

  @media(min-width: 1200px){
    position: absolute;
    left:0;
    margin-left: 121px;
  }
`;
export const Close = styled.img`
  width: 12.01px;
  height: 12.01px;
  margin: 16px 16px 0 auto;
  filter: brightness(0%);
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: theme.palette.colors.primary,
})`
  font-size: ${(props) => props.theme.typography.h2?.fontSize};
  margin-top: 13px;
`;

export const LogoImage = styled.img`
  width: 117px;
  height: 117px;
  margin-top: 24px;
`;

export const Description = styled(Typography).attrs({
  variant: 'body1',
})`
  font-size: ${(props) => props.theme.typography.h2?.fontSizeText};
  width: 242px;
  margin-top: 24px;
`;

export const ArrowDown = styled.img`
  margin-right: 16px;
  align-self: flex-end;

  @media(min-width: 1200px){
    margin: 24px 0 0 32px;
    align-self: flex-start;
    transform: rotate(90deg);
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.palette.colors.emergency};
  font-weight: 700;
`;
