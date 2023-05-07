
export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
  

export function getNameofNumber(number: number){
    const numbers = ['cero', 
                        'uno',
                        'dos',
                        'tres',
                        'cuatro',
                        'cinco',
                        'seis',
                        'siete',
                        'ocho',
                        'nueve',
                        'diez',
                        'once',
                        'doce',
                        'trece',
                        'catorce',
                        'quince',
                        'dieciséis',
                        'diecisiete',
                        'dieciocho',
                        'diecinueve',
                        'veinte',
                        'veintiuno',
                        'veintidós',
                        'veintitrés',
                        'veinticuatro',
                        'veinticinco',
                        'veintiséis',
                        'veintisiete',
                        'veintiocho',
                        'veintinueve'];
    const tens = [ 'cero',
                    'diez',
                    'veinte',
                    'treinta',
                    'cuarenta',
                    'cincuenta',
                    'sesenta',
                    'setenta',
                    'ochenta',
                    'noventa',
                    'cien' ];
    if(number > 100){
        return -1;
    }else{
        if(number < 30){
            return numbers[number];
        }else{
            let one = +number.toString().slice(-1);
            let ten = ( number - one ) / 10;
            if(one == 0){
                return tens[ten];
            }else{
                return tens[ten] + ' y ' + numbers[one];
            }
        }
    }
};