import React from 'react';
import { SplashScreen, Layout } from '../../components';
import { useAuth } from '../../contexts';
import { PROFILES_TYPES } from '../../utils/constants';
import { useWidthScreen } from '../../utils/hooks/useWidthScreen';
import { HomeScreenOfTheElderly } from './HomeScreenOfTheElderly/HomeScreenOfTheElderly';
import { HomeScreenOfTheVoluntary } from './HomeScreenOfTheVoluntary';

export const Home = () => {
  const { profileType, isAuthenticated } = useAuth();
  const [widthScreen] = useWidthScreen();
  const showNavigation = widthScreen < 1200;
  const homeScreenByProfile = {
    [PROFILES_TYPES.ELDERLY]: () => <HomeScreenOfTheElderly />,
    [PROFILES_TYPES.VOLUNTARY]: () => (
      <HomeScreenOfTheVoluntary />
    ),
  };

  return (
    <>
      {profileType && isAuthenticated ? (
        homeScreenByProfile[profileType]()
      ) : (
        <Layout showNavigation={showNavigation} hasArrow={false}>
          <SplashScreen />
        </Layout>
      )}
    </>
  );
};
