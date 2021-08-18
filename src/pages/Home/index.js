import React from "react";
import { SplashScreen } from "../../components";
import { useAuth } from "../../contexts";
import { PROFILES_TYPES } from "../../utils/constants";
import { HomeScreenOfTheElderly } from "./HomeScreenOfTheElderly/HomeScreenOfTheElderly";
import { HomeScreenOfTheVoluntary } from "./HomeScreenOfTheVoluntary/HomeScreenOfTheVoluntary";

export const Home = () => {
  const { profileType } = useAuth();
  const homeScreenByProfile = {
    [PROFILES_TYPES.ELDERLY]: () => <HomeScreenOfTheElderly />,
    [PROFILES_TYPES.VOLUNTARY]: () => <HomeScreenOfTheVoluntary />,
  };

  return (
    <>
      {profileType && homeScreenByProfile[profileType]()}
      {!profileType && <SplashScreen />}
    </>
  );
};
