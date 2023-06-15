import React, { useState, useContext } from 'react';
import { FreeContext } from '../../contexts/free';
import { Container } from '../../components/Login/Container';
import { FormContainer } from '../../components/Login/FormContainer';
import { Header } from '../../components/Login/Header';
import { Input } from '../../components/Login/Input';
import { Label } from '../../components/Login/Label';
import { Message } from '../../components/Login/Message';
import { ButtonContainer } from '../../components/Login/ButtonContainer';
import { Button } from '../../components/Login/Button';
import { ButtonText } from '../../components/Login/ButtonText';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(FreeContext);

  const handleLogin = () => { 
    if (email.trim() === "" || password.trim() === "") {
      alert("Os campos e-mail e senha são obrigatórios");
      return;
    }
    
    setUser({email: email, password: password});
  }

  return (
    <Container>
      <Header animation={"fadeInLeft"} delay={100}>
        <Message>Bem-vindo(a)</Message>
      </Header>
      <FormContainer animation={"fadeInUp"} delay={800}>
        <Label>E-mail</Label>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Label>Senha</Label>
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </FormContainer>
      <ButtonContainer delay={800} animation='fadeInUp'>
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
