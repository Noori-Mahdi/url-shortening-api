import { ListPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import './../../sass/global.scss'

export const List = ({links}:ListPropsType) => {
    return ( 
        <ul>
            {links.map((e)=>
            <li className="flex justify-between items-center mt-2 bg-white border-radius-normal px-8 py-3">
                <div className="secandray-text">
                    {e.normalLink}
                </div>
                <div className="flex justify-between items-center">
                    <div className="primary-text mx-3">{e.shortLink}</div>
                    <Button color="btn-primary" size="btn-mid" title="copy" borderRadius="btn-normal"/>
                </div>
            </li>
            )}
        </ul>
     );
}