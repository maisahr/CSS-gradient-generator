import { useEffect, useState } from 'react'
import { Directions } from '../Directions/Directions'
import './Sidebar.css'

export const Sidebar = ({handleUpdateOne, handleUpdateTwo, handleUpdateDirection, direction}) => {
    const [style, setStyle] = useState('linear')

    const handleChangeOne = (e) => {
        handleUpdateOne(e.target.value);
    } 

    const handleChangeTwo = (e) => {
        handleUpdateTwo(e.target.value);
    }

    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => setStyle('linear')}>Linear</button>
            <button id='radial' onClick={() => setStyle('radial')}>Radial</button>

            <h2>Direction</h2>
            {style === 'linear' ? <Directions styleProp={'linear'} handleUpdate={handleUpdateDirection}/> : <Directions styleProp={'radial'} handleUpdate={handleUpdateDirection}/>}

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