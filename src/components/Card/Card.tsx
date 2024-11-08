import { CardPropsType } from "../../types/types";
import './style.scss'
import './../../sass/global.scss'
import { useEffect, useState } from "react";

export const Card = ({imgCard, titleCard, infoCard, index}:CardPropsType) => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })   

    useEffect(() => {
        const handleResize = () =>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return ( 
<div className="bg-white card border-radius-normal relative px-8 py-5" 
     style={{ marginTop: windowSize.width < 1023 && index !== 0 ? '80px' : `${index * 50}px` }}>
     
    <div className="absolute rounded-full primary-dark-bg p-3 transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2">
        <img className="w-full h-full" src={imgCard} alt="Card Image" />
    </div>
    
    <h3 className="font-weight-bold font-size-lg">{titleCard}</h3>
    <p className="font-weight-normal muted-text">{infoCard}</p>
</div>


     );
}