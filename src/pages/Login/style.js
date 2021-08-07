import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "../../components";

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

export const LoginTitle = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const LoginDescription = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  z-index: 1;
`;

export const ContentBack = styled.div`
  width: 100%;
`;

export const Back = styled.img`
  display: flex;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ForgotPassword = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  width: 100%;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
 `;

export const DoRegister = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 38px;
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;

export const IconButton = styled.img`
 background: #FFF;
 border-radius: 3px;
 padding: 2px;
 margin-right: 10px;
 `;


