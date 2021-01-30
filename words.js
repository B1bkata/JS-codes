function words(input) {
    let re = input.match(/[a-z]+/gi)
    re = re.map(function(x){ return x.toUpperCase(); });
    console.log(re.join(", "))

}

words('hello')