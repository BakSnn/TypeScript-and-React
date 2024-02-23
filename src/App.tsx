import { SetStateAction, useState } from 'react'
import './App.css'
import DefaultComponent from './components/DefaultComponent'

function App() {
  const changeProp = () => {
    if(inputvalue !== '')
    setProp(inputvalue)
  }
  const changeInputValue = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(event.target.value)
  }
  const [prop, setProp] = useState("{You'r name}")
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <input type="text" placeholder="Enter you'r name" value={inputvalue} onChange={changeInputValue}></input>
      <h2>Enter your name to say you hello</h2>
      <DefaultComponent name={prop}></DefaultComponent>
      <button onClick={changeProp}>Say hello</button>
    </>
  )
}

export default App
