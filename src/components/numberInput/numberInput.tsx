import { useState } from 'react';
import './numberInput.css'

// add return value for result
// add delete button
// add state for result

interface Props{
    onResultSubmit: (result: number)=>void;
}

function NumberInput({onResultSubmit}:Props){

    const [result, setResult] = useState('');

    function updateResult(number: number){
        setResult((preValue) => {
            return preValue +  number.toString();
        });
    }

    function submitResult(){
        onResultSubmit(+result);
        setResult('');
    }

    function createButtons(quantity: number){
        var elements = [];
        for(let i =1; i <= quantity; i++){
            elements.push(<button className="btn btn-secondary" onClick={()=>updateResult(i)}>{i}</button>);
        }
        return elements;
    }

    return(
        <div className="NumerWrapper">
            <div className="input-group">
                <input className="form-control" value={result} />
                <button className="btn btn-primary SubmitButton" onClick={()=>setResult('')}>🞩</button>
            </div>
            <div className="NumPad">
                {
                    createButtons(9)
                }
                <span></span>
                <button className="btn btn-secondary" onClick={()=>updateResult(0)}>0</button>
                <span></span>

                <button className="btn btn-primary SubmitButton" onClick={()=>submitResult()}>submit</button>
                
            </div>
        </div>
    );
}

export default NumberInput
