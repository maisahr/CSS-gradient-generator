import { useEffect, useState } from 'react'
import { Linear, Radial } from '../Directions/Directions'
import './Sidebar.css'

export const Sidebar = () => {
    const [direction, setDirection] = useState('linear')
    const [colorOne, setColorOne] = useState()
    const [colorTwo, setColorTwo] = useState()

    useEffect(() => {
        console.log(colorOne)
        console.log(colorTwo)
    }, [colorOne])

    const handleChangeOne = (e) => {
        setColorOne(e.target.value);
    }

    const handleChangeTwo = (e) => {
        setColorTwo(e.target.value);
    }

    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => setDirection('linear')}>Linear</button>
            <button id='radial' onClick={() => setDirection('radial')}>Radial</button>

            <h2>Direction</h2>
            {direction === 'linear' ? <Linear></Linear> : <Radial></Radial>}

            <h2>Colors</h2>
            <input type='color' onChange={handleChangeOne}></input>
            <input type='color' onChange={handleChangeTwo}></input>
            
            <button>Random</button>

            <h2>Output format</h2>
            <button>Hex</button>
            <button>Rgba</button>

            <button className='getButton'>Get CSS</button>
            <button className='getButton'>Get Share Link</button>
        </div>
    )
}