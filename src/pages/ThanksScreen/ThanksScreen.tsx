import { useNavigate } from 'react-router-dom';
import { Layout, ThanksCompletedTask, Button } from '../../components';
import * as S from './ThanksScreenStyled';

export const ThanksScreen = () => {
  const navigation = useNavigate();
  return (
    <>
      <Layout hasTabBar>
        <ThanksCompletedTask />
        <S.PositionButton>
          <Button width="200px" onClick={() => navigation('/')}>
            Continue ajudando
          </Button>
        </S.PositionButton>
      </Layout>
    </>
  );
};
