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
    times = strArr.split("-");
    start = times[0].split(":");
    end = times[1].split(":");
    h1 = parseInt(start[0] * 60);
    //return start[1];
    aa = "" + start[1].substring(-2,2);
    if (aa == "pm") {
        //return 999;
        h1 += 12*60;
    } else {
        if (start[0] == 12) {
            h1 = 0;
        }
    }
    //return h1;
    h2 = parseInt(end[0] * 60);
    bb = "" + end[1].substring(-2,2)
    if (bb == "pm") {
        //return 999;
        h2 += 12*60;
    } else {
        if (end[0] == 12) {
            h2 = 0;
        }
    }
    if (bb == "am" || aa == "pm") {
        //return "here";
        h2 += 24*60;
    }
    if (bb == aa && h1 == h2 && x == y) {
        return 1440;
    }
    //return h2;
    x = parseInt(start[1].substring(-4,2));
    //return x;
    y = parseInt(end[1].substring(-4,2));
    //return y;
    //return (h2 + y);
    //return (h1 + x);
    return (h2 + y) - (h1 + x);
    //return b - a;
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
