import { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/ButtonsComponent/Button";
import jwt_decode from "jwt-decode";

import { AreaLogin, BackGroundBurguer, BoxInput, ScreenLogin } from "./style";
import { api } from "../../service/api";
import { TokenContext } from "../../provider/Token";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface LoginDataForm {
  name: string;
  password: string;
}

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { addToken } = useContext(TokenContext);

  const schema = yup.object().shape({
    name: yup.string().required("Nome de usuário obrigatório "),
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
        addToken(response.data.access);
        const decoded = jwt_decode(response.data.access);
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
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </BoxInput>

          <BoxInput>
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
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
