function rotate(input, rotate){
    for (let i = 0; i < rotate; i++) {
        input.unshift(input.pop())
    }
    return input.join(' ')
}

console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

))