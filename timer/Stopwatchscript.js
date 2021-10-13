// timer;
let Timerstart = 1;
let t;
function StopRun(e) {
  // e.preventDefault;
  if (Timerstart == 1) {
    Timerstart = 0;
    let Timerss = document.getElementById("Stopss");
    Timerss.innerText = "Pause";
    let Timerhour = document.getElementById("Stophour");
    let Timermin = document.getElementById("Stopmin");
    let Timersec = document.getElementById("Stopsec");
    let th, tm, ts;
    if (th == "") th = 0;
    else th = Timerhour.value;
    if (tm == "") tm = 0;
    else tm = Timermin.value;
    if (ts == "") ts = 0;
    else ts = Timersec.value;

    t = setInterval(() => {
      if (th !== 59) {
        if (tm !== 59) {
          if (ts !== 99) {
            ts++;
            Timersec.value = ts;
          } else {
            ts = 0;
            tm++;
            Timersec.value = ts;
            Timermin.value = tm;
          }
        } else {
          if (ts !== 99) {
            ts++;
            Timersec.value = ts;
          } else {
            ts = 0;
            tm = 0;
            th++;
            Timersec.value = ts;
            Timermin.value = tm;
            Timerhour.value = th;
          }
        }
      } else {
        if (tm !== 59) {
          if (ts !== 99) {
            ts++;
            Timersec.value = ts;
          } else {
            ts = 0;
            tm++;
            Timersec.value = ts;
            Timermin.value = tm;
          }
        } else {
          if (ts !== 99) {
            ts++;
            Timersec.value = ts;
          } else {
            StopCancel(1);
          }
        }
      }
    }, 10);
  } else {
    Timerstart = 1;
    let Timerss = document.getElementById("Stopss");
    Timerss.innerText = "Start";
    // let Timerhour = document.getElementById("Timerhour");
    // let Timermin = document.getElementById("Timermin");
    // let Timersec = document.getElementById("Timersec");
    // let th = Timerhour.value,
    //   tm = Timermin.value,
    //   ts = Timersec.value;
    StopClear();
    // Timersec.value = ts;
    // Timermin.value = tm;
    // Timerhour.value = th;
  }
}

function StopClear() {
  clearInterval(t);
}

function StopCancel(num) {
  clearInterval(t);
  let Timerss = document.getElementById("Stopss");
  Timerss.innerText = "Start";
  document.getElementById("Stophour").value = null;
  document.getElementById("Stopmin").value = null;
  document.getElementById("Stopsec").value = null;
  if (num == 1) {
    alert("The time has ended!");
  } else {
    alert("The stop watch will be reset!");
  }
}
