import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import HomeCards from '../components/HomeCards';
import { Col, Row } from 'reactstrap';
import Header from '../components/Header';

export default function ListTask() {
    const [tasks, setTaks] = useLocalStorage('mytasks', [])
    console.log('tasks==', tasks);
    return (
        <div>
            <h5 className="p-0 mb-3 fw-normal">Task List</h5>
            <Row>
                {tasks.map((item, ind) => {
                    return (
                        <Col md={2} key={ind}>
                            <HomeCards
                                name={item.name}
                                checkbox={false}

                            />
                        </Col>

                    )
                })}
            </Row>

        </div>
    )
}
