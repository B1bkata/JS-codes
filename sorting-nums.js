function sortingNums(input) {
    let newArr = [];
    while (input.length > 0){
        let minNum = Math.min(...input)
        let maxNum = Math.max(...input)
        let forDeletion = [minNum, maxNum]
        newArr.push(minNum)
        newArr.push(maxNum)
        input = input.filter(item => !forDeletion.includes(item))
    }
    console.log(newArr.join('\n'))
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
