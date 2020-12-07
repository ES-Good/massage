const btnShowPriceList = document.getElementById('btn-show-price-list');
const closeList = document.getElementById('close-list');

const descriptioPrice = document.getElementById('description-price');
const descriptio = document.getElementById('description');
const listProgramm = document.querySelectorAll('.item-programm');

const price = 
{
	Burlesque:{
		description: '<p>...Пенное джакузи, наслаждение ласками девушки,поцелуи и взбитые сливки слизанные с вашего тела... Сыграем?</p>',
		descriptionPrice:`<p>C 1 девушкой</p>
						<p>120 минут</p>
						<p>6 000 руб.</p>`
	},
	FoamyEuphoria:{
		description: '<p>Самое быстрое наслаждение, заряженное на все 100. Начни рабочий день с небольшого отдыха.</p>',
		descriptionPrice:`<div>
						<p>C 1 девушкой</p>
						<p>30 минут</p>
						<p>1 900 руб.</p>
						</div>`
	},
	TreatiseDesires:{
		description: '<p>Воплоти страсти в любой позе Камасутры.</p>',
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
		description: '<p>Самое быстрое наслаждение, заряженное на все 100. Начни рабочий день с небольшого отдыха.</p>',
		descriptionPrice:`<div>
							<p>C 1 девушкой</p>
							<p>60 минут</p>
							<p>3 000 руб.</p>
						</div>`
	},
	Nonrandomness:{
		description: '<p>В шаге от соблазнительных поцелуев и нежных покусываний до стретты оральных удовольствий.</p>',
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
		description: '<p>Чувствуешь как они манят тебя? Две девушки,с какой дойти до конца, решать только тебе.</p>',
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
		description: '<p>Мои подружки-лесбиянки. Попробуешь стать их другом?</p>',
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
		description: '<p>Ты пробовал совместить боль и ласку,унижение и уважение? Госпожа знает подход к Боссу.</p>',
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
		description: '<p>Каждый знает об этой программе, потому что составляет её сам. Только лучшие техники на твой выбор.</p>',
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
		description: '<p>Стань режиссёром фильма, где девушка ласкает себя игрушками, не забывая о тебе.</p>',
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


new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	loopBottom: true,
	parallax: true
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
	},500)
}

changeDescriptionGirl();

btnShowPriceList.onclick = function () {
	closeList.classList.remove('d-none');
	btnShowPriceList.classList.add('d-none');
}

function showDescriptionProgramm(item) {
	let name = item.getAttribute('data-nameProgramm');
	return name;
}

for (let i = 0; i < listProgramm.length; i++) {
	console.log(typeof showDescriptionProgramm(listProgramm[i]));
}