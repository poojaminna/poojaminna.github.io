setInterval(() => {
  let today = new Date();
  document.getElementById("Clockhour").innerText = today.getHours();
  document.getElementById("Clockmin").innerText = today.getMinutes();
  document.getElementById("Clocksec").innerText = today.getSeconds();
}, 1000);

setInterval(() => {
  let today = new Date();
  document.getElementById("Clockyear").innerText = today.getFullYear();
  document.getElementById("Clockmonth").innerText = today.getMonth();
  document.getElementById("Clockdate").innerText = today.getDate();
}, 1000);
