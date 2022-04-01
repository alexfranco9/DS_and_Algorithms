// given a number of minutes past midnight, determine
// the angle between the hour and minute hands at that point in time
// keep in mind that on an analog clock, the hour hand is
// not perfectly aligned with the number hour
// e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

// Ex: clockAngles(360) should return 180 (it is 6 o'clock)
// Ex: clockAngles(180) should return 90 (it is 3 o'clock)

function clockAngles(minutes) {
    minDegree = (minutes % 60) * 6;
    hrDegree = (minutes % 720) * .5;
    return hrDegree > minDegree ? hrDegree - minDegree : minDegree - hrDegree;
}

console.log(clockAngles(180));
console.log(clockAngles(195));
console.log(clockAngles(90));
console.log(clockAngles(45));
