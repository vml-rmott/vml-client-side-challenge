// All JS code goes in this file.

function palindrome(str){
    rstr = str.split("").reverse().join("");
    return str.toUpperCase() == rstr.toUpperCase() ? true : false;
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
