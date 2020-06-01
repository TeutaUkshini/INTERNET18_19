function updateBackground() {
  var 
    hr = (new Date()).getHours(),
    body = document.body,
    bstyle = body.style;    
  if (hr < 10) {
    bstyle.backgroundColor = "#d4d7d8";
    bstyle.color = "black";
  } else if (hr < 23) {
    bstyle.backgroundColor = "#030007";
    bstyle.color = "white";
  } else {
    bstyle.backgroundColor = "#000000";
    bstyle.color = "white";
  } 
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
