/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/


const rotateString = (str, num) => {
    // string @ index 0 is equal to 5 will give u an error
    let output = "";
    num = num % str.length

    for (let j = str.length - num; j < str.length; j++) {
        output += str[j]
    }

    for (let i = 0; i < str.length - num; i++) {
        output += str[i]
    }
    console.log(output)
    return output
}

rotateString("good morning america", 5) // ericagood morning am

const isRotation = (str1, str2) => {
    if(str1.length != str2.length) {
        return false;
    }
    var newStr = str2;
    for (var i = 0; i < str1.length; i++) {
        if(newStr == str1) {
            return true;
        }
        newStr += newStr[0];
        newStr = newStr.substr(1);
        console.log(newStr);
    }
    return false;
}

console.log(isRotation("good morning", "rninggood mo"))
/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


*/