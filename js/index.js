movieConstructor('.app',{
	title: 'The Witcher',
	favicon: 'witcher/logo.png',
	background: 'witcher/background.jpg',
	fontColor: '#ffffff',
	backgroundColor: '#141218',
	objectСolor: '#9D2929',
	header: {
		logo: 'witcher/logo.png',
		social:[
			{
				title: 'Twitter',
				link: '#',
				image: 'witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: '#',
				image: 'witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: '#',
				image: 'witcher/social/facebook.svg',
			},
			{
				title: 'English',
				link: '/ru/',
				image: 'witcher/social/language.png',
			}				
		],
		menu:[
			{
				title: 'Main',
				link:'#',
			},
			{
				title: 'Description',
				link:'#',
			},
			{
				title: 'Trailer',
				link:'#',
			},
			{
				title: 'Reviews',
				link: '#',
			},
		]
	},
	main : {
		genre: '2019, Fantasy',
		rating: '8',
		description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
		trailer: '#',
		slider: [
			{
				img: 'witcher/series/series-1.jpg',
				title:'The End’s Beginning',
				subtitle:'Series №1',
			},
			{
				img: 'witcher/series/series-2.jpg',
				title:'Four Marks',
				subtitle:'Series №2',
			},
			{
				img: 'witcher/series/series-3.jpg',
				title:'Betrayer Moon',
				subtitle:'Series №3',
			},
			{
				img: 'witcher/series/series-4.jpg',
				title:'Of Banquets, Bastards and Burials',
				subtitle:'Series №4',
			},
			{
				img: 'witcher/series/series-5.jpg',
				title:'Bottled Appetites',
				subtitle:'Series №5',
			},
			{
				img: 'witcher/series/series-6.jpg',
				title:'Rare Species',
				subtitle:'Series №6',
			},
			{
				img: 'witcher/series/series-7.jpg',
				title:'Before a Fall',
				subtitle:'Series №7',
			},
			{
				img: 'witcher/series/series-8.jpg',
				title:'Much More',
				subtitle:'Series №8',
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