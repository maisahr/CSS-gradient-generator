import './Gradient.css'
export const Gradient = ({values}) => {

    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
                    }
            `}</style>
        </>
    )
}