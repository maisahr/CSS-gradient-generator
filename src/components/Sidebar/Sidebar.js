import './Sidebar.css'
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button>Linear</button>
            <button>Radial</button>

            <h2>Direction</h2>

            <h2>Colors</h2>
            <button>A</button>
            <button>B</button>
            <button>Random</button>

            <h2>Output format</h2>
            <button>Hex</button>
            <button>Rgba</button>

            <button className='getButton'>Get CSS</button>
            <button className='getButton'>Get Share Link</button>
        </div>
    )
}