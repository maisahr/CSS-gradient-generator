import { useState } from 'react'
import './Directions.css'

export const Linear = () => {

    return(
        <>
            <style>{`
                #linear {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowL1' onClick={() => console.log('hola')}>&#8598;</button>
            <button id='arrowL2'>&uarr;</button>
            <button id='arrowL3'>&#8599;</button>
            <button id='arrowL4'>&larr;</button>
            <button></button>
            <button id='arrowL5'>&rarr;</button>
            <button id='arrowL6'>&#8601;</button>
            <button id='arrowL7'>&#8595;</button>
            <button id='arrowL8'>&#8600;</button>
        </>
    )
}

export const Radial = () => {
    return(
        <>
            <style>{`
                #radial {
                    background-color: #f1f4f8;
                }
            `}</style>

            <button id='arrowR1'>&#8598;</button>
            <button id='arrowR2'>&uarr;</button>
            <button id='arrowR3'>&#8599;</button>
            <button id='arrowR4'>&larr;</button>
            <button id='arrowR5'>&#9675;</button>
            <button id='arrowR6'>&rarr;</button>
            <button id='arrowR7'>&#8601;</button>
            <button id='arrowR8'>&#8595;</button>
            <button id='arrowR9'>&#8600;</button>
        </>
    )
}