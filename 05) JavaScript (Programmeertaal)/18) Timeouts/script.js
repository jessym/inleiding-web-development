function showTime() {
  const time = new Date().toTimeString();
  console.log(time);
}

showTime();
setTimeout(showTime, 5000);
showTime();