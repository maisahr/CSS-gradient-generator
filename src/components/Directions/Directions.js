export const Directions = ({values, handleChange}) => {

    const handleChangeDirection = (direction, id) => {

        values.dir = direction;
        values.dirId = id;

        handleChange(values);
    }

    return(
        <div className="directions">
            <style>{`
                #${values.style}, #${values.dirId} {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrow1' onClick={() => handleChangeDirection('top left', 'arrow1')}>&#8598;</button>
            <button id='arrow2' onClick={() => handleChangeDirection('top', 'arrow2')}>&uarr;</button>
            <button id='arrow3' onClick={() => handleChangeDirection('top right', 'arrow3')}>&#8599;</button>
            <button id='arrow4' onClick={() => handleChangeDirection('left', 'arrow3')}>&larr;</button>
            {values.style === 'radial' && <button id='arrowR5' onClick={() => handleChangeDirection('center', 'arrowR5')}>&#9675;</button>}
            <button id='arrow5' onClick={() => handleChangeDirection('right', 'arrow5')}>&rarr;</button>
            <button id='arrow6' onClick={() => handleChangeDirection('bottom left', 'arrow6')}>&#8601;</button>
            <button id='arrow7' onClick={() => handleChangeDirection('bottom', 'arrow7')}>&#8595;</button>
            <button id='arrow8' onClick={() => handleChangeDirection('bottom right', 'arrow8')}>&#8600;</button>
        </div>
    )
}