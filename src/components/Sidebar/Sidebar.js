import { useEffect, useState } from 'react'
import { Directions } from '../Directions/Directions'
import './Sidebar.css'

export const Sidebar = ({colorOne, colorTwo, randomColor, handleUpdateOne, handleUpdateTwo, handleUpdateDirection, direction}) => {
    const [style, setStyle] = useState('linear')

    const handleChangeOne = (e) => {
        handleUpdateOne(e.target.value);
    } 

    const handleChangeTwo = (e) => {
        handleUpdateTwo(e.target.value);
    }

    const handleRandom = () => {
        handleUpdateOne(randomColor());
        handleUpdateTwo(randomColor());
    }

    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => setStyle('linear')}>Linear</button>
            <button id='radial' onClick={() => setStyle('radial')}>Radial</button>

            <h2>Direction</h2>
            <Directions styleProp={style} handleUpdate={handleUpdateDirection}/>

            <h2>Colors</h2>
            <input type='color' value={colorOne} onChange={handleChangeOne}></input>
            <input type='color' value={colorTwo} onChange={handleChangeTwo}></input>
            
            <button onClick={() => handleRandom()}>Random</button>

            <h2>Output format</h2>
            <button>Hex</button>
            <button>Rgba</button>

            <button className='getButton'>Get CSS</button>
            <button className='getButton'>Get Share Link</button>
        </div>
    )
}