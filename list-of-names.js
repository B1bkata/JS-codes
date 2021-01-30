function names(input){
    input.sort()
    input.forEach(function(element, index) {
        console.log(`${index + 1}.${element}`)
    });
}

names(["John", "Bob", "Christina", "Ema"])