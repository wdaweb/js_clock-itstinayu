// 获取要操作的元素
const lis = document.querySelectorAll("li");
const rbs = document.querySelectorAll(".rb");
const line = document.querySelector(".line");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const hour1 = document.getElementById("hour1");
const minute1 = document.getElementById("minute1");
const second1 = document.getElementById("second1");
const hour2 = document.getElementById("hour2");
const minute2 = document.getElementById("minute2");
const second2 = document.getElementById("second2");
const hour3 = document.getElementById("hour3");
const minute3 = document.getElementById("minute3");
const second3 = document.getElementById("second3");
const time = document.querySelector(".time");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const time3 = document.querySelector(".time3");

setInterval(() => {
  const date = new Date();
  hour.style.transform = `rotate(${date.getHours() * 30 - 90}deg)`;
  minute.style.transform = `rotate(${date.getMinutes() * 6 - 90}deg)`;
  second.style.transform = `rotate(${date.getSeconds() * 6 - 90}deg)`;
  time.innerText = date;

  const date1 = new Date();
  date1.setUTCHours(date1.getUTCHours() - 5);
  const date1Time = date1.toUTCString();
  hour1.style.transform = `rotate(${date1.getHours() * 30 + 30}deg)`;
  minute1.style.transform = `rotate(${date1.getMinutes() * 6 - 90}deg)`;
  second1.style.transform = `rotate(${date1.getSeconds() * 6 - 90}deg)`;
  time1.innerText = date1Time;

  const date2 = new Date();
  date1.setUTCHours(date2.getUTCHours() + 0);
  const date2ime = date2.toUTCString();
  hour2.style.transform = `rotate(${date2.getHours() * 30 + 30}deg)`;
  minute2.style.transform = `rotate(${date2.getMinutes() * 6 - 90}deg)`;
  second2.style.transform = `rotate(${date2.getSeconds() * 6 - 90}deg)`;
  time2.innerText = date2ime;

  const date3 = new Date();
  date3.setUTCHours(date3.getUTCHours() - 5);
  const date3Time = date3.toUTCString();
  hour3.style.transform = `rotate(${date3.getHours() * 30 + 30}deg)`;
  minute3.style.transform = `rotate(${date3.getMinutes() * 6 - 90}deg)`;
  second3.style.transform = `rotate(${date3.getSeconds() * 6 - 90}deg)`;
  time3.innerText = date3Time;
}, 1000);
lis.forEach((item, index) => {
  item.addEventListener("click", function () {
    lis.forEach((item1) => {
      item1.classList.remove("active");
    });
    rbs.forEach((item2) => {
      item2.classList.remove("active");
    });
    lis[index].classList.add("active");
    rbs[index].classList.add("active");
    line.className = "line line" + (index + 1);
  });
});
