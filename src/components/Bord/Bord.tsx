import { BordPropsType } from "../../types/types";

export const Bord = ({children, bgColorClass, bgImg, borderRadiuosClass, positionChild, flex=false}:BordPropsType) => {
    return ( 
        <div className={`relative w-full h-full ${flex && 'flex'} ${positionChild?.align} ${positionChild?.justify} ${borderRadiuosClass} ${bgColorClass}`}>
            {bgImg && <img className={`absolute left-0 top-0 w-full h-full z-0 ${borderRadiuosClass}`} src={bgImg}/>}
            <div className="relative z-0 w-full h-full">
                {children}
            </div>
        </div>
     );
}