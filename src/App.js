import React from "react";
import styled from 'styled-components';
import * as Yup from 'yup';

const Layout = styled.div`
  padding: 12px;
  font-size: 1.8rem;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 12px;
  font-size: 1.1rem;
`;

function App() {

  async function handleSubmit(data, { reset }) {

    try {

      const schema = Yup.object().shape({
        name: Yup
          .string()
          .required('O nome é obrigatório'),
        email: Yup
          .string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data);

      reset();

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
      }
    }

  }


  return (
    <div>
      <Layout>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
        />
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <button onClick={handleSubmit}>Enviar</button>
      </Layout>
    </div>
  );
}

export default App;
