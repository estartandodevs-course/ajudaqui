import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Button } from '../../components';
import { useAuth } from '../../contexts';
import { onboardingData } from '../../mocks';
import * as S from './OnboardingStyled';

export const Onboarding = () => {
  const navigation = useNavigate();
  const { profileType } = useAuth();

  useEffect(() => {
    if (!profileType) {
      navigation('/');
    }
  }, []);

  return (
    <S.OnboardingContainer>
      <S.PositionClose>
        <S.Close src="/assets/svg/close.svg" alt="close" onClick={() => navigation('/login')} />
      </S.PositionClose>
      <Carousel
        showArrows={false}
        enableAutoPlay
        autoPlaySpeed={4000}
        pagination={onboardingData[profileType]?.length > 1}
      >
        {onboardingData[profileType]?.map((item, index) => (
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
                  <Button onClick={() => navigation('/login')}>COMEÇAR</Button>
                </S.PositionButton>
              )}
          </S.OnboardingMainContent>
        ))}
      </Carousel>
    </S.OnboardingContainer>
  );
};
