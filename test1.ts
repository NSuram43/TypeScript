function palindrome(str: string) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palindrome("racecar"))
console.log(palindrome("hello"))
console.log(palindrome("madam"))
console.log(palindrome("level"))
console.log(palindrome("rotor"))
console.log(palindrome("deified"))
console.log(palindrome("civic"))
console.log(palindrome("radar"))
console.log(palindrome("refer"))