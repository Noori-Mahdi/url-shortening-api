import { MainNavPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import logo from './../../assets/img/logo.svg'
import './../../sass/global.scss'
import './style.scss'

export const MainNav = ({listPage}:MainNavPropsType) => {
    return ( 
        <div className="flex justify-between items-center mx-24 mt-10 main-nav">
            <div className="flex items-center">
                <img src={logo} alt="" />
                <ul className="flex mx-4">
                    {listPage.map((e)=>
                        <li className="mx-2 font-weight-normal muted-text"><a href="">{e}</a></li>
                    )}
                </ul>
            </div>
            <div>
                <Button title="login" borderRadius="btn-none" color="btn-transparent" size="btn-mid" />
                <Button title="sign up" borderRadius="btn-pill" color="btn-primary" size="btn-mid"/>
            </div>
        </div>
     );
}