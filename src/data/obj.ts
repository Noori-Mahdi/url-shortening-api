import img1 from './../assets/img/icon-brand-recognition.svg';
import img2 from './../assets/img/icon-detailed-records.svg';
import img3 from './../assets/img/icon-fully-customizable.svg';

import facebook from './../assets/img/icon-facebook.svg';
import pinterest from './../assets/img/icon-pinterest.svg';
import twitter from './../assets/img/icon-twitter.svg';
import instagram from './../assets/img/icon-instagram.svg';

import logo from './../assets/img/logo.svg';

export const cardData =[
    {
        imgCard: img1, 
        titleCard: 'Brand Recognition', 
        infoCard: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
        imgCard: img2, 
        titleCard: 'Detailed Records', 
        infoCard: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
        imgCard: img3, 
        titleCard: 'Fully Customizable', 
        infoCard: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    }
]

export const listItems:{ [key: string]: string[] } ={
    features:['link shortening','branded links','analytics'],
    resources:['blog','developers','support'],
    company:['about','our team','careers','contact']
}

export const icon ={facebook, pinterest, instagram, twitter}

export const Logo = logo