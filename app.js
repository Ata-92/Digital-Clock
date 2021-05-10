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


}, 1000);
