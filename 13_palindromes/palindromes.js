const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890'
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('')

    return true ? cleanedString.split('').reverse().join('') == cleanedString : false
    
};

// Do not edit below this line
module.exports = palindromes;
