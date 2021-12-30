import styled from 'styled-components';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { Typography } from '../../components';

const { TabPane } = Tabs;

export const ContainerPageDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-bottom: 25px;

  @media(max-width: 1199px) {
    display: none;
  }
`;

export const ImageLogo = styled.img`
  width: 52px;
  height: 52px;
`;
export const AsideImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ImageText = styled.img`
  width: 155px;
  height: 40px;
`;

export const SelectAside = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media(max-width: 1199px) {
    display: none;
  }
`;
export const TitleOnboarding = styled(Typography).attrs({
  variant: 'h2',
})`
  position: absolute;
  max-width: 75%;
  margin: 0 auto;
  color: ${({ theme }) => theme.palette.colors.white};
  top: 40px;
`;

export const ContainerRegistrations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  z-index: 1;

  @media(min-width: 576px) {
    max-width: 400px;
  }
  @media(min-width: 1200px){
  justify-content: center;
  align-items: center;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 22px;

  @media(min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HasRegister = styled(Link)`
  color: ${({ theme }) => theme.palette.colors.light.gray};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSizeText};
  text-decoration: underline;

  @media(max-width: 1199px) {
    display: none;
  }
`;

export const TitleRegistrations = styled(Typography).attrs({
  variant: 'h2',
})`
  color: ${({ theme }) => theme.palette.colors.primary};
`;

export const DescriptionRegistrations = styled(Typography).attrs({
  variant: 'body1',
})`
  font-size: ${({ theme }) => theme.typography.body1.fontSizeSubtitles};
  color: ${({ theme }) => theme.palette.colors.primary};
`;

export const TabsRegister = styled(Tabs)`
  .ant-tabs-tab {
    padding: 0;
    margin: 5px;
    color: ${(props) => props.theme.palette.colors.secondaryVariant};
  }

  .ant-tabs-nav::before {
    border: none;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-family: ${({ theme }) => theme.typography.body1.fontFamily};
    color: ${({ theme }) => theme.palette.colors.primary}
  }

  .ant-tabs-ink-bar {
    border-bottom: 2px solid ${({ theme }) => theme.palette.colors.purple};
  }
  width: 100%;
`;

export const TabsChoiced = styled(TabPane)`
  text-decoration: none;
`;
