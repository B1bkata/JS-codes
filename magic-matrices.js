function magicMatrice(input){
    let sumRow = input[0].reduce((total, a) => total + a, 0)
    let isEqual = true;
    let sumCol = 0
    input.forEach(element => {
        sumCol += element[0] 
    });
    for ( let i = 0; i < input.length; i++){
        let currentSum = input[i].reduce((total, a) => total + a, 0)
        if (currentSum != sumRow){
            isEqual = false
    }

    } 
    console.log(isEqual)
}
magicMatrice([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )