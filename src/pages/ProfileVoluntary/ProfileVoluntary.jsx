import { differenceInSeconds } from "date-fns";
import * as S from "./ProfileVoluntaryStyled";
import {
  Layout, UserOverview, Card, Tag, Button,
} from "../../components";
import { optionCardInterest } from "../../_mock/optionCardInterest";
// import { optionPeopleHelped } from "../../_mock/optionPeopleHelped";
import { useAuth, useStore } from "../../contexts";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { orderStatusId } from "../../utils/constants";

export const ProfileVoluntary = () => {
  const { user } = useAuth();
  const [widthScreen] = useWidthScreen();
  const { helpRequests, elderlys } = useStore();

  const activities = helpRequests?.filter((helpRequest) => (
    helpRequest?.voluntary?.id === user.id
  ));

  const activitiesElderlyIds = activities.map((activity) => activity?.elderly?.id);

  const activitiesSeconds = activities?.filter((helpRequest) => (
    helpRequest?.status === orderStatusId.CONCLUDED
  )).reduce((prev, current) => {
    const totalTimeTask = differenceInSeconds(
      new Date(current?.endTime), new Date(current?.startTime),
    );
    return prev + totalTimeTask;
  },
  0);

  const hours = parseInt(((activitiesSeconds / 60) / 60)?.toFixed(2), 10);

  const helpedPeoples = elderlys.filter((elderly) => (
    (activitiesElderlyIds?.includes(elderly?.id) && !!elderly?.photoURL)
  ));

  const grade = activities.filter((activity) => (
    activity?.voluntary?.evaluation
  )).reduce((total, activity) => (activity?.voluntary.evaluation + total), 0);

  const showNavigation = widthScreen < 1200;

  return (
    <Layout
      hasTabBar
      showNavigation={showNavigation}
    >
      <S.ContainerPage>
        <UserOverview
          userData={{
            ...user,
            grade: grade ? parseInt((grade / activities.length).toFixed(0), 10) : 0,
          }}
        />
        <S.ContainerCard>
          <Card
            color="white"
            textAlign="center"
            as="span"
          >
            <S.NumberCard>
              {activities.length}
            </S.NumberCard>
            Atividades Realizadas
          </Card>
          <Card
            color="white"
            as="span"
          >
            <S.NumberCard>
              {hours?.toFixed(0) > 0 ? hours?.toFixed(0) : hours}
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
        {helpedPeoples.length > 0 && (
          <S.ContentTextPeople>
            <S.Text>
              Pessoas que você já ajudou
            </S.Text>
          </S.ContentTextPeople>
        )}
        <S.ContainerImageElderly>
          {helpedPeoples?.map(({ photoURL, id }) => (
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
