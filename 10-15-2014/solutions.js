// All JS code goes in this file.

function palindrome(str){
    str = str.replace(/[^a-z]/gi, '').toUpperCase();
    return str == str.split("").reverse().join("");
}

function coinDeterminer(num){
    var coins = 0;
    var denom = [25, 10, 5, 1];
    for (var coin, i = 0; coin = denom[i++]; i <= denom.length) {
        var r = num % coin;
        coins += (num - r) / coin;
        num = r;
    }
    return coins;
}

function countingMinutes(strArr){
    var minutes = function(strTime) {
        var ss = strTime.split(":");
        var hour = parseInt(ss[0]) % 12;
        var min = parseInt(ss[1].slice(0,2));
        var mer = ss[1].slice(2,4).toLowerCase();

        if (mer == "pm") hour += 12;
        return (hour * 60 + min);
    };

    var times = strArr.split("-");
    var start = minutes(times[0]);
    var end = minutes(times[1]);

    if (start >= end) {
        end += 1440;
    }

    return end - start;
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
