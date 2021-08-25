import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button, Form, Input, Layout, Tag,
} from "../../components";
import { useAuth, useStore } from "../../contexts";
import * as S from "./AskForHelpStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const AskForHelp = ({ ...restProps }) => {
  const [widthScreen] = useWidthScreen();

  const { push } = useHistory();
  const showNavigation = widthScreen < 1200;
  const [isActive, setIsActive] = useState(null);
  const [selectedOptionHelp, setSelectedOptionHelp] = useState({});
  const {
    handleCreateOrder, tags, handleCreateTag, loadingStore,
  } = useStore();
  const { user } = useAuth();

  const handleSubmit = async ({ option }) => {
    if (option) {
      await handleCreateTag({
        option,
        estimatedTime: 30,
      }, async (newTag) => {
        await handleCreateOrder({
          order: newTag,
          elderly: {
            id: user.id,
            evaluation: "",
            note: "",
          },
        }, async (helpRequestId) => {
          return push(`order-status/${helpRequestId}`);
        });
      });
    }
    await handleCreateOrder({
      order: selectedOptionHelp,
      elderly: {
        id: user.id,
        evaluation: "",
        note: "",
      },
    }, (helpRequestId) => {
      return push(`order-status/${helpRequestId}`);
    });
  };

  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.ContainerDesktop>
        <S.ContainerAskForHelp {...restProps}>
          <Form
            initialValues={{
              option: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            <S.Text>
              Selecione alguma das atividades abaixo ou escreva seu pedido.
            </S.Text>
            <S.ContainerTag>
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
            </S.ContainerTag>
            <Input
              type="text"
              name="option"
              label="Precisando de ajuda com outra coisa?"
              placeholder="Clique aqui para escrever"
              disabled
            />
            <S.PositionButton>
              <Button
                type="submit"
                isLoading={loadingStore}
              >
                Enviar Pedido
              </Button>
            </S.PositionButton>
          </Form>
        </S.ContainerAskForHelp>
        <S.Aside>
          <S.AsideImage src="/assets/svg/arte idoso desktop.svg" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
