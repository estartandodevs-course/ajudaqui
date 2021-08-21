import { Layout, ThanksCompletedTask, Button } from "../../components";
import * as S from "./ThanksScreenStyled";

export const ThanksScreen = () => {
  return (
    <>
      <Layout hasTabBar>
        <ThanksCompletedTask />
        <S.PositionButton>
          <Button width="200px">
            Continue ajudando
          </Button>
        </S.PositionButton>
      </Layout>
    </>
  );
};
