import './Gradient.css'
export const Gradient = ({values}) => {

    if(values.style === 'linear' && values.direction === 'center') {
        values.direction = 'top left'
    }

    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: ${values.style}-gradient(${values.preposition + values.direction}, ${values.colorOne}, ${values.colorTwo});
                    }
            `}</style>
        </>
    )
}