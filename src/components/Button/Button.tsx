import { ButtonPropsType } from "../../types/types";
import './style.scss'

export const Button = ({title, color, customClass}:ButtonPropsType) => {
    return ( 
        <button  className={`${color} ${customClass} px-5 py-2`}>
            {title}
        </button>
     );
}