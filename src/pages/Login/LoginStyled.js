import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, Button } from "../../components";

export const ContainerLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 24px 24px;
  @media (min-width: 576px) {
    align-items: center;
    justify-content: center;
    max-width: 400px;
  }
`;

export const LoginAside = styled.aside`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.theme.palette.colors.gradientBackground};
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin-bottom: 42px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 34px;
  @media(max-width: 1200){
    gap: 34px;
  }
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

export const ContainerForgot = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  margin-top: -15px;
`;
export const ForgotPassword = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 24px 0 32px 0;
`;

export const DoRegister = styled(Link)`
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  text-decoration: underline;
`;

export const IconButton = styled.img`
  background: #fff;
  border-radius: 3px;
  padding: 2px;
  margin-right: 10px;
`;

export const GoogleButton = styled(Button)`
  align-self: center;
  height: 31px;
`;

export const OnboardingImages = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ContainerOnboarding = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleOnboarding = styled(Typography).attrs({
  variant: "h2",
})`
  position: absolute;
  max-width: 75%;
  margin: 0 auto;
  color: ${(props) => props.theme.palette.colors.white};
  top: 60px;
`;
