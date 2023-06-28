function move() {
  let now = new Date();
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  let currentSecond = now.getSeconds();

  const hours = document.getElementById("hours");
  const seconds = document.getElementById("seconds");
  const minutes = document.getElementById("minutes");
  hours.style.setProperty(
    "transform",
    `rotate(${(currentHour % 12) * (360 / 12) + 90}deg)`
  );
  minutes.style.setProperty(
    "transform",
    `rotate(${currentMinute * (360 / 60) + 90}deg)`
  );
  seconds.style.setProperty(
    "transform",
    `rotate(${currentSecond * (360 / 60) + 90}deg)`
  );
}

setInterval(move, 1000);
