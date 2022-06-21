import { useEffect, useState } from 'react';
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
                setTemplates(templates);
            })
            .catch((res) => console.log(res));
    }, [updateTemplates]);

    return(
        <section className="templatesSection">
            <h2>Templates</h2>
            <div className='templates'>
                {templates?.map((template) => {
                    const values = template.values;
                    return(
                        <div className='template' key={template.id}>
                            <figure className='oneTemplate' id={'template' + template.id} onClick={() => renderTemplate(values)}></figure>
                            <figcaption>"{template.template}" by {template.username}</figcaption>
                            <style>{`
                                    #${'template' + template.id} {
                                        background-image: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
                                    }
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