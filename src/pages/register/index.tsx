import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  ScreenLogin,
  AreaLogin,
  BoxInput,
  BackGroundBurguer,
} from "../login/style";
import { useState } from "react";
import Button from "../../components/ButtonsComponent/Button";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { api } from "../../service/api";

interface RegisterDataForm {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Nome de usuário obrigatório "),
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Digite sua Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlerRegister = (data: RegisterDataForm) => {
    console.log(data);

    api
      .post("/Register", data)
      .then((response) => {
        history.push("/");
      })
      .catch((er) => console.log(er));
  };

  return (
    <ScreenLogin>
      <AreaLogin>
        <h1>Registrar-se</h1>
        <form onSubmit={handleSubmit(handlerRegister)}>
          <BoxInput>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            {errors.name?.message}
          </BoxInput>

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

          <Button type="submit">Registrar</Button>
        </form>
        <p>
          Já possui cadastro?
          <span className="linkAcess">
            <Link to="/">Login</Link>
          </span>
        </p>
      </AreaLogin>
      <BackGroundBurguer />
    </ScreenLogin>
  );
};

export default Register;
