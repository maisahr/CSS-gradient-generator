import { useState } from "react";
import ReactDOM from "react-dom";
import './TemplateModal.css'
export const TemplateModal = ({open, onClose, values, updateTemplates, changeButtonText}) => {
    const [templateName, setTemplateName] = useState();
    const [username, setUsername] = useState()

    if(!open) return null;

    const handleChangeUser = (e) => {
        setUsername(e.target.value);
    }

    const handleChangeTemplate = (e) => {
        setTemplateName(e.target.value);
    }

    const saveTemplate = (template, user, values) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                template: template,
                username: user,
                values: values
            })
        };

        fetch('https://62b088c7196a9e987025de3c.mockapi.io/templates', requestOptions)
            .then(response => {
                response.json();
                updateTemplates();
                onClose();
                setUsername(undefined);
                setTemplateName(undefined);
                changeButtonText();
            })
            .catch(res => console.log(res))
    }


    return ReactDOM.createPortal(
        <div className="background">
            <section className="modal">
                <button onClick={onClose} className='closeButton'>X</button>
                <h1>Add a new template</h1>
                <form>
                    <label htmlFor="templateName">Template's name:</label>
                    <input type='text' id='templateName' name='template' className="formInput" onChange={handleChangeTemplate}></input>

                    <label htmlFor="username">Created by:</label>
                    <input type='text' id='username' name='username' className="formInput" onChange={handleChangeUser}></input>
                    <button className="getButton formButton" disabled={!username || !templateName} onClick={(e) => {
                        e.preventDefault(); 
                        saveTemplate(templateName, username, values);
                    }}>Save</button>

                </form>
            </section>
        </div>,
        document.getElementById('portal')
    );
}