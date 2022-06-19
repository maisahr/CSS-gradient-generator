import { useEffect, useState } from 'react'
import { Directions } from '../Directions/Directions'
import { hexGradient, rgbGradient } from '../gradientCodes/gradientCodes'
import './Sidebar.css'

export const Sidebar = ({values, handleChange, handleRandom}) => {

    const [output, setOutput] = useState('hex');
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
        newValues.color1 = e.target.value;
        handleChange(newValues)
    }

    const handleChangeColorTwo = (e) => {
        newValues.color2 = e.target.value;
        handleChange(newValues)
    }

    const handleChangeRandom = () => {
        newValues.color1 = handleRandom();
        newValues.color2 = handleRandom();
        handleChange(newValues)
    }

    const getCSS = (output) => {
        if(output === 'hex') {
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
        const link = new URL(window.location.host);
        link.searchParams.append('style', values.style);
        link.searchParams.append('dir', values.dir);
        link.searchParams.append('dirId', values.dirId);
        link.searchParams.append('color1', values.color1);
        link.searchParams.append('color2', values.color2);

        navigator.clipboard.writeText(link);
        setLinkButton('Copied to clipboard!');

        setTimeout(() => {
            setLinkButton('Get share link');
        }, 1500);
    }

    return (
        <div className="sidebar">
            <style>{`
                #${output} {
                    background-color: #f1f4f8;
                }
            `}</style>

            <h1>CSS GRADIENT GENERATOR</h1>

            <h2>Style</h2>
            <button id='linear' onClick={() => handleChangeStyle('linear')}>Linear</button>
            <button id='radial' onClick={() => handleChangeStyle('radial')}>Radial</button>

            <h2>Direction</h2>
            <Directions values={newValues} handleChange={handleChange}/>

            <h2>Colors</h2>
            <input type='color' value={newValues.color1} onChange={handleChangeColorOne}></input>
            <input type='color' value={newValues.color2} onChange={handleChangeColorTwo}></input>
            
            <button onClick={() => handleChangeRandom()}>Random</button>

            <h2>Output format</h2>
            <button id='hex' onClick={() => setOutput('hex')}>Hex</button>
            <button id='rgb' onClick={() => setOutput('rgb')}>Rgb</button>

            <button className='getButton' onClick={() => getCSS(output)}>{cssButton}</button>
            <button className='getButton' onClick={() => getShareLink()}>{linkButton}</button>
        </div>
    )
}