import { Layout, Input, Form } from "../../components";


export const Login = () => {
  return (
    <Layout>
      <Form>
        <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
      </Form>
    </Layout>
  );
};
