import './Templates.css'

export const Templates = () => {
    return(
        <section className="templatesSection">
            <h2>Templates</h2>
            <div className='templates'>
                <div className='template'>
                    <figure id='template1'></figure>
                    <figcaption>"Template" by user</figcaption>
                </div>
                <div className='template'>
                    <figure id='template2'></figure>
                    <figcaption>"Template" by user</figcaption>
                </div>
                <div className='template'>
                    <figure id='template3'></figure>
                    <figcaption>"Template" by user</figcaption>
                </div>
                <div className='template'>
                    <figure id='template4'></figure>
                    <figcaption>"Template" by user</figcaption>
                </div>
            </div>
        </section>
    )
}