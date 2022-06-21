import { useState } from "react";
import ReactDOM from "react-dom";
import './TemplateModal.css'
export const TemplateModal = ({open, onClose, values, updateTemplates, changeButtonText}) => {
    const [templateName, setTemplateName] = useState();
    const [username, setUsername] = useState()
/*     const [saveButtonText, setSaveButtonText] = useState('Please add template and creator names'); */

    if(!open) return null;

    const handleChangeUser = (e) => {
        setUsername(e.target.value);
/*         if(username.length > 0 && templateName.length > 0){
            setSaveButtonText('Save template')
        } else if (username.length === 0 || templateName.length === 0){
            setSaveButtonText('Please add template and creator names')
        } */
    }

    const handleChangeTemplate = (e) => {
        setTemplateName(e.target.value);
/*         if(username.length > 0 && templateName.length > 0){
            setSaveButtonText('Save template')
        } else if (username.length === 0 || templateName.length === 0){
            setSaveButtonText('Please add template and creator names')
        } */
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
                <form>
                    <label htmlFor="templateName">Template's name:</label>
                    <input type='text' name='template' className="formInput" onChange={handleChangeTemplate}></input>

                    <label htmlFor="username">Created by:</label>
                    <input type='text' name='username' className="formInput" onChange={handleChangeUser}></input>
                    <button className="getButton" disabled={!username || !templateName} onClick={(e) => {
                        e.preventDefault(); 
                        saveTemplate(templateName, username, values);
                    }}>Save</button>

                </form>
            </section>
        </div>,
        document.getElementById('portal')
    );
}