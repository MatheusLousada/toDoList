import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { TaskItem } from '../../components/ToDoList/NaoConcluidas/TaskItem';
import { TaskDescription } from '../../components/ToDoList/NaoConcluidas/TaskDescription';
import { Container } from '../../components/ToDoList/NaoConcluidas/Container';
import { ButtonContainer } from '../../components/ToDoList/NaoConcluidas/ButtonContainer';
import { Button } from '../../components/ToDoList/NaoConcluidas/Button';
import { ButtonText } from '../../components/ToDoList/NaoConcluidas/ButtonText';
import { TaskList } from '../../components/ToDoList/NaoConcluidas/TaskList';
import { TaskContent } from '../../components/ToDoList/NaoConcluidas/TaskContent';
import { TaskNumber } from '../../components/ToDoList/NaoConcluidas/TaskNumber';
import { TaskButton } from '../../components/ToDoList/NaoConcluidas/TaskButton';
import { CheckIcon } from '../../components/ToDoList/NaoConcluidas/CheckIcon';

export default function NaoConcluidas({ navigation }) {
  const { tarefas, setTarefas } = useContext(AuthContext);
  const tarefasNaoConcluidas = tarefas.filter(tarefa => tarefa.status === 'naoConcluida');

  const marcarConcluida = index => {
    const tarefaIndex = tarefas.findIndex(tarefa => tarefa.descricao === tarefasNaoConcluidas[index].descricao);
    if (tarefaIndex !== -1) {
      setTarefas(prevTarefas => {
        const copiaTarefas = [...prevTarefas];
        copiaTarefas[tarefaIndex].status = 'concluida';
        return copiaTarefas;
      });
    }
  };

  const renderItem = ({ item, index }) => (
    <TaskItem>
      <TaskContent>
        <TaskNumber>{`${index + 1} - `}</TaskNumber>
        <TaskDescription>{item.descricao}</TaskDescription>
      </TaskContent>
      <TaskButton onPress={() => marcarConcluida(index)}>
        <CheckIcon name="md-checkmark-outline" />
      </TaskButton>
    </TaskItem>
  );

  return (
    <Container>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Adicionar')} color="#363636">
          <ButtonText>Adicionar</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Concluídas')} color="#363636">
          <ButtonText>Concluídas</ButtonText>
        </Button>
      </ButtonContainer>
      <TaskList
        data={tarefasNaoConcluidas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
