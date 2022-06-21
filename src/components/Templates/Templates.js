import { useEffect, useState } from 'react';
import { Gradient } from '../Gradient/Gradient';
import './Templates.css'

export const Templates = ({updateTemplates, handleChange}) => {

    const [templates, setTemplates] = useState()

    const renderTemplate = (values) => {
        handleChange(values);
    
        window.scroll({
            top:0,
            left:0,
            behavior:"smooth"
        });
    }

    useEffect(() => {
        fetch('https://62b088c7196a9e987025de3c.mockapi.io/templates')
            .then((response) => {
                return response.json()
            })
            .then((templates) => {
                console.log(templates);
                setTemplates(templates.reverse());
            })
            .catch((res) => console.log(res));
    }, [updateTemplates]);

    return(
        <section className="templatesSection">
            <h2>Templates</h2>
            <div className='templates'>
                {templates?.map((template) => {
                    return(
                        <div className='template' key={template.id}>
                            <figure className='oneTemplate' id={'template' + template.id} onClick={() => renderTemplate(template.values)}></figure>
                            <figcaption>"{template.template}" by {template.username}</figcaption>
                            <Gradient values={template.values} selector={'#template' + template.id}></Gradient>
                            <style>{`
                                    #${'template' + template.id}:hover {
                                        border: 2px solid #3d4853;
                                    }
                            `}</style>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}