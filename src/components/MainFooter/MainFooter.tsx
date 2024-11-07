import { icon, listItems, Logo } from "../../data/obj";
import { VerticalList } from "../VerticalList/VerticalList";
import './style.scss';

export const MainFooter = () => {
    return ( 
        <div className="flex justify-between px-24 py-10 w-full bg-dark MainFooter">
            <div>
                <img src={Logo}/>
            </div>
            <div className="flex justify-between">
                {Object.keys(listItems).map((e:string)=>
                <VerticalList listItems={listItems[e]} title={e}/>
                )}
            </div>
            <div>
                <ul className="flex">
                    {Object.values(icon).map((e)=>
                        <li className="mx-3"><img src={e}/></li>
                    )}
                </ul>
            </div>
        </div>
     );
}
