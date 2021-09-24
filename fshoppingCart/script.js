let form = document.getElementById("form");
form.addEventListener("submit", addition);
let tamt = 0;
let amount = document.getElementById("sum");
amount.innerText = tamt;

window.addEventListener("DOMContentLoaded", reconstruct);

let map = new Map();
function addition(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  if (name == "" || price == "" || quantity == "") {
    alert("Sorry! Enter all fields.");
  } else {
    console.log(map);
    if (map.has(name)) {
      alert("Item already present!");
      let manRow = document.getElementById(map.get(name));
      let editbtn = document.createElement("button");
      editbtn.innerText = "Edit";
      editbtn.id = "editbtn";
      manRow.appendChild(editbtn);
      editbtn.addEventListener("click", Edit);
    } else {
      let ts = Date.now();
      let row = document.createElement("tr");
      let c1 = document.createElement("td");
      c1.innerText = name;
      let c2 = document.createElement("td");
      c2.innerText = price;
      let c3 = document.createElement("td");
      c3.innerText = quantity;
      let c4 = document.createElement("td");
      let rmbtn = document.createElement("button");
      rmbtn.id = "rmbtn";
      rmbtn.innerText = "Remove";
      rmbtn.addEventListener("click", remove);
      c4.appendChild(rmbtn);
      let c5 = document.createElement("td");
      c5.innerText = price * quantity;
      tamt = tamt + price * quantity;
      amount.innerText = tamt;
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);
      row.setAttribute("id", ts);
      let tbody = document.getElementById("tbody");
      tbody.appendChild(row);
      form.reset();
      map.set(name, ts);
      localStorage.setItem(ts, [name, price, quantity, amount]);
    }
  }
}

function remove() {
  map.delete(document.getElementById("name").value);
  let rmbtn = document.getElementById("rmbtn");
  let toRem = rmbtn.parentElement.parentElement;
  let minus = toRem.children[4].innerText;
  tamt = tamt - minus;
  amount.innerText = tamt;
  localStorage.removeItem(toRem.id);
  toRem.remove();
}

function Edit() {
  map.delete(document.getElementById("name").value);
  let editbtn = document.getElementById("editbtn");
  let toRem = editbtn.parentElement;
  let minus = toRem.children[4].innerText;
  tamt = tamt - minus;
  amount.innerText = tamt;
  document.getElementById("name").value = toRem.children[0].innerText;
  console.log(toRem.children[0].innerText);
  document.getElementById("price").value = toRem.children[1].innerText;
  console.log(toRem.children[1].innerText);
  document.getElementById("quantity").value = toRem.children[2].innerText;
  console.log(toRem.children[2].innerText);
  localStorage.removeItem(toRem.id);
  toRem.remove();
  console.log(map);
}

let checkoutbtn = document.getElementById("checkoutbtn");
checkoutbtn.addEventListener("click", final);

function final() {
  alert("Your total amount is: " + tamt);
}

let clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener("click", clearAll);

function clearAll() {
  localStorage.clear();
  map.clear();
  form.reset();
  tamt = 0;
  amount.innerText = tamt;
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
}

function reconstruct(e) {
  tamt = 0;
  amount.innerText = tamt;
  //   alert("HI");
  //   console.log("Entered reconstruct");
  for (a of Object.keys(localStorage)) {
    console.log(typeof localStorage[a]);
    let str = localStorage[a];
    let arr = str.split(",");
    let name = arr[0];
    let price = parseInt(arr[1]);
    let quantity = parseInt(arr[2]);
    console.log(a + "Hellooo" + name + " " + price + " " + quantity);
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    c1.innerText = name;
    let c2 = document.createElement("td");
    c2.innerText = price;
    let c3 = document.createElement("td");
    c3.innerText = quantity;
    let c4 = document.createElement("td");
    let rmbtn = document.createElement("button");
    rmbtn.id = "rmbtn";
    rmbtn.innerText = "Remove";
    rmbtn.addEventListener("click", remove);
    c4.appendChild(rmbtn);
    let c5 = document.createElement("td");
    c5.innerText = price * quantity;
    tamt = tamt + price * quantity;
    amount.innerText = tamt;
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.setAttribute("id", a);
    let tbody = document.getElementById("tbody");
    tbody.appendChild(row);
    map.set(name, a);
  }
}
