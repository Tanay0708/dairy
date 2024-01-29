import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, dairy01, dairy02, dairy03, dairy033, danedar, quality, shoe4, shoe5, shoe6, shoe7, smell, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, white } from "../assets/images";
import {craft, d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9, taste} from '../assets/new';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];


export const galleryPic = [
    {
        pic: d1
    },
    {
        pic: d2
    },
    {
        pic: d3
    },
    {
        pic: d4
    },
    {
        pic: d5
    },
    {
        pic: d6
    },
    {
        pic: d7
    },
    {
        pic: d8
    },
    {
        pic: d9
    },
    {
        pic: d10
    },
    {
        pic: d11
    },
    {
        pic: d12
    },
    {
        pic: d13
    },


]

export const shoes = [
    {
        thumbnail: dairy01,
        bigShoe: dairy01,
    },
    {
        thumbnail: dairy02,
        bigShoe: dairy02,
    },
    {
        thumbnail: dairy033,
        bigShoe: dairy033,
    },
    
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: dairy01,
        name: "500 ml",
        price: "₹500",
    },
    {
        imgURL: dairy02,
        name: "5 L",
        price: "₹100",
    },
    {
        imgURL: dairy03,
        name: "100 ml",
        price: "₹20",
    },
   
];

export const services = [
    {
        imgURL: quality,
        label: "Free shipping",
        subtext: "Sourced from the finest dairy, our ghee is a symbol of uncompromised quality and unparalleled taste."
    },
    {
        imgURL: craft,
        label: "Secure Payment",
        subtext: "Our ghee is meticulously crafted using traditional methods, preserving the authenticity and purity of this ancient culinary treasure."
    },
    {
        imgURL: taste,
        label: "Love to help you",
        subtext: "Elevate your cooking with the rich, nutty flavor of ghee. Whether sautéing, frying, or drizzling over your favorite dishes, Pure Gold Ghee adds a touch of decadence to every meal."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];