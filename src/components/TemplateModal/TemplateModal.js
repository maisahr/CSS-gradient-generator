import ReactDOM from "react-dom";
import './TemplateModal.css'
export const TemplateModal = ({open, onClose}) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <div className="background">
            <section className="modal">
                <button onClick={onClose} className='closeButton'>X</button>
                <form>
                    <label htmlFor="templateName">Template's name:</label>
                    <input type='text' id='templateName' className="formInput"></input>

                    <label htmlFor="username">Created by:</label>
                    <input type='text' id='username' className="formInput"></input>
                </form>
                <button className="getButton">Save</button>
            </section>
        </div>,
        document.getElementById('portal')
    );
}