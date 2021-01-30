function neededMoney(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let moneyNeeded = price * weightInKg
    return `I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
}

console.log(neededMoney('orange', 2500, 1.80))