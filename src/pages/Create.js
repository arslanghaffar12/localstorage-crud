import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const Create =  () => {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useLocalStorage('mytasks', []);
  console.log('tasks in create', tasks);
  const history = useNavigate();

  const createTask = async (e) => {
    e.preventDefault();

    let _tasks = [...tasks];
    let newTask = {
      name: name,
      checked : true
    };
    console.log('tasks in inside', _tasks);

    _tasks.push(newTask);
    await setTasks(_tasks);
    history('/list-tasks');
  };



  return (
    <div className='text-center' style={{ paddingTop: '100px' }}>
      <h1>Create Task</h1>
      <Form onSubmit={createTask} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Label>Task Name</Label>
        <Input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter task name'
        />
        <Button type='submit' color='primary' style={{ marginTop: '10px' }}>
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default Create;
