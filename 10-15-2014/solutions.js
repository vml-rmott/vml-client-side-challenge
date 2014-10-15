// All JS code goes in this file.

function palindrome(str){
    rstr = str.replace(/[^A-Za-z]/gi, '').split("").reverse().join("");
    return str.replace(/[^A-Za-z]/gi, '').toUpperCase() == rstr.toUpperCase();
}

function coinDeterminer(num){
    return true;
}

function countingMinutes(strArr){
    return true;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
