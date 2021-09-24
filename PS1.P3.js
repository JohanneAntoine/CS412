const funcOnString = (str, decorator) => decorator(str);

result1 = funcOnString('supercalifragilisticexpialidocious', str => {
    let splitString = str.split('c');
    for (let i = 1; i < splitString.length; i++) {
        splitString[i] = "c" + splitString[i];
    }
    return splitString;
});

//helper function
const countCharacters = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count ++;
        }
    }
    return count;
}
result2 = funcOnString('supercalifragilisticexpialidocious', str => {
    return {
        originalString: str,
        modifiedString: str.replaceAll('a', 'A'),
        numberReplaced: countCharacters(str.replaceAll('a', 'A'), 'A'),
        length: (str.replace('a', 'A')).length
    }
});



console.log(result1);
console.table(result2);