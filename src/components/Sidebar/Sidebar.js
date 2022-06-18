import { useState } from 'react'
import { Directions } from '../Directions/Directions'
import './Sidebar.css'

export const Sidebar = ({values, handleChange, handleRandom}) => {

    const newValues = {
        style: values.style,
        direction: values.direction,
        preposition: values.preposition,
        colorOne: values.colorOne,
        colorTwo: values.colorTwo
    }

    const handleChangeStyle = (style) => {
        newValues.style = style;
        if(newValues.style === 'linear'){
            newValues.preposition = 'to ';
        } else {
            newValues.preposition = 'at ';
        }
        handleChange(newValues)
    }

    const handleChangeColorOne = (e) => {
        newValues.colorOne = e.target.value;
        handleChange(newValues)
    }

    const handleChangeColorTwo = (e) => {
        newValues.colorTwo = e.target.value;
        handleChange(newValues)
    }

    return (
        <div className="sidebar">
            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => handleChangeStyle('linear')}>Linear</button>
            <button id='radial' onClick={() => handleChangeStyle('radial')}>Radial</button>

            <h2>Direction</h2>
            <Directions values={newValues} handleChange={handleChange}/>

            <h2>Colors</h2>
            <input type='color' value={newValues.colorOne} onChange={handleChangeColorOne}></input>
            <input type='color' value={newValues.colorTwo} onChange={handleChangeColorTwo}></input>
            
            <button onClick={() => handleRandom()}>Random</button>

            <h2>Output format</h2>
            <button>Hex</button>
            <button>Rgba</button>

            <button className='getButton'>Get CSS</button>
            <button className='getButton'>Get Share Link</button>
        </div>
    )
}