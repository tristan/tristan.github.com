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

var files = {
  'tristan.sh': [
    '#!/bin/bash',
    'cat <<EOF >> /dev/stdout',
    '',
    'LINKS',
    '',
    'github: https://github.com/tristan',
    'twitter: https://twitter.com/tristanking',
    'linkedin: https://au.linkedin.com/pub/tristan-king/2/1b0/bb6',
    'last.fm: https://www.last.fm/user/lessthantristan',
  ]
};

document.getElementsByTagName("body")[0].addEventListener('keypress', function(e) {
  if (e.charCode === 13) {
  }
});

// bakkenbaeck.com/team
