let shift = 0,
  caps = 0;

function intoScreen(x) {
  let box = document.getElementsByClassName("screen")[0];
  let data = box.innerText;
  data += x;
  box.innerText = data;
}

function cannot() {
  makeShift0();
  alert("Cannot activate through virtual keyboard");
}

function double(block) {
  shift == 1 ? (shift = 0) : (shift = 1);
  let ans = block.children[shift].innerText;
  makeShift0();
  intoScreen(ans);
}

function backspace() {
  let box = document.getElementsByClassName("screen")[0];
  let data = box.innerText;
  let ans = data.substring(0, data.length - 1);
  box.innerText = ans;
  makeShift0();
}

function tab() {
  let box = document.getElementsByClassName("screen")[0];
  let data = box.innerText;
  data = data + "  a  ";
  box.innerText = data;
  makeShift0();
}

function letter(block) {
  let ans = block.children[0].innerText;
  if (caps == 1 || shift == 1) {
    ans = ans.toUpperCase();
    makeShift0();
  } else ans = ans.toLowerCase();
  intoScreen(ans);
}

function activateCaps() {
  let circle = document.getElementById("circle2");
  if (caps == 1) {
    caps = 0;
    circle.style = "background-color: white";
  } else {
    caps = 1;
    circle.style = "background-color: green";
  }
  makeShift0();
}

function enter() {
  intoScreen("\n");
  makeShift0();
}

function activateShift() {
  if (shift == 1) makeShift0();
  else shift = 1;
}

function makeShift0() {
  shift = 0;
  let circle = document.getElementById("circle1");
  circle.style = "background-color: white";
}

let s1 = document.getElementById("shift1");
s1.addEventListener("click", function () {
  let circle = document.getElementById("circle1");
  if (shift == 1) {
    console.log("green");
    circle.style = "background-color: green";
  } else circle.style = "background-color: white";
});

let s2 = document.getElementById("shift2");
s2.addEventListener("click", function () {
  let circle = document.getElementById("circle1");
  if (shift == 1) {
    console.log("green");
    circle.style = "background-color: green";
  } else {
    circle.style = "background-color: white";
  }
});
