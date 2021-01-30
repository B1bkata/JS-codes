function addRemove (input) {
    let initailNumber = 1;
    let result = [];
    for ( let i = 0; i < input.length; i++){
        if (input[i] == 'add'){
            result.push(initailNumber);
        }else {
            result.pop();
        }
        initailNumber += 1;
    }
    if (result.length > 0) {
        return result.join('\n')
    }else {
        return 'Empty'
    }  
}


console.log(addRemove(['remove', 
'remove', 
'remove']
))