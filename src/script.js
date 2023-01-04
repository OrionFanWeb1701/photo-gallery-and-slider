const body = document.querySelector('body');
const photoSliderBox = document.querySelector('.photo-slider-box');
const imgSmall = Array.from(document.querySelectorAll('.img'));
const imgBig = document.querySelector('.img__big');
const closeBtn = document.querySelector('.fa-times-circle');
const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');
const controlNumber = Array.from(document.querySelectorAll('.photo-slider-box__control-icon'));

const showImg = e => {
	photoSliderBox.style.display = 'flex';
	photoSliderBox.classList.add('opacity-photo');
	body.style.overflowY = 'hidden';

	const imgClassName = e.target.className;

	switch (imgClassName) {
		case 'img one':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/1.jpg');
			break;
		case 'img two':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/2.jpg');
			break;
		case 'img three':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/3.jpg');
			break;
		case 'img four':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/4.jpg');
			break;
		case 'img five':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/5.jpg');
			break;
		case 'img six':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/6.jpg');
			break;
		case 'img seven':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/7.jpg');
			break;
		case 'img eight':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/8.jpg');
			break;
		case 'img nine':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/9.jpg');
			break;
		case 'img ten':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/10.jpg');
			break;
		case 'img eleven':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/11.jpg');
			break;
		case 'img twelve':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/12.jpg');
			break;
		case 'img thirteen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/13.jpg');
			break;
		case 'img fourteen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/14.jpg');
			break;
		case 'img fifteen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/15.jpg');
			break;
		case 'img sixteen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/16.jpg');
			break;
		case 'img seventeen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/17.jpg');
			break;
		case 'img eighteen':
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/18.jpg');
			break;
		default:
			imgBig.removeAttribute('src');
			imgBig.setAttribute('src', './src/img/big/1.jpg');
			break;
	}

	showPosition();
};

const closeSliderBox = () => {
	const numberString = imgBig.getAttribute('src').slice(0, -4).substring(15);
	const numberPhoto = parseInt(numberString);
	const activeNumber = controlNumber[numberPhoto - 1];

	photoSliderBox.style.display = 'none';
	body.style.overflowY = 'scroll';
	controlNumber.map(num => num.classList.remove('color-control'));
};

const previousImg = () => {
	const numberString = imgBig.getAttribute('src').slice(0, -4).substring(14);
	const numberPhoto = parseInt(numberString);
	const activeNumber = controlNumber[numberPhoto - 1];

	imgBig.setAttribute('src', './src/img/big/' + (numberPhoto - 1) + '.jpg');

	if (numberPhoto === 1) {
		imgBig.setAttribute('src', './src/img/big/' + imgSmall.length + '.jpg');
	}

	activeNumber.classList.remove('color-control');

	showPosition();
};

const nextImg = () => {
	const numberString = imgBig.getAttribute('src').slice(0, -4).substring(14);
	const numberPhoto = parseInt(numberString);
	const activeNumber = controlNumber[numberPhoto - 1];

	imgBig.setAttribute('src', './src/img/big/' + (numberPhoto + 1) + '.jpg');

	if (numberPhoto === imgSmall.length) {
		imgBig.setAttribute('src', './src/img/big/1.jpg');
	}

	activeNumber.classList.remove('color-control');

	showPosition();
};

const numberToImg = e => {
	const numberString = imgBig.getAttribute('src').slice(0, -4).substring(14);
	const numberPhoto = parseInt(numberString);
	const activeNumber = controlNumber[numberPhoto - 1];

	const numberImg = e.target.textContent;

	switch (numberImg) {
		case '1':
			imgBig.setAttribute('src', './src/img/big/1.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '2':
			imgBig.setAttribute('src', './src/img/big/2.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '3':
			imgBig.setAttribute('src', './src/img/big/3.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '4':
			imgBig.setAttribute('src', './src/img/big/4.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '5':
			imgBig.setAttribute('src', './src/img/big/5.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '6':
			imgBig.setAttribute('src', './src/img/big/6.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '7':
			imgBig.setAttribute('src', './src/img/big/7.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '8':
			imgBig.setAttribute('src', './src/img/big/8.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '9':
			imgBig.setAttribute('src', './src/img/big/9.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '10':
			imgBig.setAttribute('src', './src/img/big/10.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '11':
			imgBig.setAttribute('src', './src/img/big/11.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '12':
			imgBig.setAttribute('src', './src/img/big/12.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '13':
			imgBig.setAttribute('src', './src/img/big/13.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '14':
			imgBig.setAttribute('src', './src/img/big/14.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '15':
			imgBig.setAttribute('src', './src/img/big/15.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '16':
			imgBig.setAttribute('src', './src/img/big/16.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '17':
			imgBig.setAttribute('src', './src/img/big/17.jpg');
			activeNumber.classList.remove('color-control');
			break;
		case '18':
			imgBig.setAttribute('src', './src/img/big/18.jpg');
			activeNumber.classList.remove('color-control');
			break;
		default:
			imgBig.setAttribute('src', './src/img/big/1.jpg');
			activeNumber.classList.remove('color-control');
			break;
	}

	showPosition();
};

const showPosition = () => {
	const numberString = imgBig.getAttribute('src').slice(0, -4).substring(14);
	const numberPhoto = parseInt(numberString);
	const activeNumber = controlNumber[numberPhoto - 1];

	if (imgBig.getAttribute('src') === './src/img/big/' + numberPhoto + '.jpg') {
		activeNumber.classList.add('color-control');
	}
};

imgSmall.forEach(img => {
	img.addEventListener('click', showImg);
});
controlNumber.forEach(ctrl => {
	ctrl.addEventListener('click', numberToImg);
});
closeBtn.addEventListener('click', closeSliderBox);
leftArrow.addEventListener('click', previousImg);
rightArrow.addEventListener('click', nextImg);
