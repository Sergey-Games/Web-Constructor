movieConstructor('.app',{
	title: 'Ведьмак',
	favicon: '/witcher/logo.png',
	background: '/witcher/background.jpg',
	fontColor: '#ffffff',
	backgroundColor: '#141218',
	objectСolor: '#9D2929',
	header: {
		logo: '/witcher/logo.png',
		social:[
			{
				title: 'Twitter',
				link: '#',
				image: '/witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: '#',
				image: '/witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: '#',
				image: '/witcher/social/facebook.svg',
			},
{
				title: 'Русский',
				link: '/',
				image: '/witcher/social/language.png',
			}		
		],
		menu:[
			{
				title: 'Главная',
				link:'#',
			},
			{
				title: 'Описание',
				link:'#',
			},
			{
				title: 'Трейлер',
				link:'#',
			},
			{
				title: 'Отзывы',
				link: '#',
			},
		]
	},
	main : {
		genre: '2019, Фэнтези',
		rating: '8',
		description: 'Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.',
		trailer: '#',
		slider: [
			{
				img: '/witcher/series/series-1.jpg',
				title:'Начало конца',
				subtitle:'Серия №1',
			},
			{
				img: '/witcher/series/series-2.jpg',
				title:'Четыре марки',
				subtitle:'Серия №2',
			},
			{
				img: '/witcher/series/series-3.jpg',
				title:'Предательская луна',
				subtitle:'Серия №3',
			},
			{
				img: '/witcher/series/series-4.jpg',
				title:'Банкеты, ублюдки и похороны',
				subtitle:'Серия №4',
			},
			{
				img: '/witcher/series/series-5.jpg',
				title:'Разлитые по бутылкам аппетиты',
				subtitle:'Серия №5',
			},
			{
				img: '/witcher/series/series-6.jpg',
				title:'Редкие виды',
				subtitle:'Серия №6',
			},
			{
				img: '/witcher/series/series-7.jpg',
				title:'Перед падением',
				subtitle:'Серия №7',
			},
			{
				img: '/witcher/series/series-8.jpg',
				title:'Гораздо больше',
				subtitle:'Серия №8',
			}
		]
	},
	footer:{
		copyright: `© ${DateYear} The Witcher. All right reserved.`,
		menu:[
			{
				content: 'Privacy Policy',
				href: '#',				
			},
			{
				content: 'Terms of Service',
				href: '#',
			},
			{
				content: 'Legal',
				href: '#',
			},
		]
	},
});