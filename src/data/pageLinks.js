import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:2, href:'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id:3, href:'https://www.google.com', icon: 'fab fa-squarespace'}
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    title: 'Tibet Adventure',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    date: 'august 26th, 2020',
    price: 2100,
    timeOfRest: 6,
    country: 'china',
    icon: 'fas fa-map',
  },
  {
    id: 2,
    image: tour2,
    title: 'best of java',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    date: 'october 1th, 2020',
    price: 1400,
    timeOfRest: 11,
    country: 'indonesia',
    icon: 'fas fa-map',
  },
  {
    id: 3,
    image: tour3,
    title: 'kenya higlights',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    date: 'december 5th, 2020',
    price: 3300,
    timeOfRest: 20,
    country: 'kenya',
    icon: 'fas fa-map',
  },
  {
    id: 4,
    image: tour4,
    title: 'explore hong kong',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    date: 'august 26th, 2020',
    price: 5000,
    timeOfRest: 8,
    country: 'hong kong',
    icon: 'fas fa-map',
  },
];