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

var mail = document.getElementById("mail");

var email = "ws";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 5; i++) {
  email += characters.charAt(Math.floor(Math.random() * characters.length));
}
email += "@tristan.sh";

mail.innerText = email;
mail.setAttribute("href", "mailto:" + email);
// bakkenbaeck.com/team
