import { ButtonPropsType } from "../../types/types";
import './style.scss'

export const Button = ({title, borderRadius, color, size, fontSize, customSize}:ButtonPropsType) => {
    return ( 
        <button style={{width:customSize?.width +'px',height:customSize?.height +'px'}} className={`${borderRadius} ${fontSize} ${color} ${size} px-5 py-2`}>
            {title}
        </button>
     );
}