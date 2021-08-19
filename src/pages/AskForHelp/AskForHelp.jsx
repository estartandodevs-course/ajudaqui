import { useState } from "react";
import {
  Button, Form, Input, Layout, Tag,
} from "../../components";
import { useAuth, useStore } from "../../contexts";
import { optionsTagData } from "../../_mock";
import * as S from "./AskForHelpStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const AskForHelp = ({ ...restProps }) => {
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen <= 1200;
  const [isActive, setIsActive] = useState(null);
  const [selectedOptionHelp, setSelectedOptionHelp] = useState({});
  const { handleCreateOrder } = useStore();
  const { user } = useAuth();

  const handleSubmit = async () => {
    await handleCreateOrder({
      order: selectedOptionHelp,
      elderly: {
        id: user.id,
        evaluation: "",
        note: "",
      },
    });
  };
  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.ContainerDesktop>
        <S.ContainerAskForHelp {...restProps}>
          <Form
            initialValues={{
              help: "",
            }}
            onSubmit={handleSubmit}
          >
            <S.Text>
              Selecione alguma das atividades abaixo ou escreva seu pedido.
            </S.Text>
            <S.ContainerTag>
              {optionsTagData?.map(({ id, option }) => (
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
            <Input type="text" name="help" label="Precisando de ajuda com outra coisa?" placeholder="Clique aqui para escrever" />
            <S.PositionButton>
              <Button type="submit">Enviar Pedido</Button>
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
