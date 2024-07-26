import './App.css'
import Counter from './Counter.jsx'

//closure :  a closure is a feature in javascript where an inner function has access to outer (enclosing) function's variables.
//in js, once a function completes its execution, any variables that were defined inside the function scope will be deleted.

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
