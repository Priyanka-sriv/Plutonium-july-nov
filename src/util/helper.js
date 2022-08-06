// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is …..
//  For example - Radon, W3D3, the topic for today is Nodejs module system’
// Problem2
// part1
const presentDate = function(){
const currentDate = new Date() ;
console.log(currentDate);
}
// part2
const month = ["January","February","March","April","May",
"June","July","August","September","October","November","December"];
const currentMonth = function(){
const days = new Date();
let myMonths =  month[days.getMonth()];
console.log(myMonths);
}
// part3
const getBatchInfo = function(){
    console.log("Plutonium, W3D3, the topic for today is Nodejs module system’");
}
module.exports.presentDate=presentDate;
module.exports.currentMonth=currentMonth;
module.exports.getBatchInfo=getBatchInfo;