import { SetStateAction, useState } from 'react'
import './App.css'
import DefaultComponent from './components/DefaultComponent'
import Buttons from './UI/Button/Button.jsx'
function App() {
  const changeProp = () => {
    if(inputvalue !== '')
    setProp(inputvalue)
    else
    setProp("Сначала введите имя")
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
      <input type="text" placeholder="Enter you'r name here" value={inputvalue} onChange={changeInputValue} className='inputLabel'></input>
      <br></br>
      <button onClick={() => {setProp("Не угадал кнопку 😝")}}>Say hello</button>
      <button onClick={changeProp}>Say hello</button>
      <button onClick={() => {setProp("Не угадал кнопку 🙂")}}>Say hello</button>
      <button onClick={() => {setProp("Не угадал кнопку 😛")}}>Say hello</button>
      <button onClick={() => {setProp("Не угадал кнопку 🤓")}}>Say hello</button>
      <Buttons onClick={() => {setProp("Угадал кнопку, но она ничего не делает")}} text = 'Нажми на меня'></Buttons>
      <DefaultComponent name={prop}></DefaultComponent>
    </>
  )
}

export default App
