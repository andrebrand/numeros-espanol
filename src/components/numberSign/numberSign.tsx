import './numberSign.css'

import { getNameofNumber } from '../../utils/numberUtils'


interface Props {
    number: number;
    color: '' | 'success' | 'danger';
}
  

function NumberSign({number, color}: Props){
    return( <div className={`card border-${color} text-${color} NumberSign`}><h1>{getNameofNumber(number)}</h1></div> );
}

export default NumberSign