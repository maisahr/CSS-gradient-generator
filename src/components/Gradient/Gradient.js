import './Gradient.css'
export const Gradient = ({values}) => {

    return (
        <>
            <section className="gradient"></section>
            <style>{`
                    .gradient {
                        background-image: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
                    }
            `}</style>
        </>
    )
}