import './Directions.css'

export const Linear = ({handleUpdate}) => {

/*     const handleChangeDirection = (direction) => {
        handleUpdate(direction);
    } */

    return(
        <>
            <style>{`
                #linear {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowL1' onClick={() => handleUpdate('to top left')}>&#8598;</button>
            <button id='arrowL2' onClick={() => handleUpdate('to top')}>&uarr;</button>
            <button id='arrowL3' onClick={() => handleUpdate('to top right')}>&#8599;</button>
            <button id='arrowL4' onClick={() => handleUpdate('to left')}>&larr;</button>
            <button></button>
            <button id='arrowL5' onClick={() => handleUpdate('to right')}>&rarr;</button>
            <button id='arrowL6' onClick={() => handleUpdate('to bottom left')}>&#8601;</button>
            <button id='arrowL7' onClick={() => handleUpdate('to bottom')}>&#8595;</button>
            <button id='arrowL8' onClick={() => handleUpdate('to bottom right')}>&#8600;</button>
        </>
    )
}

export const Radial = ({handleUpdate}) => {
    return(
        <>
            <style>{`
                #radial {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowR1' onClick={() => handleUpdate('to top left')}>&#8598;</button>
            <button id='arrowR2' onClick={() => handleUpdate('to top left')}>&uarr;</button>
            <button id='arrowR3' onClick={() => handleUpdate('to top left')}>&#8599;</button>
            <button id='arrowR4' onClick={() => handleUpdate('to top left')}>&larr;</button>
            <button id='arrowR5' onClick={() => handleUpdate('to top left')}>&#9675;</button>
            <button id='arrowR6' onClick={() => handleUpdate('to top left')}>&rarr;</button>
            <button id='arrowR7' onClick={() => handleUpdate('to top left')}>&#8601;</button>
            <button id='arrowR8' onClick={() => handleUpdate('to top left')}>&#8595;</button>
            <button id='arrowR9' onClick={() => handleUpdate('to top left')}>&#8600;</button>
        </>
    )
}