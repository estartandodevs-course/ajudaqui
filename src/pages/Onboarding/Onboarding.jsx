import { useHistory } from "react-router-dom";
import { Carousel, Button } from "../../components";
import { onboardingData } from "../../_mock";
import * as S from "./OnboardingStyled";

export const Onboarding = () => {
  const { push } = useHistory();
  return (
    <Carousel showArrows={false}>
      {onboardingData.map((items) => {
        return (
          <S.OnboardingContainer key={items.id}>
            <S.PositionClose>
              <S.Close src={items.close} alt="close" onClick={() => push("/")} />
            </S.PositionClose>
            <S.OnboardingImage src={items.image} alt="onboarding" />
            <S.ContentInfo>
              <S.OnboardingTitle>
                {items.title}
              </S.OnboardingTitle>
              <S.OnboardingDescription>
                {items.description}
              </S.OnboardingDescription>
            </S.ContentInfo>
            {items.showButton
            && (
            <S.PositionButton>
              <Button onClick={() => push("/")}>COMEÇAR</Button>
            </S.PositionButton>
            )}
          </S.OnboardingContainer>
        );
      })}
    </Carousel>
  );
};
