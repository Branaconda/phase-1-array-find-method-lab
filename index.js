// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function yearRecord(recordLog) {
    if (recordLog.result == "W") {
        return true;
    }
    else return false;
}
function superbowlWin(records) {

    if (records.find(yearRecord)) {
        return records.find(yearRecord).year;
    }
    else return undefined;
}