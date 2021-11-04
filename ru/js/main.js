// Функция обработчик.
const getElement = (tagName, classNames, attributes)=> {

	const element = document.createElement(tagName);

	// Для элемента, мы добавляем класс.
	if(classNames) {
		element.classList.add(...classNames); // При помощи Spread Operator, все классы мы раскидаем.
	}

	// Перебираем атрибуты.
	if(attributes) {
		for(const attribute in attributes) {
			// Для нашего элемента, будем обращаться к этому атрибуту.
			// Туда будем сдавать значения, которые беруться из объекта.
			element[attribute] = attributes[attribute];
		}
	}

	return element;
};

// Создаёт header.
const createHeader = ({title, header: {logo, menu, social} }) => {

	const header = getElement('header');
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

	if(logo) {
		const logoElem = getElement('img', ['logo'], {
			src: logo,
			alt: 'Логотип ' + title,
		});

		wrapper.append(logoElem);
	}

	if(menu) {
		const div = getElement('div', ['menu-list'] );
		const allMenuLink = menu.map(item => {
			const link = getElement('a', ['menu-link'], {
				href: item.link,
				textContent: item.title,
			});
			return link;
		});
		div.append(...allMenuLink);
		wrapper.append(div);

		const menuBtn = getElement('button', ['menu-button'] );
		menuBtn.addEventListener('click', () => {
			menuBtn.classList.toggle('menu-button-active');
			wrapper.classList.toggle('header-active');
		});
		container.append(menuBtn);
	}

	if(social) {
		const socialWrapper = getElement('div', ['social'] );
		const allSocial = social.map(item => {
			const socialLink = getElement('a', ['social-link'] );
			socialLink.append(getElement('img', [], {
				src: item.image,
				alt: item.title,
			}));

			socialLink.href = item.link;

			return socialLink;
		});

		socialWrapper.append(...allSocial);
		wrapper.append(socialWrapper);
	}


	header.append(container);
	container.append(wrapper);

	return header;
};

// Создаёт main.
const createMain = ({title, main: { genre, rating, description, trailer, slider }}) => {

	const main = getElement('main');
	const container = getElement('div', ['container']);
	main.append(container);
	const wrapper = getElement('div', ['main-content']);
	container.append(wrapper);
	const content = getElement('div', ['content']);
	wrapper.append(content);

	if(genre) {
		// Создаём genreSpan.
		const genreSpan = getElement('span', ['genre','animated','fadeInRight'], {textContent: genre} );
		// Добавляем genreSpan на страницу.
		content.append(genreSpan);
	}

	if(rating) {
		const ratingBlock = getElement('div', ['rating', 'animated', 'fadeInRight']);
		const ratingStars = getElement('div', ['rating-stars']);
		const ratingNumber = getElement('div', ['rating-number'], {
			textContent: `${rating}/10`
		});
		for(let i = 0; i < 10; i++) {
			const star = getElement('img', ['star'], {
				// Работа с тернарным оператором.
				alt: i ? '' : `Рейтинг ${rating} из 10`,
				src: i < rating ? '/Web-Constructor/img/star.svg' : '/Web-Constructor/img/star-o.svg'
			});
			ratingStars.append(star);
		}
		ratingBlock.append(ratingStars, ratingNumber);
		content.append(ratingBlock);
	}
	
	content.append(getElement('h1', ['main-title', 'animated', 'fadeInRight'], {
		textContent: title,
	}));

	if(description) {
		content.append(getElement('p', ['main-description', 'animated', 'fadeInRight'], {textContent: description,} ));
	}

	if (trailer) {
		const youtubeLink = getElement('a', ['button', 'animated', 'fadeInRight', 'youtube-modal'], {
			href: trailer,
			textContent: 'Смотреть трейлер',
		})

		const youtubeImageLink = getElement('a', ['play','youtube-modal'], {
			href: trailer,
			ariaLabel: 'Смотреть трейлер'
		});

		const iconPlay = getElement('img', ['play-img'], {
			src: '/Web-Constructor/img/play.svg',
			alt: '',
			ariaHiddden: true,
		});

		content.append(youtubeLink);
		youtubeImageLink.append(iconPlay);
		wrapper.append(youtubeImageLink);
	}

	if(slider) {
		const sliderBlock = getElement('div', ['series']);
		const swiperBlock = getElement('div', ['swiper-container']);
		const swiperWrapper = getElement('div', ['swiper-wrapper']);
		const arrow = getElement('button', ['arrow']);

		const slides = slider.map( item => {

			const swiperSlide = getElement ('div', ['swiper-slide']);
			const card = getElement ('div', ['card']);
			const cardImage = getElement ('img', ['card-img'],{
				src: item.img,
				//alt: ((item.title || '') + ' ' + (item.subtitle || '')).trim(),
				alt: ((item.title ? item.title + ' ' : '') + (item.subtitle ? item.subtitle : '')).trim(),
			});

			card.append(cardImage);

			if (item.title || item.subtitle ) {
				const cardDescription = getElement('div', ['card-description']);
				cardDescription.innerHTML = `
				${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
				${item.title ? `<p class="card-title">${item.title}</p>` : ''}
				`;
				card.append(cardDescription);
			}
			swiperSlide.append(card);
			return swiperSlide;
		}); 

		swiperWrapper.append(...slides);
		swiperBlock.append(swiperWrapper);
		sliderBlock.append(swiperBlock,arrow);
		container.append(sliderBlock);

		new Swiper(swiperBlock, {
			loop: true,
			navigation: {
				nextEl: arrow,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				541: {
					slidesPerView: 2,
					spaceBetween: 40
				}
			}
		});
	};

	return main;
};

// создаёт footer.
const createFooter = ({footer: {copyright, menu}}) => {

	const footer = getElement('footer', ['footer'] );
	const container = getElement('div', ['container'] );
	const footerContent = getElement('div', ['footer-content'] );
	
	if(copyright) {
		const footerLeft = getElement('div', ['left'] );
		const copyrightContent = getElement('span', ['copyright'], {textContent: copyright,} );
		footerLeft.append(copyrightContent);
		footerContent.append(footerLeft);
	}
	
	if(menu) {
		const footerRight = getElement('div', ['right']);
		const footerDiv = getElement('div', ['footer-menu']);

		const allDivFooter = menu.map(item => {
			const footerlLink = getElement('a', ['footer-link'], {
				href: item.href,
				textContent: item.content,
			});
			return footerlLink;
		});
		
		footerDiv.append(...allDivFooter);
		footerRight.append(footerDiv);
		footerContent.append(footerRight);
	}
	container.append(footerContent);
	footer.append(container);
	return footer;
};

const movieConstructor = (selector, options) => {
	
	// получаем селектор app.
	const app = document.querySelector(selector);
	app.classList.add('body-app');
	

	app.style.color = options.fontColor || '';
	app.style.backgroundColor = options.backgroundColor || '';

	if(options.objectСolor){
		document.documentElement.style.setProperty('--object-color', options.objectСolor)
	}
	

	if (options.favicon){

		// const index = options.favicon.lastIndexOf('.') + 1;
		// const type = options.favicon.substring(index);

		// он ищёт точку
		// если находит, то возвращает индекс
		const index = options.favicon.lastIndexOf('.');
		// получаем type, находим через index
		// + 1 обозначает, что нам точка не нужна
		const type = options.favicon.substring(index + 1);
		
		const favicon = getElement('link', null, {
			rel: 'icon',
			href: options.favicon,
			type: '/image/' + (type === 'svg' ? 'svg-xml' : type), // проверяем, через тернарный оператор.
		});
		document.head.append(favicon); // вставляем favicon на страницу сайта
	}

	// при помощи тернарного оператора, мы проверяем наличие background в options.
	// если есть, то мы получаем url("${options.background}"), если нет, то пустоту.
	app.style.backgroundImage = options.background ? 
		`url("${options.background}")` : '';
	document.title = options.title;

	// получает всё, что создаёт createHeader.
	if(options.header){
		app.append(createHeader(options));
	}

	// получает всё, что создаёт createMain.
	if(options.main){
		app.append(createMain(options));
	}

	// получает всё, что создаёт createFooter.
	if(options.footer){
		app.append(createFooter(options));
	}

};

// получаем в реальном времени сегодняшний год.
const DateYear = new Date().getFullYear();