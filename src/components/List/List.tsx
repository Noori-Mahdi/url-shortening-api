import { ListPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import './../../sass/global.scss'

export const List = ({links}:ListPropsType) => {
    return ( 
        <ul>
            {links.map((e)=>
            <li className="lg:flex pb-3 text-lg font-bold  justify-between items-center mt-2 bg-white rounded-lg lg:px-8 lg:py-3">
                <div className="border-b lg:border-b-0 p-3 secandray-text">
                    {e.normalLink}
                </div>
                <div className="lg:flex justify-between items-center">
                    <div className="primary-text p-3">{e.shortLink}</div>
                    <Button color="btn-primary" customClass={'w-10/12 lg:text-base text-xl font-bold block mx-auto rounded-lg'} title="copy"/>
                </div>
            </li>
            )}
        </ul>
     );
}