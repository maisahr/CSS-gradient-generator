import './Directions.css'

export const Linear = ({handleUpdate}) => {

    const styleDirection = {
        style: 'linear'
    }

    const handleChangeDirection = (direction) => {
        styleDirection.direction = direction;
        handleUpdate(styleDirection);
    }

    return(
        <>
            <style>{`
                #linear {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowL1' onClick={() => handleChangeDirection('to top left')}>&#8598;</button>
            <button id='arrowL2' onClick={() => handleChangeDirection('to top')}>&uarr;</button>
            <button id='arrowL3' onClick={() => handleChangeDirection('to top right')}>&#8599;</button>
            <button id='arrowL4' onClick={() => handleChangeDirection('to left')}>&larr;</button>
            <button></button>
            <button id='arrowL5' onClick={() => handleChangeDirection('to right')}>&rarr;</button>
            <button id='arrowL6' onClick={() => handleChangeDirection('to bottom left')}>&#8601;</button>
            <button id='arrowL7' onClick={() => handleChangeDirection('to bottom')}>&#8595;</button>
            <button id='arrowL8' onClick={() => handleChangeDirection('to bottom right')}>&#8600;</button>
        </>
    )
}

export const Radial = ({handleUpdate}) => {

    const styleDirection = {
        style: 'radial'
    }

    const handleChangeDirection = (direction) => {
        styleDirection.direction = direction;
        handleUpdate(styleDirection);
    }

    return(
        <>
            <style>{`
                #radial {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowR1' onClick={() => handleChangeDirection('at top left')}>&#8598;</button>
            <button id='arrowR2' onClick={() => handleChangeDirection('at top')}>&uarr;</button>
            <button id='arrowR3' onClick={() => handleChangeDirection('at top right')}>&#8599;</button>
            <button id='arrowR4' onClick={() => handleChangeDirection('at left')}>&larr;</button>
            <button id='arrowR5' onClick={() => handleChangeDirection('at center')}>&#9675;</button>
            <button id='arrowR6' onClick={() => handleChangeDirection('at right')}>&rarr;</button>
            <button id='arrowR7' onClick={() => handleChangeDirection('at bottom left')}>&#8601;</button>
            <button id='arrowR8' onClick={() => handleChangeDirection('at bottom')}>&#8595;</button>
            <button id='arrowR9' onClick={() => handleChangeDirection('at bottom right')}>&#8600;</button>
        </>
    )
}