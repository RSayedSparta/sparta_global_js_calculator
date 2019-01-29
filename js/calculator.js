
// get the user inputs
var value1 = null;
var value2 = null;
var choice = null;
var answer = null;
var exit = null;

do {
  value1 = parseFloat(prompt('enter first value'));
  value2 = parseFloat(prompt('enter the second value'));
  choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";

  if (choice == "") {
    alert("(a)dd will be selected as defult operator");
  } else {

    switch (choice) {
      case "a":
      answer= value1 + value2;
      break;
      case "s":
      answer= value1 - value2;
      break;
      case "m":
      answer= value1 * value2;
      break;
      case "d":
      answer= value1 / value2;
      break;
      default:
      alert("Not a valid sum!")
    }
  }

  alert(answer);

  exit = (prompt("Enter 'quit' to exit")).toLowerCase();

} while (exit != "quit");
