import React from 'react'
import styles from "./Buttoncontainer.module.css"

function Buttoncontainer({onbuttonclick}) {

    let buttons = ['C','1','2','+','3','4','-'
    ,'5','6','*','7','8','/','=','9','0','.']
  return (
    <>
    <div className={styles.buttonConatiner}>
        {buttons.map((item)=><button key={item} 
        onClick={()=>{onbuttonclick(item)}}className={styles.button}
        >{item}</button>)}
    </div></>
  )
}
export default Buttoncontainer