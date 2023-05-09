import { SyntheticEvent, useState, KeyboardEvent } from 'react';
import './numberInput.css'


interface Props{
    onResultSubmit: (result: number)=>void;
}

function NumberInput({onResultSubmit}:Props){

    const [result, setResult] = useState('');

    const updateResult = (number: number) => {
        setResult((preValue) => {
            return preValue +  number.toString();
        });
    }

    const submitResult = () => {
        onResultSubmit(+result);
        setResult('');
    }

    const createButtons = (quantity: number, offset: number) => {
        var elements = [];
        for(let i = 1; i <= quantity; i++){
            elements.push(<button key={i} className="btn btn-lg btn-secondary" onClick={()=>updateResult(i + offset)}>{i + offset}</button>);
        }
        return elements;
    }

    const handleChange = (event: SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        setResult(target.value);
    } 

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
          submitResult();
        }
    }

    return(
        <div className="NumerWrapper">
            <div className="input-group">
                <input className="form-control" value={result}  onChange={handleChange} onKeyDown={handleKeyPress} />
                <button className="btn btn-lg btn-primary SubmitButton" onClick={()=>setResult('')}>🞩</button>
            </div>
            <div className="NumPad">
                { createButtons(3, 6) }
                { createButtons(3, 3) }
                { createButtons(3, 0) }
                <span></span>
                <button className="btn btn-lg btn-secondary" onClick={()=>updateResult(0)}>0</button>
                <span></span>

                <button className="btn btn-lg btn-primary SubmitButton" onClick={()=>submitResult()}>confirmar</button>
            </div>
        </div>
    );
}

export default NumberInput
