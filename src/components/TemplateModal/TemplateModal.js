import ReactDOM from "react-dom";
import './TemplateModal.css'
export const TemplateModal = ({open, onClose, values, updateTemplates}) => {

    if(!open) return null;

    let user = '';
    let template = '';

    const handleChangeUser = (e) => {
        user = e.target.value;
    }

    const handleChangeTemplate = (e) => {
        template = e.target.value;
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
                    <button className="getButton" onClick={(e) => {
                        e.preventDefault(); 
                        saveTemplate(template, user, values);
                    }}>Save</button>

                </form>
            </section>
        </div>,
        document.getElementById('portal')
    );
}