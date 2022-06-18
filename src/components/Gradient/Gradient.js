import './Gradient.css'
export const Gradient = ({values}) => {

    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: ${values.style}-gradient(${values.direction}, ${values.colorOne}, ${values.colorTwo});
                    }
            `}</style>
        </>
    )
}