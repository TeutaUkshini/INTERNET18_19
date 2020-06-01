var onSlide = 1;
slides(onSlide);

function changeSlides(number) {
  slides(onSlide += number);
}

function slides(ergin) {
  var i;
  var slide = document.getElementsByClassName("slideshow");
  
  if(ergin > slide.length){
      onSlide = 1; 
  };
  
  if(ergin < 1) {
      onSlide = slide.length;
  };
  
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  
  slide[onSlide-1].style.display = "block";
  
}

document.getElementById('left').addEventListener('click', function() {
  changeSlides(-1);
});
document.getElementById('right').addEventListener('click', function() {
  changeSlides(1);
});
