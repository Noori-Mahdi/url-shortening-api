import { CardPropsType } from "../../types/types";
import './style.scss'
import './../../sass/global.scss'

export const Card = ({imgCard, titleCard, infoCard, index}:CardPropsType) => {
    return ( 
        <div className="bg-white card border-radius-normal relative px-8 py-5" style={{marginTop:index*50 + 'px'}}>
            <div className="absolute rounded-full primary-dark-bg p-3 imgBox">
                <img className="w-full h-full" src={imgCard}/>
            </div>
            <h3 className="font-weight-bold font-size-lg">{titleCard}</h3>
            <p className="font-weight-normal muted-text">{infoCard}</p>
        </div>
     );
}