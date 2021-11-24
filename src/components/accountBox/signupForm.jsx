import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nombre" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirmar contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Crear cuenta</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        ¿Ya tienes una cuenta?
        <BoldLink href="#" onClick={switchToSignin}>
          Iniciar sesión
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
