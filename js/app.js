
window.onload = function() {

  var videos = document.querySelectorAll('.video');


  videos.forEach(function(img) {

    img.parentNode.style.position = "relative";


    var play = document.createElement('div');

    play.style.position = "absolute";
    play.style.bottom = "5px";
    play.style.left = "5px";
    play.style.backgroundColor = "rgba(0,0,0,0.7)";
    play.style.borderRadius = "50%";
    play.style.width = "20px";
    play.style.height = "20px";
    play.style.display = "flex";
    play.style.alignItems = "center";
    play.style.justifyContent = "center";

    var triangle = document.createElement('div');
    triangle.style.width = "0";
    triangle.style.height = "0";
    triangle.style.borderTop = "4px solid transparent";
    triangle.style.borderBottom = "4px solid transparent";
    triangle.style.borderLeft = "6px solid white";
    triangle.style.marginLeft = "2px"; // Center it a bit


    play.appendChild(triangle);

    img.parentNode.appendChild(play);
  });
};



