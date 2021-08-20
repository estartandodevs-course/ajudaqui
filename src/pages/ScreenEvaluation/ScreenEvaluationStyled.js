import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerDesktop = styled.div``;
export const Aside = styled.div``;
export const AsideImage = styled.div``;


export const ContainerScreenEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 14px 24px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ContainerEvaluation = styled.div`
  display: flex;
  width: min-content;
  gap: 20px;
`;

export const TitleHelp = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primaryVariant};
`;

export const DescriptionPersonHelp = styled(Typography).attrs({
  variant: "body1",
})`
  font-weight: 700;
  max-width: 190px;
  text-align: center;
  margin: 0 auto;
`;

export const UserHelped = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 9999px;
  margin-bottom: 16px;
`;

export const ContentEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`;

export const NamePersonHelp = styled(Typography).attrs({
  variant: "body1",
})`
`;

export const PositionButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%auto;
`;
