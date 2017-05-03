var a = true;
setInterval(function() {
  var bl = document.getElementsByClassName("block");
  for (var i = 0; i < bl.length; i++) {
    if (a) {
      bl[i].classList.add("hidden");
    } else {
      bl[i].classList.remove("hidden");
    }
    a = !a;
  }
}, 750);

document.getElementsByTagName("body")[0].addEventListener('keypress', function(e) {
  if (e.charCode === 13) {
  }
});
