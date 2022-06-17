import { useState } from 'react'
import { Linear, Radial } from '../Directions/Directions'
import './Sidebar.css'

export const Sidebar = () => {
    const [direction, setDirection] = useState('linear')

    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => setDirection('linear')}>Linear</button>
            <button id='radial' onClick={() => setDirection('radial')}>Radial</button>

            <h2>Direction</h2>
            {direction === 'linear' ? <Linear></Linear> : <Radial></Radial>}

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