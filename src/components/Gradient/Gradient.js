import './Gradient.css'
export const Gradient = ({colorOne, colorTwo, direction}) => {
    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: ${direction.style}-gradient(${direction.direction}, ${colorOne}, ${colorTwo});
                    }
            `}</style>
        </>
    )
}