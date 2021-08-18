import React from "react";
import { SplashScreen } from "../../components";
import { useAuth } from "../../contexts";
import { PROFILES_TYPES } from "../../utils/constants";
import { HomeScreenOfTheElderly } from "./HomeScreenOfTheElderly/HomeScreenOfTheElderly";
import { HomeScreenOfTheVoluntary } from "./HomeScreenOfTheVoluntary";

export const Home = () => {
  const { profileType, isAuthenticated } = useAuth();
  const homeScreenByProfile = {
    [PROFILES_TYPES.ELDERLY]: () => <HomeScreenOfTheElderly />,
    [PROFILES_TYPES.VOLUNTARY]: () => <HomeScreenOfTheVoluntary horas={30} atividades={10} />,
  };

  return (
    <>
      {(profileType && isAuthenticated) ? homeScreenByProfile[profileType]() : <SplashScreen />}
    </>
  );
};
