import React, {useState} from 'react';
import SingleColor from "./SingleColor.jsx";
import {nanoid} from "nanoid";

const ColorList = ({colors}) => {
    console.log(colors)
    return (
        <section className='colors'>
            {colors.map((color, index)=>{
                return <SingleColor key={nanoid()} color={color} index={index}/>
            })}
        </section>
    );
}

export default ColorList;