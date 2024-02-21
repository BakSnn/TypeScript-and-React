import { SetStateAction, useState } from 'react'
import './App.css'
import DefaultComponent from './components/DefaultComponent'

function App() {
  const changeProp = () => {
    setProp(inputvalue)
  }
  const changeInputValue = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(event.target.value)
  }
  const [prop, setProp] = useState('')
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <input type="text" value={inputvalue} onChange={changeInputValue}></input>
      <h2>Enter your name to say you hello</h2>
      <DefaultComponent name={prop}></DefaultComponent>
      <button onClick={changeProp}>Say hello</button>
    </>
  )
}

export default App
