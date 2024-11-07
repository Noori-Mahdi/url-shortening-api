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

export const Home = () => {
        
    
    return ( 
        <div className='home'>
            <div className='flex justify-between items-center ps-24 mt-32'>
                <div className='w-5/12'>
                    <h3 className='font-size-xxl'>More than just shorter links</h3>
                    <p className='font-size-mid font-weight-normal muted-text mb-10'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button customSize={{width:150,height:40}} borderRadius='btn-pill' size='btn-mid' color='btn-primary' fontSize='font-size-mid' title='go started'/>
                </div>
                <div className='flex justify-center items-center w-7/12 ml-12 relative'>
                    <img className='absolute left-24' src={photo} alt="" />
                </div>
            </div>
            <div className=' px-24 mt-32'>
                <div className='h-28'>
                    <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} borderRadiuosClass={'border-radius-normal'} bgColorClass='primary-dark-bg' bgImg={bgImg}>
                        <InputBox btnTitle='shorten it!' placeholder='shorten a link here...'/>
                    </Bord>
                </div>
                <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} borderRadiuosClass={'border-radius-normal'}>
                    <List links={[{normalLink:'test',shortLink:'test',selected:false},{normalLink:'test',shortLink:'test',selected:false}]}/>
                </Bord>          
                <div className='text-box mt-16 w-2/6 m-auto'>
                    <h2 className='font-size-xl'>advanced statistics</h2>
                    <p className='muted-text mt-4 font-weight-normal'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='flex justify-between items-center cardBox'>
                    {cardData.map((e,index)=>
                        <Card imgCard={e.imgCard} infoCard={e.infoCard} titleCard={e.titleCard} index={index}/>
                    )}
                </div>
            </div>
            <div className='w-full mt-10'>
                    <Bord flex positionChild={{align:'items-center',justify:'justify-center'}} bgColorClass='primary-dark-bg' bgImg={bgImg2}>
                        <div className='text-center py-10'>
                            <h3 className='font-size-xl text-white'>boost your links today</h3>
                            <Button  borderRadius='btn-pill' title='get started' color='btn-primary' fontSize='font-size-lg' customSize={{width:180,height:40}}/>
                        </div>
                    </Bord>
            </div>
        </div>
     );
}