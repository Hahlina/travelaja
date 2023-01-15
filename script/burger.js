var burgerMenu = document.getElementById('burger-menu');

var overlay = document.querySelector('.nav');
burgerMenu.addEventListener('click', function() {
	document.body.classList.toggle('_lock');
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});