import { VerticalListPropsType } from "../../types/types";
import './../../sass/global.scss'

export const VerticalList = ({listItems,title}:VerticalListPropsType) => {
    return ( 
        <ul className="mx-10">
            <div className="text-white font-weight-bold mb-5">{title}</div>
            {listItems.map((e)=>
                <li className="cursor-pointer text-gray font-weight-normal mt-2">{e}</li>
            )}
        </ul>
     );
}