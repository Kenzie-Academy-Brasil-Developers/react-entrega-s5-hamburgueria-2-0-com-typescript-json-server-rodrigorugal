import { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/ButtonsComponent/Button";

import { AreaLogin, BackGroundBurguer, BoxInput, ScreenLogin } from "./style";
import { api } from "../../service/api";
import { TokenContext } from "../../provider/Token";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface LoginDataForm {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();

  const { addToken } = useContext(TokenContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail de usuário obrigatório "),
    password: yup.string().required("Digite sua Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlerLogin = (data: LoginDataForm) => {
    api
      .post("/login", data)
      .then((response) => {
        addToken(response.data.accessToken);

        history.push("/Home");
      })
      .catch((er) => console.log(er));
  };

  return (
    <ScreenLogin>
      <AreaLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handlerLogin)}>
          <BoxInput>
            <label>E-mail</label>
            <input type="text" {...register("email")} />
            {errors.email?.message}
          </BoxInput>

          <BoxInput>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            {errors.password?.message}
          </BoxInput>

          <Button type="submit">Entrar</Button>
        </form>
        <p>
          Ainda não possui o cadastro?
          <span className="linkAcess">
            <Link to="/Register">Cadastre-se</Link>
          </span>
        </p>
      </AreaLogin>
      <BackGroundBurguer />
    </ScreenLogin>
  );
};

export default Login;
