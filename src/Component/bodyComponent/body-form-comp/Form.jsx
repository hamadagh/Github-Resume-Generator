import React from 'react';
import './form.css';


const Form = () => {

    return (
        <div className="form">
            <div className="form-group">
                <p>Github username</p>
                <div className="form-input-group">
                    <input
                        className="form-input"
                        placeholder="John Doe"
                    />
                    <button className="submit-button">
                        Generieren
            </button>
                </div>
            </div>


        </div>
    )

}

export default Form
