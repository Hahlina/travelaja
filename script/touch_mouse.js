let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('_touch');
	
}else{
	body.classList.add('_pc');
}


var burgerMenu = document.getElementById('burger-menu');

var overlay = document.querySelector('.nav');
burgerMenu.addEventListener('click', function() {
	document.body.classList.toggle('_lock');
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



