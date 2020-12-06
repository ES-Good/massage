new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(true);

$('.slider-girl').slick({
	prevArrow: '<button class="slick-prev slick-arrow prev-girl" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow next-girl" aria-label="Next" type="button" style="">Next</button>',
	infinite: false,
	centerMode: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 1
});

$('.slider-girl').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	changeDescriptionGirl();
  });

const sizeBoobs = document.getElementById('boobs');
const ageGirl = document.getElementById('age');
const nameGirl = document.getElementById('name-girl');


function changeDescriptionGirl() {
	setTimeout(function () {
		sizeBoobs.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-boobs');
		ageGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-age');
		nameGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-name');
		console.log(document.querySelector('.slick-active').lastChild.getAttribute('data-boobs'))
	},500)
}

changeDescriptionGirl();