function showTime(){
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  let sec = date.getSeconds();


  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("second").innerHTML = sec;

  if (hours < 10) {
    hour = "0" + hour;
  }

}
showTime();

setInterval(showTime, 100)

console.log('hello world')