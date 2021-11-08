import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout, SpinnerTime, Button } from '../../components';
import { useStore } from '../../contexts';
import { useScreen } from '../../utils/hooks/useScreen';
import * as S from './ActivityProgressStyled';

export const ActivityProgress = () => {
  const [start, setStart] = useState(false);
  const navigation = useNavigate();
  const [widthScreen] = useScreen();
  const showNavigation = widthScreen < 1200;

  const { helpRequestId } = useParams();
  const { handleStartAttendance, handleEndAttendance } = useStore();

  const handleCompleteTask = async () => {
    const verify = !start ? 'Iniciar' : 'Concluir';
    const isCompleted = verify === 'Concluir';

    if (isCompleted) {
      await handleEndAttendance(helpRequestId);
      return navigation(`/screen-evaluation/${helpRequestId}`);
    }
    await handleStartAttendance(helpRequestId);
    return verify;
  };

  return (
    <Layout
      hasTabBar
      showNavigation={showNavigation}
    >
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.ContainerText>
            <S.Title>
              {!start
                ? 'Iniciar'
                : 'Atividade em andamento'}
            </S.Title>
            <S.Subtitle>
              {!start
                ? 'Você chegou ao local. Iniciar atividade?'
                : 'A atividade que você está realizando leva em média 20 minutos...'}
            </S.Subtitle>
          </S.ContainerText>
          <SpinnerTime
            start={start}
            setStart={setStart}
          />
          <S.Paragraph>
            Nos informe quando a atividade for concluída
          </S.Paragraph>
          <Button
            onClick={() => {
              setStart(!start);
              handleCompleteTask();
            }}
          >
            {!start
              ? 'Iniciar'
              : 'Concluir'}
          </Button>
        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside
            src="/assets/svg/arte voluntario.svg"
            alt="Voluntário"
          />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
