"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "tail";
var age = 2;
var married = true;
var hobbies = ["1", "2", "3"];
var interests = ["4", "5", "6"];
// 元祖类似一个数组 它是一个长度和类型都固定的数组
var point = [100, 100];
console.log(age);
var Gender;
(function (Gender) {
    Gender[Gender["BODY"] = 1] = "BODY";
    Gender[Gender["GIRL"] = 2] = "GIRL";
})(Gender || (Gender = {}));
console.log(Gender.BODY);
console.log(Gender.GIRL);
var root = document.getElementById("root");
root.style.color = "red";
var myname1 = null;
var myname2 = undefined;
var x;
x = 1;
x = undefined;
x = null;
function greeting(name) {
    console.log('hello world');
}
greeting('null');
