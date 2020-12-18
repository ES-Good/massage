const sizeBoobs = document.getElementById('boobs');
const ageGirl = document.getElementById('age');
const nameGirl = document.getElementById('name-girl');


function changeDescriptionGirl() {
	setTimeout(function () {
		sizeBoobs.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-boobs');
		ageGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-age');
		nameGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-name');
	},500)
}

changeDescriptionGirl();