function cooking(input) {
    let number =input[0];
    for(let i = 1; i < input.length; i++) {
        switch(input[i]) {
            case 'chop':
                number /= 2;
            break;
            case 'dice':
                number = Math.sqrt(number);
            break;
            case 'spice':
                number += 1;
            break;
            case 'bake':
                number *= 3;
            break;
            case 'fillet':
                number *= 0.80;
            break;
        }
        console.log(number)
    } 
}


cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])