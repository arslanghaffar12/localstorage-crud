import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function HomeCards(props) {
    const handleCheckboxChange = () => {
        // Toggle the checkbox state
        props.onCheckboxChange(!props.isChecked);
    };

    return (
        <Card className="w-100 summaryCard">
            <CardBody>
                {props.checkbox && <input
                    type="checkbox"
                    checked={props.isChecked}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: '10px' }}
                />}
                <h5 className='m-0 p-0 mb-2 fz-20' style={{ fontSize: ' ', fontWeight: '500' }}>
                    {props.name}
                </h5>
            </CardBody>
        </Card>
    );
}
