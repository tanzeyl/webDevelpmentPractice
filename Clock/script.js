let clicks = 1;
let divs = ["clock-1", "parentClock", "clock-3"];
for (let i = 1; i < 3; i++) {
  document.getElementsByClassName(divs[i])[0].style.display = "none";
}

function changeStyle() {
  clicks = (clicks % 3) + 1;
  console.log(clicks - 1);
  for (let i = 0; i < divs.length; i++) {
    if (i == clicks - 1) {
      document.getElementsByClassName(divs[i])[0].style.display = "flex";
    } else {
      document.getElementsByClassName(divs[i])[0].style.display = "none";
    }
  }
}

function updateClock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  if (clicks - 1 == 0) {
    const hour = document.querySelector(".hour-1");
    const minute = document.querySelector(".minute-1");
    let minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    let hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    hour.style.transform = `rotate(${hourDeg}deg)`;
  } else if (clicks - 1 == 1) {
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementsByClassName("time")[0].innerHTML = time;
  }
}

setInterval(updateClock, 1);
updateClock();
