import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, SpinnerTime, Button } from "../../components";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import * as S from "./ActivityProgressStyled";

export const ActivityProgress = () => {
  const [start, setStart] = useState(false);
  const { push } = useHistory();
  const [widthScreen] = useWidthScreen();
  const showNavigation = widthScreen < 1200;


  const handleCompleteTask = () => {
    const verify = !start ? "Iniciar" : "Concluir";
    const isCompleted = verify === "Concluir";

    if (isCompleted) {
      push("/thanks");
    }
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
                ? "Iniciar"
                : "Atividade em andamento"}
            </S.Title>
            <S.Subtitle>
              {!start
                ? "Você chegou ao local. Iniciar atividade?"
                : "A atividade que você está realizando leva em média 20 minutos..."}
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
              ? "Iniciar"
              : "Concluir"}
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
