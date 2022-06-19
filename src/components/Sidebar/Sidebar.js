import { useState } from 'react'
import { Directions } from '../Directions/Directions'
import { hexGradient, rgbGradient } from '../gradientCodes/gradientCodes'
import './Sidebar.css'

export const Sidebar = ({values, handleChange, handleRandom}) => {

    const [output, setOutput] = useState('Hex');
    const [cssButton, setCssButton] = useState('Get CSS');
    const [linkButton, setLinkButton] = useState('Get share link');

    const newValues = {
        ...values
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

    const handleChangeRandom = () => {
        newValues.colorOne = handleRandom();
        newValues.colorTwo = handleRandom();
        handleChange(newValues)
    }

    const getCSS = (output) => {
        if(output === 'Hex') {
            hexGradient(values);
        } else {
            rgbGradient(values);
        }

        setCssButton('Copied to clipboard!');

        setTimeout(() => {
            setCssButton('Get CSS');
        }, 1500);

    }

    const getShareLink = () => {
        const link = new URL('http://localhost:3000/');
        link.searchParams.append('gs', values.style);
        link.searchParams.append('dir', values.direction);
        link.searchParams.append('c1', values.colorOne);
        link.searchParams.append('c2', values.colorTwo);

        navigator.clipboard.writeText(link);
        setLinkButton('Copied to clipboard!');

        setTimeout(() => {
            setLinkButton('Get share link');
        }, 1500);
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
            
            <button onClick={() => handleChangeRandom()}>Random</button>

            <h2>Output format</h2>
            <button onClick={() => setOutput('Hex')}>Hex</button>
            <button onClick={() => setOutput('Rgb')}>Rgb</button>

            <button className='getButton' onClick={() => getCSS(output)}>{cssButton}</button>
            <button className='getButton' onClick={() => getShareLink()}>{linkButton}</button>
        </div>
    )
}