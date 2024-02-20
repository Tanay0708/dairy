import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  bucket, dairy01, dairy02, dairy03, dairy033, jar1ltr, quality } from "../assets/images";
import {craft, d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9, taste} from '../assets/new';

export const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about-us", label: "ABOUT" },
    { href: "#products", label: "PRODUCTS" },
    { href: "#contact-us", label: "GALLERY" },
    { href: "#contact-us", label: "SERVICES" },
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

export const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

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
        imgURL: jar1ltr,
        name: "5 L",
        price: "₹100",
    },
    {
        imgURL: dairy02,
        name: "100 ml",
        price: "₹20",
    },
    {
        imgURL: bucket,
        name: "100 ml",
        price: "₹20",
    },
   
];

export const services = [
    {
        imgURL: quality,
        label: "Free shipping",
        subtext: "बेहतरीन डेयरी से प्राप्त, हमारा घी बेजोड़ गुणवत्ता और अद्वितीय स्वाद का प्रतीक है।"
    },
    {
        imgURL: craft,
        label: "Secure Payment",
        subtext: "हमारा घी इस प्राचीन पाक खजाने की प्रामाणिकता और शुद्धता को संरक्षित करते हुए, पारंपरिक तरीकों का उपयोग करके सावधानीपूर्वक तैयार किया गया है।"
    },
    {
        imgURL: taste,
        label: "Love to help you",
        subtext: "घी के समृद्ध, पौष्टिक स्वाद के साथ अपने खाना पकाने को उन्नत बनाएं। चाहे भूनना हो, तलना हो, या अपने पसंदीदा व्यंजनों पर छिड़कना हो, शुद्ध सोने का घी हर भोजन में स्वाद का स्पर्श जोड़ता है।"
    },
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