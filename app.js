// var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var small = "abcdefghijklmnopqrstuvwxyz";
// var num = "0123456789";
// var special = "@#$%^&*()";

// var password = "";

// console.log(password);

// for (var i = 0; i < 10; i++) {
//     if (i < 3) {
//         var random = Math.floor(Math.random() * cap.length);
//         password += cap[random];
//     } else if (i > 2 && i < 6) {
//         var random = Math.floor(Math.random() * small.length);
//         password += small[random];
//     } else if (i > 5 && i < 9) {
//         var random = Math.floor(Math.random() * num.length);
//         password += num[random];
//     } else {
//         var random = Math.floor(Math.random() * special.length);
//         password += special[random];
//     }
// }

// console.log(password);


var birthday = prompt("Enter your birthday", "15 feb 2004");
var today = new Date();
var birthdayDate = new Date(birthday);
var diff = today.getTime() - birthdayDate.getTime();
var diffYear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
var diff٘Months = diff / (1000 * 60 * 60 * 24 * 30);
var diff٘Days = diff / (1000 * 60 * 60 * 24);

var final = "Your age is " + Math.round(diffYear) + " years " + Math.round(diff٘Months) + " months " + Math.round(diff٘Days) + " days";

document.write(final);