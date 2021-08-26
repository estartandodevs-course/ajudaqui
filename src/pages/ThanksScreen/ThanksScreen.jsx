import { useHistory } from "react-router-dom";
import { Layout, ThanksCompletedTask, Button } from "../../components";
import * as S from "./ThanksScreenStyled";

export const ThanksScreen = () => {
  const { push } = useHistory();
  return (
    <>
      <Layout hasTabBar>
        <ThanksCompletedTask />
        <S.PositionButton>
          <Button width="200px" onClick={() => push("/")}>
            Continue ajudando
          </Button>
        </S.PositionButton>
      </Layout>
    </>
  );
};
