import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps{
    children: ReactNode;
    asChild?: boolean; 
}

export function Button({children, asChild}: ButtonProps){
    
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx (
            'py-4 px-3 bg-orange-200 font-semibold text-black text-sm hover:bg-orange-100 w-full transition-colors rounded',  
            {
               
            })}>{children}</Comp>
    )
}