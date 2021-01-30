import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Title = ({ text }) => <p>{text}</p>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text='give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

      <Title text='statistics' />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))