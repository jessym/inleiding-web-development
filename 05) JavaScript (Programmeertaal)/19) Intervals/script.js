function showTime() {
  const time = new Date().toTimeString();
  console.log(time);
}

setInterval(showTime, 3000);