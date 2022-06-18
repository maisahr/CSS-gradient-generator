import './Gradient.css'
export const Gradient = ({colorOne, colorTwo, direction}) => {
    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo});
                    }
            `}</style>
        </>
    )
}