const reverseAlpha = str => {
    lst = str.split('');
    console.log(lst)
    lst2 = lst.sort().reverse();
    return lst2.join('');
}
const testString = 'supercalifragilisticexpialidocious';

console.log(`${testString} in reverse alphabetical order is ${reverseAlpha(testString)}`);