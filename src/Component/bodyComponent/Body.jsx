import React from 'react';
import './body.css';
import Title from './body-title-comp/Title';
import Form from './body-form-comp/Form';
import Description from './body-description-comp/Description';

const Body = () => {

    return (
        <div className="body">
            <Title />
            <Form />
            <Description />
        </div>
    )

}

export default Body
