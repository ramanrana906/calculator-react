import React,{useState} from "react";
import { evaluate } from "mathjs";

function Calculator(){
    
    const [result,setResult] = useState("");
    
    function submit(e)  {
        e.preventDefault();
        setResult((result) => evaluate(result));
      };

    function handleClear(e){
        setResult("");
    }
    return(
  <div id="calculator" className="calculator">
  <div className="result"><p>{result}</p></div>
  
  <form onSubmit={submit}>
 
  <button type="button"className="clear grey" onClick={handleClear} >AC</button>

  <button type="button" className="operator" >+/-</button>


  <button type="button"className="operator" onClick={() => setResult((ex) => `${ex}%`)}  >%</button>

  <button type="button"className="operator" onClick={() => setResult((ex) => `${ex}/`)}  >÷</button>



  <button type="button" onClick={() => setResult((ex) => `${ex}7`)} >7</button>
  <button type="button" onClick={() => setResult((ex) => `${ex}8`)}>8</button>
  <button type="button" onClick={() => setResult((ex) => `${ex}9`)}>9</button>
  
  <button type="button" className="operator" onClick={() => setResult((ex) => `${ex}*`)} >x</button>


  <button  value="4" onClick={() => setResult((ex) => `${ex}4`)}>4</button>
  <button  value="5" onClick={() => setResult((ex) => `${ex}5`)}>5</button>
  <button  value="9" onClick={() => setResult((ex) => `${ex}6`)}>6</button>
  
  <button type="button" className="operator" onClick={() => setResult((ex) => `${ex}*`)}>-</button>

  
  
  <button type="button" onClick={() => setResult((ex) => `${ex}1`)} >1</button>
  <button type="button" onClick={() => setResult((ex) => `${ex}2`)} >2</button>
  <button type="button" onClick={() => setResult((ex) => `${ex}3`)}>3</button>
 
  <button type="button" className="operator" onClick={() => setResult((ex) => `${ex}+`)} >+</button>
  
  <button type="button" className="double" onClick={() => setResult((ex) => `${ex}0`)} >0</button>
  <button type="button" onClick={() => setResult((ex) => `${ex}.`)}>.</button>

  <button className="operator"  type="submit">=</button>
  </form>
</div>
    )
}

export default Calculator;