import { InputPropsType } from "../../types/types";
import { Button } from "../Button/Button";
import './../../sass/global.scss'

export const InputBox = ({btnTitle, placeholder}:InputPropsType) => {
    return ( 
        <div className="h-full w-full">
            <div className="flex justify-center items-center h-full w-full">
                <div className="h-11 w-8/12 mr-4">
                    <input className="h-11 p-2 w-full"  placeholder={placeholder} type="text"/>
                    <div className="mt-2 text-error font-weight-normal italic">Please add a link</div>
                </div>
                <Button title={btnTitle} borderRadius="btn-normal" fontSize="font-size-mid" color="btn-primary" size="btn-mid"/>
            </div>
        </div>
     );
}