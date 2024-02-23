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
      <h2>Enter your name to say you hello</h2>
      <input type="text" placeholder="Enter you'r name" value={inputvalue} onChange={changeInputValue} className='inputLabel'></input>
      <br></br>
      <button onClick={() => {setProp("Неугадал кнопку 😝")}}>Say hello</button>
      <button onClick={changeProp}>Say hello</button>
      <button onClick={() => {setProp("Неугадал кнопку 🙂")}}>Say hello</button>
      <button onClick={() => {setProp("Неугадал кнопку 😛")}}>Say hello</button>
      <button onClick={() => {setProp("Неугадал кнопку 🤓")}}>Say hello</button>
      <DefaultComponent name={prop}></DefaultComponent>

    </>
  )
}

export default App
