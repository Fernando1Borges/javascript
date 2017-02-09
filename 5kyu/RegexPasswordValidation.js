// 5kyu Kata Completed 02/09/17
//You need to write regex that will validate a password to make sure it meets the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  if (!(password.match(/[\.\;]/)) && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/.{6}/) && password.match(/\d/) && !(password.match(/\s/)))
    return true;
  else
    return false;
}



//Other solutions
//
// function validate(password) {
//   return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{6,}$/.test(password);
// }
//
// function validate(password) {
//   return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
// }
//
// function validate(password) {
//   return password.length >= 6 &&
//     /[A-Z]/.test(password) &&
//     /[a-z]/.test(password) &&
//     /\d/.test(password) &&
//     /^([a-zA-Z]|\d)*$/.test(password);
// }

// SO answers
// function checkPwd(str) {
//     if (str.length < 6) {
//         return("too_short");
//     } else if (str.length > 50) {
//         return("too_long");
//     } else if (str.search(/\d/) == -1) {
//         return("no_num");
//     } else if (str.search(/[a-zA-Z]/) == -1) {
//         return("no_letter");
//     } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
//         return("bad_char");
//     }
//     return("ok");
// }
// 
//
// $(".buttonClick").click(function () {
//
//     if ($("input[type=text]").filter(function () {
//         return this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
//     })) {
//         $("div").text("pass");
//     } else {
//         $("div").text("fail");
//     }
//
// });
