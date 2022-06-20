import { useEffect, useState } from 'react';
import './Templates.css'

export const Templates = ({updateTemplates}) => {

    const [templates, setTemplates] = useState()

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
                            <figure className='oneTemplate' id={'template' + template.id}></figure>
                            <figcaption>"{template.template}" by {template.username}</figcaption>
                            <style>{`
                                    #${'template' + template.id} {
                                        background-image: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
                                    }
                            `}</style>
                        </div>
                        
                    )
                })}
            </div>
        </section>
    )
}