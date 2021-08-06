import { Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

export const TabsRegister = styled(Tabs)`
  .ant-tabs-tab{
    padding: 0;
    margin: 5px;
    color: ${(props) => props.theme.palette.colors.secondaryVariant}; 
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
