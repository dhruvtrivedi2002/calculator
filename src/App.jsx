import React, { useState } from 'react'
import styles from "./App.module.css"
import Buttoncontainer from './components/Buttoncontainer'
import Display from './components/Display'

function App() {

  const [calVal, setcalVal] = useState("")
  const onbuttonclick = (btntext) =>{
    if (btntext==='C') {
      setcalVal("")
    }
    else if (btntext==='=') {
      const result = eval(calVal)
      setcalVal(result)
    }
    else{
      const newdsiplayvalue = calVal+btntext
      setcalVal(newdsiplayvalue)
    }
  }

  return (
    <>
    <div className={styles.calculator}>
      <Display Displayvalue={calVal}></Display>
      <Buttoncontainer onbuttonclick={onbuttonclick}></Buttoncontainer>
    </div>
    </>
  )
}

export default App