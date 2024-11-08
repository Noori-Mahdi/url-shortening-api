import { InputPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import './../../sass/global.scss'

export const InputBox = ({btnTitle, placeholder}:InputPropsType) => {
    return ( 
        <div className="h-full w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full">
                <div className="w-10/12 lg:h-11 lg:w-8/12 lg:mr-4">
                    <input className="h-14 lg:h-11 p-2 w-full"  placeholder={placeholder} type="text"/>
                    <div className="mt-2 text-error font-weight-normal italic">Please add a link</div>
                </div>
                <Button title={btnTitle} customClass={'rounded-lg w-10/12 h-12 text-2xl lg:w-2/12 lg:text-xl'} color="btn-primary"/>
            </div>
        </div>
     );
}