import * as S from "./ProfileVoluntaryStyled";
import {
  Layout, UserOverview, Card, Tag, Button,
} from "../../components";
import { optionCardInterest } from "../../_mock/optionCardInterest";
import { optionPeopleHelped } from "../../_mock/optionPeopleHelped";
import { useAuth } from "../../contexts";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const ProfileVoluntary = ({ activities = "10", hours = "30" }) => {
  const { user } = useAuth();
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;
  return (
    <Layout
      hasTabBar
      showNavigation={showNavigation}
    >
      <S.ContainerPage>
        <UserOverview
          userData={user}
        />
        <S.ContainerCard>
          <Card
            color="white"
            textAlign="center"
            as="span"
          >
            <S.NumberCard>
              {activities}
            </S.NumberCard>
            Atividades Realizadas
          </Card>
          <Card
            color="white"
            as="span"
          >
            <S.NumberCard>
              {hours}
            </S.NumberCard>
            Horas de Voluntariado
          </Card>
        </S.ContainerCard>
        <S.ContentTextInterests>
          <S.Text>Interesses</S.Text>
        </S.ContentTextInterests>
        <S.ContainerTag>
          {optionCardInterest?.map(({ id, option }) => (
            <Tag
              key={id}
              isActive
            >
              {option}
            </Tag>
          ))}
        </S.ContainerTag>
        <S.ContainerButton>
          <Button
            width="187px"
          >
            Editar Preferências
          </Button>
        </S.ContainerButton>
        <S.ContentTextPeople>
          <S.Text>
            Pessoas que você já ajudou
          </S.Text>
        </S.ContentTextPeople>
        <S.ContainerImageElderly>
          {optionPeopleHelped?.map(({ photoURL, id }) => (
            <S.ImageElderly
              key={id}
              src={photoURL}
              alt="imagem dos idosos"
            />
          ))}
        </S.ContainerImageElderly>
      </S.ContainerPage>
    </Layout>
  );
};
