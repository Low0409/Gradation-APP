import React, { useState } from 'react'
import Styles from '../../styles/Home.module.css'
const rectangle = (props) => {

    let [color1, setColor1] = useState("hsl(0, 100%, 50%)")
    let [color2, setColor2] = useState("hsl(322, 100%, 50%)")

    const click = () =>{
        const randomHue = Math.trunc(Math.random() * 360);
        let rectangle = document.querySelector("#rectangle");

        setColor1(color1=`hsl(${randomHue}, 100%, 50%)`)
        setColor2(color2=`hsl(${randomHue + 40}, 100%, 50%)`)

        
        rectangle.style.setProperty("--start", color1);
        rectangle.style.setProperty("--end", color2);

    }
    return (
        <>
        <div id="rectangle"className={Styles.rectangle}>

        </div>
        {/* <button className={Styles.button} onClick={click}>カラー変更</button> */}
        <button className="btn btn-primary" onClick={click}>カラー変更</button>

        </>
    )
}

export default rectangle
