import { useEffect, useState } from 'react'
import { Directions } from '../Directions/Directions'
import { generateRandomColor } from '../../utils/randomColor'
import { hexGradient, rgbGradient } from '../../utils/gradientCodes'
import { TemplateModal } from '../TemplateModal/TemplateModal'
import './Sidebar.css'

export const Sidebar = ({values, handleChange, updateTemplates, templatesChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [output, setOutput] = useState('hex');
    const [cssButton, setCssButton] = useState('Get CSS');
    const [linkButton, setLinkButton] = useState('Get share link');
    const [saveButton, setSaveButton] = useState('Save template')

    const changeSaveButtonTxt = () => {
        setSaveButton('Template saved!');

        setTimeout(() => {
            setSaveButton('Save template');
        }, 1500);
    }

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

    const handleChangeColor = (e) => {
        const { target } = e;
        const { name, value } = target;
        newValues[name] = value;
        handleChange(newValues)
    }

    const handleChangeRandom = () => {
        newValues.color1 = generateRandomColor();
        newValues.color2 = generateRandomColor();
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
            <div className='colors'>    
                <input type='color' name='color1' value={newValues.color1} onChange={handleChangeColor}></input>
                <input type='color' name='color2' value={newValues.color2} onChange={handleChangeColor}></input>
                <button onClick={() => handleChangeRandom()}>Random</button>
            </div>

            <h2>Output format</h2>
            <button id='hex' onClick={() => setOutput('hex')}>Hex</button>
            <button id='rgb' onClick={() => setOutput('rgb')}>Rgb</button>

            <button className='getButton' onClick={() => setIsOpen(true)}>{saveButton}</button>
            <button className='getButton' onClick={() => getCSS(output)}>{cssButton}</button>
            <button className='getButton' onClick={() => getShareLink()}>{linkButton}</button>
            
            <TemplateModal open={isOpen} 
                onClose={() => setIsOpen(false)} 
                values={values} 
                updateTemplates={updateTemplates}
                changeButtonText={changeSaveButtonTxt}
            />
        </div>
    )
}