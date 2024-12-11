import React , {useContext} from 'react'
import { counterContext } from '../context/context'

const Change = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      <h1>directly using from App-{counter}</h1>
    </div>
  )
}

export default Change
