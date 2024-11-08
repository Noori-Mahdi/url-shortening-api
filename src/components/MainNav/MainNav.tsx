import { MainNavPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import iconMenu from './../../assets/img/bars-solid.svg'
import logo from './../../assets/img/logo.svg'
import './../../sass/global.scss'
import './style.scss'

export const MainNav = ({listPage}:MainNavPropsType) => {
    return ( 
        <div className="flex justify-between items-center mx-5 lg:mx-24 mt-10 main-nav">
            <div className="flex items-center">
                <img src={logo} />
                <ul className="mx-4 hidden lg:flex">
                    {listPage.map((e)=>
                        <li className="mx-2 font-weight-normal muted-text"><a href="">{e}</a></li>
                    )}
                </ul>
            </div>
            <img width={30} height={30} className="lg:hidden" src={iconMenu}/>
            <div className="hidden lg:block">
                <Button customClass={null} title="login" color="btn-transparent" />
                <Button customClass={'rounded-full'} title="sign up" color="btn-primary"/>
            </div>
        </div>
     );
}