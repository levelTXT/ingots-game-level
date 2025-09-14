const парамКнопокПоля = [
  "металлургия", 1, 100, "шахта", 1, 100, "рынок", 1, 250, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500, "нету", 0, 500
];
function loadButton() {
let buttonID = 0;
for (let i = 0; i < парамКнопокПоля.length; i += 3) {
buttonID++;
if ("металлургия" === парамКнопокПоля[i]) {
document.querySelector(`#button${buttonID}`).innerText = "🔥";
}
  else if ("шахта" === парамКнопокПоля[i]) {  document.querySelector(`#button${buttonID}`).innerText = "🪨";
  }
  else if ("рынок" === парамКнопокПоля[i]) {  
document.querySelector(`#button${buttonID}`).innerText = "🏪";
  }
  else {
document.querySelector(`#button${buttonID}`).innerText = "➕";
    console.log()
  };
};
  buttonID = 0;
};
const менюУлуч = document.querySelector(".upgradeMenu");
const затемФона = document.querySelector(".invLay");
function улучшение(open, clip, type, level, cost) {
  if (open) {
менюУлуч.style.visibility = "visible";
затемФона.style.visibility = "visible";
  }
  else {
    менюУлуч.style.visibility = "hidden";
затемФона.style.visibility = "hidden";
  };
  if (type === "металлургия") {
document.querySelector("#updMenuImg").innerText = "🔥";
  }
  else if (type === "шахта") {   document.querySelector("#updMenuImg").innerText = "🪨";
  }
  else if (type === "рынок") {  document.querySelector("#updMenuImg").innerText = "🏪"
  }
  else { document.querySelector("#updMenuImg").innerText = "➕";
  };
document.querySelector("#updMenulevel").innerHTML = level;
document.querySelector("#updMenuType").innerHTML = type;
};
loadButton();
