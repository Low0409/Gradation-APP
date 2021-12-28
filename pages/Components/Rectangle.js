import React, { useState } from 'react'
import Styles from '../../styles/Home.module.css'
const rectangle = (props) => {

    let [color1, setColor1] = useState("hsl(0, 100%, 50%)")
    let [color2, setColor2] = useState("hsl(322, 100%, 50%)")

    const click = () =>{
        let log = document.getElementById("list");

        const randomHue = Math.trunc(Math.random() * 360);
        let rectangle = document.querySelector("#rectangle");

        setColor1(color1=`hsl(${randomHue}, 100%, 50%)`)
        setColor2(color2=`hsl(${randomHue + 40}, 100%, 50%)`)

        log.innerHTML = (`background-image: linear-gradient(-135deg, ${color1},${color2});`)
        rectangle.style.setProperty("--start", color1);
        rectangle.style.setProperty("--end", color2);

    }
    return (
        <>
        <div id="rectangle"className={Styles.rectangle}>
        <h3 id="list">background-image: linear-gradient(
    -135deg,
    hsl(249, 55%, 51%),
    hsl(322, 100%, 50%)
  );</h3>

        </div>
        {/* <button className={Styles.button} onClick={click}>カラー変更</button> */}
        <button className="btn btn-primary" onClick={click}>カラー変更</button>
        {/* <button className="btn btn-primary" onClick={click}>プロパティ―コピー</button> */}

        </>
    )
}

export default rectangle
