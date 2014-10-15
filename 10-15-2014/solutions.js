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
    if (times[0] == times[1]) {
        return 1440;

    }

    var start = times[0].split(":");
    var end = times[1].split(":");
    var h1 = parseInt(start[0] * 60);
    //return start[1];
    var aa = "" + start[1].substring(2,4);
    if (start[0] == 12) {
        h1 = 0;
    }
    if (aa == "pm" && start[0] < 12) {
        //return 999;
        h1 += (12*60);
    }
    //return h1;
    var h2 = parseInt(end[0] * 60);
    var bb = "" + end[1].substring(2,4);
    if (end[0] == 12) {
        h2 = 0;
    }
    if (bb == "pm" && end[0] < 12) {
        //return 999;
        h2 += (12*60);
    }
    if (bb == "am" && aa == "pm") {
        //return "here";
        h2 += 1440;
    }
    //return h2;
    var x = parseInt(start[1].substring(0,2));
    //return x;
    var y = parseInt(end[1].substring(0,2));
    //return y;
    //return (h2 + y);
    //return (h1 + x);
    return (h2 + y) - (h1 + x);
    //return b - a;
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
