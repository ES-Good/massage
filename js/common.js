const btnShowPriceList = document.getElementById('btn-show-price-list');
const closeList = document.getElementById('close-list');

const descriptionPrice = document.getElementById('description-price');
const description = document.getElementById('description');
const listProgramm = document.querySelectorAll('.item-programm');

const mobileMenuItem = document.querySelectorAll('.nav-link_mobile');
const btnOpenSite = document.getElementById('open-site');
const banner = document.querySelector('.warning');

const price = 
{
	Burlesque:{
		description: '...Пенное джакузи, наслаждение ласками девушки,поцелуи и взбитые сливки слизанные с вашего тела... Сыграем?',
		descriptionPrice:`<div>
						<p>C 1 девушкой</p>
						<p>120 минут</p>
						<p>6 000 руб.</p>
						</div>`
	},
	FoamyEuphoria:{
		description: 'Самое быстрое наслаждение, заряженное на все 100. Начни рабочий день с небольшого отдыха.',
		descriptionPrice:`<div>
						<p>C 1 девушкой</p>
						<p>30 минут</p>
						<p>1 900 руб.</p>
						</div>`
	},
	TreatiseDesires:{
		description: 'Воплоти страсти в любой позе Камасутры.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>5 600 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>90 минут</p>
							<p>6 900 руб.</p>
						</div>`
	},
	Temptation:{
		description: 'Самое быстрое наслаждение, заряженное на все 100. Начни рабочий день с небольшого отдыха.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>3 000 руб.</p>
						</div>`
	},
	Nonrandomness:{
		description: 'В шаге от соблазнительных поцелуев и нежных покусываний до стретты оральных удовольствий.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>4 500 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>90 минут</p>
							<p>6 200 руб.</p>
						</div>`
	},
	Sirens:{
		description: 'Чувствуешь как они манят тебя? Две девушки,с какой дойти до конца, решать только тебе.',
		descriptionPrice:`<div>
							<p>C 2 девушками</p>
							<p>90 минут</p>
							<p>8 000 руб.</p>
						</div>
						<div>
							<p>C 2 девушками</p>
							<p>120 минут</p>
							<p>11 000 руб.</p>
						</div>`
	},
	WeAreCrazy:{
		description: 'Мои подружки-лесбиянки. Попробуешь стать их другом?',
		descriptionPrice:`<div>
							<p>C 2 девушками</p>
							<p>60 минут</p>
							<p>10 000 руб.</p>
						</div>
						<div>
							<p>C 2 девушками</p>
							<p>90 минут</p>
							<p>12 500 руб.</p>
						</div>
						<div>
							<p>C 2 девушками</p>
							<p>120 минут</p>
							<p>15 000 руб.</p>
						</div>`
	},
	TheTamingOfTheShrew:{
		description: 'Ты пробовал совместить боль и ласку,унижение и уважение? Госпожа знает подход к Боссу.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>7 000 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>90 минут</p>
							<p>9 000 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>120 минут</p>
							<p>11 000 руб.</p>
						</div>`
	},
	Infinity:{
		description: 'Каждый знает об этой программе, потому что составляет её сам. Только лучшие техники на твой выбор.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>6 500 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>90 минут</p>
							<p>8 000 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>120 минут</p>
							<p>9 900 руб.</p>
						</div>`
	},
	Solo:{
		description: 'Стань режиссёром фильма, где девушка ласкает себя игрушками, не забывая о тебе.',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>6 500 руб.</p>
						</div>
						<div>
							<p>C 1 девушкой</p>
							<p>90 минут</p>
							<p>8 000 руб.</p>
						</div>`
	},
};

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


// function changeDescriptionGirl() {
// 	setTimeout(function () {
// 		sizeBoobs.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-boobs');
// 		ageGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-age');
// 		nameGirl.innerText = document.querySelector('.slick-active').lastChild.getAttribute('data-name');
// 	},500)
// }

// changeDescriptionGirl();


function showDescriptionProgramm(item) {
	let name = item.getAttribute('data-nameProgramm');
	switch (name) {
		case 'Burlesque':
			description.innerText = price.Burlesque.description;
			descriptionPrice.innerHTML = price.Burlesque.descriptionPrice;
			break;
		case 'Foamy euphoria':
			description.innerText = price.FoamyEuphoria.description;
			descriptionPrice.innerHTML = price.FoamyEuphoria.descriptionPrice;
			break;
		case 'Treatise of Desires':
			description.innerText = price.TreatiseDesires.description;
			descriptionPrice.innerHTML = price.TreatiseDesires.descriptionPrice;
			break;
		case 'Temptation':
			description.innerText = price.Temptation.description;
			descriptionPrice.innerHTML = price.Temptation.descriptionPrice;
			break;
		case 'Nonrandomness':
			description.innerText = price.Nonrandomness.description;
			descriptionPrice.innerHTML = price.Nonrandomness.descriptionPrice;
			break;
		case 'Sirens':
			description.innerText = price.Sirens.description;
			descriptionPrice.innerHTML = price.Sirens.descriptionPrice;
			break;
		case 'WeAreCrazy':
			description.innerText = price.WeAreCrazy.description;
			descriptionPrice.innerHTML = price.WeAreCrazy.descriptionPrice;
			break;
		case 'The Taming of the Shrew':
			description.innerText = price.TheTamingOfTheShrew.description;
			descriptionPrice.innerHTML = price.TheTamingOfTheShrew.descriptionPrice;
			break;
		case 'Infinity':
			description.innerText = price.Infinity.description;
			descriptionPrice.innerHTML = price.Infinity.descriptionPrice;
			break;	
		case 'Solo':
			description.innerText = price.Solo.description;
			descriptionPrice.innerHTML = price.Solo.descriptionPrice;
			break;

		default:
			break;
	}
	return name;
}

for (let i = 0; i < listProgramm.length; i++) {
	listProgramm[i].onclick = function(){
		listProgramm[i].classList.add('item-programm__active');
		console.log(showDescriptionProgramm(listProgramm[i]))
	}
}

$('.item-programm').click(function(){                        //style-active-list
	$('.item-programm').removeClass('item-programm__active');
	$(this).addClass('item-programm__active');
});

(function($) { //castom scroll
    $(window).on('load', function() {
        $('.custom-scroll').mCustomScrollbar({
			
		});
    });
})(jQuery);


for (let i = 0; i < mobileMenuItem.length; i++) {
	const element = mobileMenuItem[i];

	element.onclick = function () {
		document.querySelector('.navbar-collapse').classList.remove('show');
	}	
}

// btnOpenSite.onclick = function () {
// 	banner.classList.remove('d-flex');
// 	banner.classList.add('d-none');
// }

$('.navbar-toggler').onclick = function(){
	alert('sas')
}

document.querySelector('.navbar-toggler').onclick = function () {
	document.querySelector('.navbar').classList.toggle('bg-black')
}

