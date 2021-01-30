function printNEl(input, step) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % step == 0){
            result.push(input[i])
        }
      
    }
return result  
}

console.log(printNEl(['1', 
'2',
'3', 
'4', 
'5'], 
6
))