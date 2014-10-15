// All JS code goes in this file.

function palindrome(str){
    rstr = str.replace(/[^A-Za-z]/gi, '').split("").reverse().join("");
    return str.replace(/[^A-Za-z]/gi, '').toUpperCase() == rstr.toUpperCase();
}

function coinDeterminer(num){
    coins = 0;
    while (num >= 25) {
        num -= 25;
        coins++;
    }
    while (num >= 10) {
        num -= 10;
        coins++;
    }
    while (num >= 5) {
        num -= 5;
        coins++;
    }
    return (coins + num);
}

function countingMinutes(strArr){
    return true;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
