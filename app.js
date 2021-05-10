const day = document.getElementById("day");

const month = document.getElementById("month");

const year = document.getElementById("year");

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].sort();
const weekday = document.getElementById("weekday");

const hour = document.getElementById("hour");

const minute = document.getElementById("minute");

const second = document.getElementById("second");

const noon = document.getElementById("noon");


setInterval(() => {
  let date = new Date();

  date.getSeconds() < 10 ? second.innerHTML = "0" + date.getSeconds() : second.innerHTML = date.getSeconds();

  date.getMinutes() < 10 ? minute.innerHTML = "0" + date.getMinutes() : minute.innerHTML = date.getMinutes();

  if (date.getHours() > 12) {
    date.getHours() < 22 ? hour.innerHTML = "0" + (date.getHours() - 12) : hour.innerHTML = date.getHours() - 12;
  } else if (date.getHours() == 0) {
    hour.innerHTML = 12;
  } else if (date.getHours() < 10) {
    hour.innerHTML = "0" + date.getHours();
  } else hour.innerHTML = date.getHours();

}, 1000);
