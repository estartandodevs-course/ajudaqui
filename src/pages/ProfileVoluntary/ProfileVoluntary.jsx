import { differenceInSeconds } from "date-fns";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import * as S from "./ProfileVoluntaryStyled";
import {
  Layout,
  UserOverview,
  Card,
  Tag,
  Button,
  Form,
  Input,
} from "../../components";
import { useAuth, useStore } from "../../contexts";
import { optionCardInterest } from "../../_mock/optionCardInterest";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { orderStatusId } from "../../utils/constants";

export const ProfileVoluntary = () => {
  const [editMode, setEditMode] = useState(false);
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
    activity?.voluntary?.evaluation && activity?.status === 4
  )).reduce((total, activity) => (activity?.voluntary.evaluation + total), 0);

  const showNavigation = widthScreen < 1200;

  const { push } = useHistory();

  const [isActive, setIsActive] = useState(null);
  const [selectedOptionHelp, setSelectedOptionHelp] = useState({});
  const {
    handleCreateOrder, tags, handleCreateTag, loadingStore,
  } = useStore();

  const getOpenHelpRequests = helpRequests
    .filter((opened) => opened.voluntary.id === user.id || !opened.voluntary.id)
    .sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });

  const elderlysNeedHelp = [];

  getOpenHelpRequests.forEach((item) => {
    if (!elderlysNeedHelp.includes(item.elderly.id)) {
      elderlysNeedHelp.push(item.elderly.id);
    }
  });


  const handleSubmit = async ({ option }) => {
    if (option) {
      await handleCreateTag(
        {
          option,
          estimatedTime: 30,
        },
        async (newTag) => {
          await handleCreateOrder(
            {
              order: newTag,
              elderly: {
                id: user.id,
                evaluation: "",
                note: "",
              },
            },
            (helpRequestId) => {
              return push(`order-status/${helpRequestId}`);
            },
          );
        },
      );
    }
    await handleCreateOrder(
      {
        order: selectedOptionHelp,
        elderly: {
          id: user.id,
          evaluation: "",
          note: "",
        },
      },
      (helpRequestId) => {
        return push(`order-status/${helpRequestId}`);
      },
    );
  };

  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.PagesContainer>
        <S.ContainerPageOne>
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
            <S.TextInterests>Interesses</S.TextInterests>
          </S.ContentTextInterests>
          <S.ContainerTag>
            {optionCardInterest?.map(({ id, option }) => (
              <Tag key={id} isActive>
                {option}
              </Tag>
            ))}
          </S.ContainerTag>
          <S.ContainerButton>
            <Button
              width="187px"
              onClick={() => setEditMode(true)}
              disabled={editMode}
            >
              Editar Preferências
            </Button>
          </S.ContainerButton>
          {helpedPeoples.length > 0 && (
          <S.ContentTextPeople>
            <S.TextPeople>Pessoas que você já ajudou</S.TextPeople>
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
        </S.ContainerPageOne>

        <S.ContainerPageTwo>
          {editMode ? (
            <S.ContainerAskForHelp>
              <Form
                initialValues={{
                  option: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
              >
                <S.TextTitle>
                  Editar interesses
                </S.TextTitle>
                <S.Texts>
                  Selecione algumas atividades que você pode fazer para ajudar um
                  idoso.
                </S.Texts>
                <S.ContentTag>
                  {tags?.map(({ id, option }) => (
                    <Tag
                      key={id}
                      isActive={isActive === id}
                      onClick={() => {
                        setIsActive(id);
                        setSelectedOptionHelp({ id, option });
                      }}
                    >
                      {option}
                    </Tag>
                  ))}
                </S.ContentTag>
                <S.Texts>
                  Pode fazer outra coisa que não esta listada?(divida cada
                  atividade com “,”)
                </S.Texts>
                <Input type="text" name="option" placeholder="" />
                <S.ContainerSwitch>
                  <Switch onChange={() => {}} checked />
                  <S.TextSwitch>Ativar notificações</S.TextSwitch>
                </S.ContainerSwitch>
                <S.PositionButton>
                  <Button
                    type="submit"
                    isLoading={loadingStore}
                    disabled
                  >
                    Salvar
                  </Button>

                  <Button
                    type="submit"
                    isLoading={loadingStore}
                    border="1px solid #BC1610"
                    color="#BC1610"
                    background="none"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </Button>
                </S.PositionButton>
              </Form>
            </S.ContainerAskForHelp>
          ) : (
            <S.ImageAside src="/assets/svg/arte voluntario.svg" alt="Voluntário" />
          )}
        </S.ContainerPageTwo>
      </S.PagesContainer>
    </Layout>
  );
};
