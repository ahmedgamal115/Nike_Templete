import shoeImage1 from '../Images/pngwing.com (1).png'
import shoeImage2 from '../Images/pngwing.com (2).png'
import shoeImage3 from '../Images/pngwing.com (3).png'
import shoeImage4 from '../Images/pngwing.com.png'

import Product1 from '../Images/Products/pngwing.com.png'
import Product2 from '../Images/Products/pngwing.com (1).png'
import Product3 from '../Images/Products/pngwing.com (2).png'
import Product4 from '../Images/Products/pngwing.com (3).png'
import Product5 from '../Images/Products/pngwing.com (4).png'

import  freeShopping  from '../Icons/icons8-free-shipping-50.png';
import  securePayment  from '../Icons/icons8-secure-payment-50 (1).png';
import  loveHelp  from '../Icons/icons8-love-50.png';

import customer1 from '../Images/Customers/pexels-asim-alnamat-343717.jpg'
import customer2 from '../Images/Customers/pexels-melike-benli-18742635.jpg'
import customer3 from '../Images/Customers/pexels-andrea-piacquadio-774909.jpg'

import facebook from '../Icons/SocialMedia/icons8-facebook-100.png'
import twitter from '../Icons/SocialMedia/icons8-twitter-100.png'
import instagram from '../Icons/SocialMedia/icons8-instagram-100.png'


const NavbarLinks = [
    {label:"Home",href:"#home"},
    {label:"Products",href:"#products"},
    {label:"About Us",href:"#about-us"},
    {label:"Services",href:"#services"},
    {label:"Offers",href:"#offer"},
    {label:"Contact Us",href:"#contact-us"}
]

const statistics = [
    {label:"Brands",value:"1k+"},
    {label:"Shops",value:"500+"},
    {label:"Customers",value:"250k+"},
]

const shoes = [
    {image: shoeImage1},
    {image: shoeImage2},
    {image: shoeImage3},
    {image: shoeImage4},
]

const products = [
    {
        imageURL: Product1,
        title: 'Nike Air Jordan-100',
        price: '$210.0'
    },
    {
        imageURL: Product2,
        title: 'Nike Air Jordan-100',
        price: '$270.80'
    },
    {
        imageURL: Product3,
        title: 'Nike Air Jordan-100',
        price: '$350.0'
    },
    {
        imageURL: Product4,
        title: 'Nike Air Jordan-100',
        price: '$200.20'
    },
    {
        imageURL: Product5,
        title: 'Nike Air Jordan-100',
        price: '$210.0'
    },
]

const services = [
    {
        icon: freeShopping,
        title:"Free shipping",
        details:"Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        icon: securePayment,
        title:"Secure Payment",
        details:"Experience worry-free transactions with our secure payment options."
    },
    {
        icon: loveHelp,
        title:"Love to help you",
        details:"Our dedicated team is here to assist you every step of the way."
    },
]

const customersReviews = [
    {
        userURL:customer1,
        feedback:`The service was awful! 
        They ignored our requests and seemed annoyed when we asked to change 
        what they initially brought us.`,
        rating:"4.5",
        customerName:"asim alnamat"
    },
    {
        userURL:customer2,
        feedback:`I enjoyed my visit with my family. 
        We loved the food and how the staff treats customers. 
        I recommend this place.`,
        rating:"4.5",
        customerName:"Melike Benli"
    },
    {
        userURL:customer3,
        feedback:`They were late and didn’t do what they promised. 
        I would not recommend hiring them.`,
        rating:"4.5",
        customerName:"Maria Orlova"
    },
]

const socialMedia = [
    {
        icon: facebook,
        href:"#"
    },
    {
        icon: twitter,
        href:"#"
    },
    {
        icon: instagram,
        href:"#"
    },
]

const footerMedia = [
    {
        title: 'Products',
        subs:[
            "Air Force 1",
            "Air Max 1",
            "Air Jordan 1",
            "Air Force 2",
            "Nike Waffle Racer",
            "Nike Cortez"
        ]
    },
    {
        title: 'Help',
        subs:[
            "About us",
            "FAQs",
            "How it works",
            "Privacy policy",
            "Payment policy"
        ]
    },
    {
        title: 'Get in touch',
        subs:[
            "customer@nike.com",
            "+9584123695487"
        ]
    },
]

export {NavbarLinks,
    statistics,shoes,products,services,
    customersReviews,socialMedia,footerMedia}