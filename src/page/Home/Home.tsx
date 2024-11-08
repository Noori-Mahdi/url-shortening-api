import { Button } from '../../components/Button/Button';
import {InputBox } from '../../components/InputBox/InputBox';
import photo from './../../assets/img/illustration-working.svg';
import bgImg from './../../assets/img/bg-shorten-desktop.svg';
import bgImg2 from './../../assets/img/bg-boost-desktop.svg'
import './../../sass/global.scss';
import './style.scss';
import { Bord } from '../../components/Bord/Bord';
import { List } from '../../components/List/List';
import { Card } from '../../components/Card/Card';
import { cardData } from '../../data/obj';
import { useEffect, useState } from 'react';

export const Home = () => {

    
    return ( 
        <div className='home'>
            <div className='flex mx-5 lg:mx-0 flex-col lg:flex-row justify-between items-center lg:ps-24 lg:mt-32 mt-12'>
                <div className='order-2 lg:order-1 w-full text-center lg:w-5/12 mt-10 lg:mt-0'>
                    <h3 className='text-7xl font-bold'>More than just shorter links</h3>
                    <p className='lg:text-xl mx-2 mt-3 lg:mx-0 lg:mt-0 text-3xl font-weight-normal muted-text mb-10'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button color='btn-primary' customClass={'rounded-full w-56 h-16 text-2xl '} title='go started'/>
                </div>
                <div className='order-1 lg:order-2 flex justify-center items-center w-full lg:w-7/12 lg:ml-12 relative'>
                    <img className='lg:absolute ms-32 lg:left-24' src={photo}/>
                </div>
            </div>
            <div className=' px-5 lg:px-24 mt-32'>
                <div className='h-44 lg:h-28'>
                    <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} borderRadiuosClass={'border-radius-normal'} bgColorClass='primary-dark-bg' bgImg={bgImg}>
                        <InputBox btnTitle='shorten it!' placeholder='shorten a link here...'/>
                    </Bord>
                </div>
                <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} borderRadiuosClass={'border-radius-normal'}>
                    <List  links={[{normalLink:'test',shortLink:'test',selected:false},{normalLink:'test',shortLink:'test',selected:false}]}/>
                </Bord>          
                <div className='text-box mt-16 lg:w-7/12 m-auto'>
                    <h2 className='text-5xl font-bold'>advanced statistics</h2>
                    <p className='muted-text mt-4 text-lg font-medium mx-4'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='flex flex-col mt-20 lg:mt-4 lg:flex-row justify-between items-center cardBox'>
                    {cardData.map((e,index)=>
                        <Card imgCard={e.imgCard} infoCard={e.infoCard} titleCard={e.titleCard} index={index}/>
                    )}
                </div>
            </div>
            <div className='w-full mt-10'>
                    <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} bgColorClass='primary-dark-bg' bgImg={bgImg2}>
                        <div className='text-center py-10'>
                            <h3 className='font-size-xl text-white'>boost your links today</h3>
                            <Button title='get started' color='btn-primary' customClass={'rounded-full w-4/12 h-14 text-lg font-bold'}/>
                        </div>
                    </Bord>
            </div>
        </div>
     );
}