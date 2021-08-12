import { useState } from "react";
import {
  Button, Form, Input, Layout, Tag,
} from "../../components";
import { optionsTagData } from "../../_mock";
import * as S from "./AskForHelpStyled";

export const AskForHelp = ({ ...restProps }) => {
  const [isActive, setIsActive] = useState(null);
  return (
    <Layout hasTabBar>
      <S.ContainerAskForHelp {...restProps}>
        <Form initialValues={{
          help: "",
        }}
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
                }}
              >
                {option}
              </Tag>
            ))}
          </S.ContainerTag>
          <Input type="text" name="help" label="Precisando de ajuda com outra coisa?" placeholder="Clique aqui para escrever" />
          <S.PositionButton>
            <Button>Enviar Pedido</Button>
          </S.PositionButton>
        </Form>
      </S.ContainerAskForHelp>
    </Layout>
  );
};
