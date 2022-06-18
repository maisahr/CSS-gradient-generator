import './Gradient.css'
export const Gradient = ({colorOne, colorTwo}) => {
    return (
        <>
            <main className="gradient"></main>
            <style>{`
                    .gradient {
                        background-image: linear-gradient(${colorOne}, ${colorTwo});
                    }
            `}</style>
        </>
    )
}