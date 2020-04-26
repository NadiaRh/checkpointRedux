import React ,{useState} from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from './actions/CounterActions'
import './App.css';

function App(props) {
  const [step, setStep] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
      <select style={{ boxSizing:"border-box",height:"40px", width:"40px",borderRadius:"5px",border:"1px solid"}} onChange={e => setStep(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="100">100</option>
          <option value="250">250</option>
          <option value="500">500</option>
        </select>

        <button style={{cursor:"pointer",border:"none",padding:"10px 15px",borderRadius:"5px",backgroundColor:"pink"}} onClick={() => props.inc(step)}>+</button>
        {props.counter.counter}
        <button style={{cursor:"pointer",border:"none",padding:"10px 15px",borderRadius:"5px",backgroundColor:"pink"}} onClick={() => props.dec(step)}>-</button>
      </header>
    </div>
  );
}
const mapStateToProps=state=> {
  return{
    counter:state.CounterReducer
  }
}
const mapDispatchToProps = dispatch => {
  return{
    inc: (amount) => dispatch(increment(amount)),
    dec: (x) => dispatch(decrement(x)),
  } }

export default connect(mapStateToProps,mapDispatchToProps)(App);
