var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

var summation = function (num) {
    let i = 1, s = 1;
    while(i++ < num); {s += i};
    return s;
}