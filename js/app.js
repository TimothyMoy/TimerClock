function showTime(){
  //Create a variable to hold Date object
  const date = new Date();

  //Create variable to get hours, minutes, and seconds
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  
  //Conditionals have to be set before manipulating the dom, if time is below 10, then we need to add a 0
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  //Get ID and manipulate the DOM with the variables set earlier.
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ": " + mins;
  document.getElementById("second").innerHTML = ": " + secs;
}

//Setting a time interval so that the time would update by itself.
setInterval(showTime, 1000);

