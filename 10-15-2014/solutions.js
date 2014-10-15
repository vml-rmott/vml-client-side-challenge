// All JS code goes in this file.

function palindrome(str){
    var rstr = str.replace(/[^A-Za-z]/gi, '').split("").reverse().join("");
    return str.replace(/[^A-Za-z]/gi, '').toUpperCase() == rstr.toUpperCase();
}

function coinDeterminer(num){
    var coins = 0;
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
    var times = strArr.split("-");

    var makeMinutes = function(strTime) {
        var ss = strTime.split(":");
        var h2 = parseInt(ss[0] * 60);
        var bb = "" + ss[1].slice(2,4);
        if (ss[0] == 12) {
            h2 = 0;
        }
        if (bb == "pm" && ss[0] < 12) {
            h2 += (12*60);
        }
        var y = parseInt(ss[1].slice(0,2));
        return (h2 + y);
    };

    var startMinutes = makeMinutes(times[0]);
    var endMinutes = makeMinutes(times[1]);

    if (startMinutes >= endMinutes) {
        endMinutes += 1440;
    }

    return endMinutes - startMinutes;
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
