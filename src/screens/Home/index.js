import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ContainerStyled } from '../../components/Home/ContainerStyled';
import { ViewStyled } from '../../components/Home/ViewStyled';
import { LogoTodo } from '../../components/Home/LogoTodo';
import { ContainerForm } from '../../components/Home/ContainerForm';
import { Button } from '../../components/Home/Button';
import { ButtonText } from '../../components/Home/ButtonText';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <ContainerStyled>
      <ViewStyled>
        <LogoTodo
          animation={'flipInY'}
          source={require('../../../assets/todo.png')}
        />
      </ViewStyled>
      <ContainerForm delay={600} animation='fadeInUp'>
        <Button
          onPress={() => navigation.navigate('Login')}
        >
          <ButtonText>Acessar</ButtonText>
        </Button>
      </ContainerForm>
    </ContainerStyled>
  );
}
