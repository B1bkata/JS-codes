function sortCriteria(input) {
    let result = input.sort((a, b) => (a.length - b.length) || a[0].localeCompare(b[0]));
    return result.join('\n');
}

console.log(sortCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

))