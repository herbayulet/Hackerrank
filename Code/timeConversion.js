function timeConversion(s) {
    let amPm = s.charAt(8);
    console.log(amPm);
    let militaryHour = "";
    if (amPm == "A") {
        if (s.substring(0, 2) == "12") {
            militaryHour = "00";
        } else {
            militaryHour = s.substring(0, 2);
        }
    } else {
        //P
        if (s.substring(0, 2) == "12") {
            militaryHour = s.substring(0, 2);
        } else {
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
    return militaryHour + s.substring(2, 8);
}
console.log(timeConversion("07:05:45PM"));
