var slider = document.getElementById("slide");
var slider2  = document.getElementById("slide2");
var slider3 = document.getElementById("slide3");
var slide4  = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
var slide6 = document.getElementById("slide6");
var p = document.getElementById("demo");
var img = document.getElementById("img");
p.innerHTML = slider.value;

// blur()
slider.oninput = function() {
p.innerHTML = slider.value;
img.style.WebkitFilter = 'blur('+slider.value+'px)';
}

//brightness()
slider2.oninput = function() {
  p.innerHTML = slider2.value;
  img.style.WebkitFilter = 'brightness('+slider2.value+'%)';
}

//contrast()
slider3.oninput = function() {
  p.innerHTML = slider3.value;
  img.style.WebkitFilter = 'contrast('+slider3.value+'%)';
}

//hue-rotate()
slide4.oninput = function() {
  p.innerHTML = slide4.value;
  img.style.WebkitFilter = 'hue-rotate('+slide4.value+'deg)';
}

//invert()
slide5.oninput = function() {
  p.innerHTML = slide5.value;
  img.style.WebkitFilter = 'invert('+slide5.value+'%)';
}

//opacity
slide6.oninput = function() {
  p.innerHTML = slide6.value;
  img.style.WebkitFilter = 'opacity('+slide6.value+'%)';
}
