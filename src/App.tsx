import { SetStateAction, useState } from 'react'
import './App.css'
import DefaultComponent from './components/DefaultComponent'

function App() {
  const changeProp = () => {
    setProp(inputvalue)
  }
  const changeInputValue = (event: { target: { value: SetStateAction<string> } }) => {
    setInputValue(event.target.value)
  }
  const [prop, setProp] = useState('')
  const [inputvalue, setInputValue] = useState('')

  return (
    <>
      <input type="text" value={inputvalue} onChange={changeInputValue}></input>
      <DefaultComponent name={prop}></DefaultComponent>
      <h1>Vite + React</h1>
      <button onClick={changeProp}>Click me</button>
    </>
  )
}

export default App
