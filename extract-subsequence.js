function extract(input) {
    let result = input.filter((x, i, input) => x >= input[i - 1] || i == 0)
    return result
}
console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))