onEvent("greenButton", "click", function( ) {
  setProperty("mainScreen", "background-color", "red");
  setProperty("label", "background-color", "blue");
  setProperty("label", "text", "I am just a normal and simple text, what you dont know is something you don't even think off...");
});
onEvent("blueButton", "click", function( ) {
  setProperty("mainScreen", "background-color", "blue");
  setProperty("label", "background-color", "#FF0000");
    setProperty("label", "text", "I am just a normal and simple text, what you don't know is soemthing you don't even think off...");
});
onEvent("dropDownList", "change", function( ) {
  if (getText("dropDownList") == "Something wrong with spelling") {
    setProperty("resultLabel", "text", "You are right");
    setProperty("resultLabel", "text-color", "green");
  } else {
    setProperty("resultLabel", "text", "You are wrong... Try again");
    setProperty("resultLabel", "text-color", "green");
  }
});
