import styled from 'styled-components';
import { Typography } from '../../components';

export const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

export const ContainerPageOne = styled.div`
  padding: 20px;
  @media (min-width: 1200px) {
    padding: 40px;
  }
`;

export const ContainerHelpCard = styled.div`
  width: 100%;
`;

export const ContainerCard = styled.div`
  margin: 32px 0 24px 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1999px) {
  justify-content: center ;
  gap: 40px;
    }
`;

export const NumberCard = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ContainerSwitch = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContentTextInterests = styled.div`
  margin-bottom: 12px;
`;

export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 43px;
   @media (min: 1200px) {
  gap: 6px;

  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  margin-bottom: 68px;

`;
export const ContainerImageElderly = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding-bottom: 24px;
  @media (min-width: 1200px){
    margin-top: 15px;
  }
`;

export const TextInterests = styled(Typography).attrs({
  variant: 'body1',
})`
  font-weight: bold;
  @media (min-width: 1200px) {
    color: #4e3681;
    font-weight: normal;
    text-align: center;
    font-size: 22px;
  }
`;

export const TextPeople = styled(Typography).attrs({
  variant: 'body1',
})`
  font-weight: bold;
`;

export const ContentTextPeople = styled.div`
  margin-bottom: 6px;
`;

export const ImageElderly = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  object-fit: cover;
  margin-bottom: 24px;
   @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContainerPageTwo = styled.div`
  width: 100%;
  background-color: #F9F7FB;
  display: flex;
  text-align: center;
  position: relative;
  /* height: 100%; */
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const ContainerAskForHelp = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 700px; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 14px 24px;

  @media (min-width: 1200px) {
    width: 500px;
    justify-content: center;
    text-align: center;
    margin: 0 64.5px 0 63px;
  }
`;

export const TextTitle = styled(Typography).attrs({
  variant: 'body1',
})`
  margin-bottom: 16px;
  @media (min-width: 1200px) {
    margin: 50px 0 30px 0;
    font-size: 24px;
    color: ${(props) => props.theme.palette.colors.primaryVariant};
    font-weight: 400;
  }
`;

export const Texts = styled(Typography).attrs({
  variant: 'body1',
})`
  margin-bottom: 16px;
  @media (min-width: 1200px) {
    margin-bottom: 30px;
    font-size: 18px;
    color: ${(props) => props.theme.shadow};
    font-weight: 400;
    text-align: -webkit-left;
  }
`;

export const ContentTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    margin-bottom: 35px;
    display: flex;
    justify-content: end;
  }
`;

export const PositionButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (min-width: 1200px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const TextSwitch = styled.p`

`;

export const ImageAside = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: inherit;
`;
