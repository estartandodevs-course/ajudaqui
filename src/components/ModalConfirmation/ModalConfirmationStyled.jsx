import { Typography } from 'antd';
import styled from 'styled-components';

export const ContainerCard = styled.div`
position: relative;
width: 100%;
height: 115px
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 97px;
  border-radius: 5px;
  background: ${(props) => props.backgroundCard || 'linear-gradient(177.49deg, #FFFFFF -16.26%, #FFC1BF 122.47%)'};
`;

export const PositionButton = styled.div`
position: absolute;
bottom:0;
`;

export const Text = styled(Typography).attrs({
  variant: 'body1',
})`
color: ${(props) => props.textColor};
`;
