import './numberSign.css'

import { getNameofNumber } from '../../utils/numberUtils'


interface Props {
    number: number;
    color: '' | 'success' | 'danger';
}
  


function NumberSign({number, color}: Props){
    const getColorClasses = () => {
        return !!color ? `border-${color} text-${color}` : '';
    }
    return( <div className={`card ${getColorClasses()} NumberSign`}>{getNameofNumber(number)}</div> );
}

export default NumberSign