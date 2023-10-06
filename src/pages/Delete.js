import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import HomeCards from '../components/HomeCards';
import { Button, Col, Row } from 'reactstrap';

export default function Delete() {
    const [tasks, setTasks] = useLocalStorage('mytasks', []);
    console.log('tasks==', tasks);

    const handleCheckboxChange = (index, isChecked) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = isChecked;
        setTasks(updatedTasks);
    };

    const deleteTasks = () => {
        let toBeDeleted = JSON.parse(JSON.stringify(tasks)).filter((item) => { return !item.checked });
        setTasks(toBeDeleted)

    }

    return (
        <div>
            <h5 className="p-0 mb-3 fw-normal">Task List</h5>
            <Row>
                {tasks.map((item, ind) => {
                    return (
                        <Col md={2} key={ind}>
                            <HomeCards
                                name={item.name}
                                checkbox={true}
                                isChecked={item.checked}
                                onCheckboxChange={(isChecked) => handleCheckboxChange(ind, isChecked)}
                            />
                        </Col>
                    );
                })}
            </Row>
            <Button className='my-2' onClick={deleteTasks}>Delete</Button>
        </div>
    );
}
