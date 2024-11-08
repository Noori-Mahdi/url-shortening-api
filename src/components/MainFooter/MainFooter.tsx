import { icon, listItems, Logo } from "../../data/obj";
import { VerticalList } from "../VerticalList/VerticalList";
import './style.scss';

export const MainFooter = () => {
    return ( 
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-24 py-10 w-full bg-dark MainFooter">
            <div>
                <img src={Logo}/>
            </div>
            <div className="flex flex-col lg:flex-row  text-center lg:text-start justify-between mt-8 lg:mt-0">
                {Object.keys(listItems).map((e:string)=>
                <VerticalList listItems={listItems[e]} title={e}/>
                )}
            </div>
            <div>
                <ul className="flex mt-8 icon-list lg:mt-0">
                    {Object.values(icon).map((e)=>
                        <li className="mx-3 "><img src={e}/></li>
                    )}
                </ul>
            </div>
        </div>
     );
}
