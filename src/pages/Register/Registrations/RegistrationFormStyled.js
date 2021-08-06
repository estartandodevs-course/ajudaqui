import styled from "styled-components";
import { Tabs } from "antd";
import { Typography } from "../../../components";

const { TabPane } = Tabs;

export const ContainerRegistrations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
`;

export const TitleRegistrations = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const DescriptionRegistrations = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const Back = styled.img`
  display: flex;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ContentBack = styled.div`
  width: 100%;
`;

export const TabsRegister = styled(Tabs)`
  .ant-tabs-tab{
    padding: 0;
    margin: 5px;
    color: ${(props) => props.theme.palette.colors.secondaryVariant}; 
  }
  
  .ant-tabs-nav::before {
    border: none;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    font-family: ${(props) => props.theme.typography.body1.fontFamily};
    color: ${(props) => props.theme.palette.colors.primary}
  } 
  
  .ant-tabs-ink-bar {
    border-bottom: 2px solid ${(props) => props.theme.palette.colors.purple};
  }
`;

export const TabsChoiced = styled(TabPane)``;
