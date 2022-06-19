export const Directions = ({values, handleChange}) => {

    const handleChangeDirection = (direction) => {

        values.dir = direction;

        handleChange(values);
    }

    return(
        <>
            <style>{`
                #${values.style} {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrow1' onClick={() => handleChangeDirection('top left')}>&#8598;</button>
            <button id='arrow2' onClick={() => handleChangeDirection('top')}>&uarr;</button>
            <button id='arrow3' onClick={() => handleChangeDirection('top right')}>&#8599;</button>
            <button id='arrow4' onClick={() => handleChangeDirection('left')}>&larr;</button>
            {values.style === 'radial' && <button id='arrowR5' onClick={() => handleChangeDirection('center')}>&#9675;</button>}
            <button id='arrow5' onClick={() => handleChangeDirection('right')}>&rarr;</button>
            <button id='arrow6' onClick={() => handleChangeDirection('bottom left')}>&#8601;</button>
            <button id='arrow7' onClick={() => handleChangeDirection('bottom')}>&#8595;</button>
            <button id='arrow8' onClick={() => handleChangeDirection('bottom right')}>&#8600;</button>
        </>
    )
}