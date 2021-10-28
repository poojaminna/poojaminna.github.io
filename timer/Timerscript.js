//timer
let Timerstart = 1;
let t;

function TimerRun(e) {
  // e.preventDefault;
  if (Timerstart == 1) {
    console.log("Hello");
    Timerstart = 0;
    let Timerss = document.getElementById("Timerss");
    Timerss.innerText = "Pause";
    let Timerhour = document.getElementById("Timerhour");
    let Timermin = document.getElementById("Timermin");
    let Timersec = document.getElementById("Timersec");
    let th = Timerhour.value,
      tm = Timermin.value,
      ts = Timersec.value;
    // Timersec.value = 15;
    // while (th !== 0) {
    //   while (tm !== 0) {
    //     while (ts !== 0) {
    //       ts--;
    //       Timersec.value = ts;
    //     }
    //     ts = 59;
    //     tm--;
    //     Timermin.innerText = tm;
    //   }
    //   tm = 59;
    //   th--;
    //   Timerhour.innerText = th;
    // }
    t = setInterval(() => {
      if (th !== 0 && th !== "") {
        if (tm !== 0 && tm !== "") {
          if (ts !== 0 && ts !== "") {
            ts--;
            Timersec.value = ts;
          } else {
            ts = 59;
            tm--;
            Timersec.value = ts;
            Timermin.value = tm;
          }
        } else {
          if (ts !== 0 && ts !== "") {
            ts--;
            Timersec.value = ts;
          } else {
            ts = 59;
            tm = 59;
            th--;
            Timersec.value = ts;
            Timermin.value = tm;
            Timerhour.value = th;
          }
        }
      } else {
        if (tm !== 0 && tm !== "") {
          if (ts !== 0 && ts !== "") {
            ts--;
            Timersec.value = ts;
          } else {
            ts = 59;
            tm--;
            Timersec.value = ts;
            Timermin.value = tm;
          }
        } else {
          if (ts !== 0 && ts !== "") {
            ts--;
            Timersec.value = ts;
          } else {
            TimerCancel(1);
          }
        }
      }
    }, 1000);
  } else {
    Timerstart = 1;
    let Timerss = document.getElementById("Timerss");
    Timerss.innerText = "Start";
    // let Timerhour = document.getElementById("Timerhour");
    // let Timermin = document.getElementById("Timermin");
    // let Timersec = document.getElementById("Timersec");
    // let th = Timerhour.value,
    //   tm = Timermin.value,
    //   ts = Timersec.value;
    TimerClear();
    // Timersec.value = ts;
    // Timermin.value = tm;
    // Timerhour.value = th;
  }
}

function TimerClear() {
  clearInterval(t);
}

function TimerCancel(num) {
  clearInterval(t);
  Timerss.innerText = "Start";
  document.getElementById("Timerhour").value = null;
  document.getElementById("Timermin").value = null;
  document.getElementById("Timersec").value = null;
  if (num == 1) {
    alert("The time has ended!");
    // <audio></audio>;
  } else {
    alert("The timer will be reset!");
  }
}
