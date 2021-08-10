import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Carousel, Button } from "../../components";
import { useAuth } from "../../contexts";
import { onboardingData } from "../../_mock";
import * as S from "./OnboardingStyled";

export const Onboarding = () => {
  const { push } = useHistory();

  const { profileType } = useAuth();

  useEffect(() => {
    if (!profileType) {
      push("/");
    }
  }, []);

  return (
    <S.OnboardingContainer>
      <S.PositionClose>
        <S.Close src="/assets/svg/close.svg" alt="close" onClick={() => push("/login")} />
      </S.PositionClose>
      <Carousel
        showArrows={false}
        enableAutoPlay
        autoPlaySpeed={4000}
        pagination={onboardingData[profileType]?.length > 1}
      >
        {onboardingData[profileType]?.map((item, index) => {
          return (
            <S.OnboardingMainContent key={item.id}>
              <S.OnboardingImage src={item.image} alt="onboarding" />
              <S.ContentInfo>
                <S.OnboardingTitle>
                  {item.title}
                </S.OnboardingTitle>
                <S.OnboardingDescription>
                  {item.description}
                </S.OnboardingDescription>
              </S.ContentInfo>
              {onboardingData[profileType].length - 1 === index
              && (
                <S.PositionButton>
                  <Button onClick={() => push("/login")}>COMEÇAR</Button>
                </S.PositionButton>
              )}
            </S.OnboardingMainContent>
          );
        })}
      </Carousel>
    </S.OnboardingContainer>
  );
};
