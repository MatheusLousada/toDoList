import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container } from '../../components/ToDoList/Adicionar/Container';
import { LastTaskItem } from '../../components/ToDoList/Adicionar/LastTaskItem';
import { LastTaskNumber } from '../../components/ToDoList/Adicionar/LastTaskNumber';
import { LastTaskDescription } from '../../components/ToDoList/Adicionar/LastTaskDescription';
import { InputContainer } from '../../components/ToDoList/Adicionar/InputContainer';
import { Input } from '../../components/ToDoList/Adicionar/Input';
import { Button } from '../../components/ToDoList/Adicionar/Button';
import { ButtonText } from '../../components/ToDoList/Adicionar/ButtonText';
import { LastTasksContainer } from '../../components/ToDoList/Adicionar/LastTasksContainer';
import { LastTasksTitle } from '../../components/ToDoList/Adicionar/LastTasksTitle';
import { LastTaskList } from '../../components/ToDoList/Adicionar/LastTaskList';

export default function Adicionar() {
  const { setTarefas } = useContext(AuthContext);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [lastTasks, setLastTasks] = useState([]);

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novaTarefaObj = { descricao: novaTarefa, status: 'naoConcluida' };
      setTarefas(prevTarefas => [...prevTarefas, novaTarefaObj]);
      setLastTasks(prevTasks => [...prevTasks, novaTarefaObj]);
      setNovaTarefa('');
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleAdicionarTarefa();
    }
  };

  useEffect(() => {
    return () => {
      setLastTasks([]);
    };
  }, []);

  const renderLastTaskItem = ({ item, index }) => (
    <LastTaskItem>
      <LastTaskNumber>{`${index + 1} - `}</LastTaskNumber>
      <LastTaskDescription>{item.descricao}</LastTaskDescription>
    </LastTaskItem>
  );

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChangeText={text => setNovaTarefa(text)}
          onKeyPress={handleKeyPress}
        />
        <Button onPress={handleAdicionarTarefa} backgroundColor="#363636">
          <ButtonText>+</ButtonText>
        </Button>
      </InputContainer>
      {lastTasks.length > 0 && (
        <LastTasksContainer>
          <LastTasksTitle>Últimas tarefas adicionadas:</LastTasksTitle>
          <LastTaskList
            data={lastTasks}
            renderItem={renderLastTaskItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </LastTasksContainer>
      )}
    </Container>
  );
}