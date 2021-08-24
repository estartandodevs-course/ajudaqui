import { Tabs } from "antd";
import styled from "styled-components";
import { Typography } from "../../components";

const { TabPane } = Tabs;

export const ContainerDesktop = styled.div`
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

export const Aside = styled.div`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};

@media (max-width: 1199px) {
    display: none;
  }
`;

export const AsideImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;

  @media (min-width: 1199px) {
    width: 450px;
  }
`;

export const ContainerProfilePhoto = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 15px;

`;

export const ImgProfile = styled.img`
  width: 75px;
  height: 75px;
  border: 2px solid #5e38a8;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfilePhotoText = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  margin: 0;
  font-weight: 700;
`;

export const UserInformationTitle = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primary};
  margin-bottom: 20px;
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
    font-family: ${(props) => props.theme.typography.body1.fontFamily};
    color: ${(props) => props.theme.palette.colors.primary}
  }

  .ant-tabs-ink-bar {
    border-bottom: 2px solid ${(props) => props.theme.palette.colors.purple};
  }
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const TabsChoiced = styled(TabPane)`
`;
