import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { TaskItem } from '../../components/ToDoList/Concluidas/TaskItem';
import { TaskDescription } from '../../components/ToDoList/Concluidas/TaskDescription';
import { Container } from '../../components/ToDoList/Concluidas/Container';
import { TaskList } from '../../components/ToDoList/Concluidas/TaskList';
import { TaskNumber } from '../../components/ToDoList/Concluidas/TaskNumber';

export default function Concluidas({ navigation }) {
  const { tarefas } = useContext(AuthContext);
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.status === 'concluida');

  const renderItem = ({ item, index }) => (
    <TaskItem>
      <TaskNumber>{`${index + 1} - `}</TaskNumber>
      <TaskDescription>{item.descricao}</TaskDescription>
    </TaskItem>
  );

  return (
    <Container>
      <TaskList
        data={tarefasConcluidas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
