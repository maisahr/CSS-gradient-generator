export const Gradient = ({values, selector}) => {

    return (
        <>
            <style>{`
                    ${selector} {
                        background-image: ${values.style}-gradient(${values.preposition + values.dir}, ${values.color1}, ${values.color2});
                    }
            `}</style>
        </>
    )
}