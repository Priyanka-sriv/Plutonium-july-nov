// Problem 3
// part1
const  names = "     functionUp      "
 const space =function(){
    let  removeSpace = names.trim();
    console.log(removeSpace);

 }
// part2
const smallLetterName = "FUNCTIONUP";
const changeInSmall = function(){
const letterOutput = smallLetterName.toLowerCase();
console.log(letterOutput);
}


// part3
const capitalLetterName = "functionup";
const changeInCapital = function(){
 const showOutput = capitalLetterName.toLocaleUpperCase();
 console.log(showOutput);
}
module.exports.space =space;
module.exports.changeInSmall=changeInSmall;
module.exports.changeInCapital=changeInCapital;