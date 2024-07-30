import './App.css'
import Lottery from './Lottery'
import { sum } from './helper';

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
      {/* <Ticket ticket={[0, 1, 2]}></Ticket> */}
      {/* <Ticket ticket={[0, 1, 2, 3, 4]}></Ticket> */}
    </>
  );
}

export default App
