import './App.css'
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';

//State in react : the state is built-in react object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

//Hooks : they are new addition in react. they let us use state and other js features without writing a class

//useState() : it is a react hook that lets you add a state variable to your component. returns an array with exactly two values.
// const [state, setState] = useState(initialState);
function App() {
  return (
    <>
      <h1>States in React</h1>
      <Counter></Counter>
      <LikeButton></LikeButton>
    </>
  );
}

export default App
