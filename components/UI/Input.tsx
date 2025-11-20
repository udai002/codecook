import { cva } from "class-variance-authority";
import { FormEvent } from "react";

const InputStyles = cva(["outline-none rounded-xl"] , {
    variants:{
        intent:{
            primary:"border-2 border-blue-500/10 text-black"
        } , 
        size:{
            large:"px-2 py-4 text-xl" 
        }
    }
})

type InputProps = {
    intent: "primary";
    size: "large";
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    value?: string;
    title?: string;
    type?: string;
};

function Input({intent , size  , onChange , title , type , value}:InputProps){
    return <input className={InputStyles({intent:intent , size:size})} type={type} onChange={onChange} placeholder={title} value={value}/>
}

export default Input 