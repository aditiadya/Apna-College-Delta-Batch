import './App.css'
import Form from './Form'
import CommentForm from './CommentForm'

//forms in react
//the standard way with forms is to use controlled components. so, we make react state to be "single source of truth".
function App() {
  return (
    <>
      <Form></Form>
      <CommentForm></CommentForm>
    </>
  )
}

export default App
