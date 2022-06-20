import ReactDOM from "react-dom";
import './TemplateModal.css'
export const TemplateModal = ({open, onClose}) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <div className="background">
            <section className="modal">
                <button onClick={onClose}>X</button>
                <form>
                    <label htmlFor="templateName">Template's name:</label>
                    <input type='text' id='templateName'></input>
                    <label htmlFor="username">Created by:</label>
                    <input type='text' id='username'></input>
                </form>
            </section>
        </div>,
        document.getElementById('portal')
    );
}