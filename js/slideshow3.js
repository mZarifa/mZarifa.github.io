var slideIndex3 = 1;
showslides3(slideIndex3);

// Next/previous controls
function plusSlides3(n3) {
  showslides3(slideIndex3 += n3);
}

// Thumbnail image controls
function currentslide3(n3) {
  showslides3(slideIndex3 = n3);
}

function showslides3(n3) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
  }
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3 -1].style.display = "block";
  dots3[slideIndex3 -1].className += " active";
}