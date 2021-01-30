function sumDigits(n) {
    let sum = 0;
    let lastDigit = n % 10;
    let isEqual = true;
    while (n / 10 > 0) {
        let digit = n % 10;
        sum += digit;

        if (digit !== lastDigit){
            isEqual = false;
        }
    lastDigit = digit
    n = Math.floor(n / 10);
    }
    console.log(isEqual)
    console.log(sum)
}

sumDigits(2222222)