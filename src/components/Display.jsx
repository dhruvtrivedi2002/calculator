import React from 'react'
import styles from "../App.module.css"
function Display({Displayvalue}) {
  return (
    <>
    <input type="text" className={styles.display} 
    value={Displayvalue} readOnly/></>
  )
}

export default Display