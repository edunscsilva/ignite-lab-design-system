import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean; 
}

export function Button({children, asChild, className, ...props}: ButtonProps){
    
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx (
            'py-3 px-4 bg-orange-200 font-semibold text-black text-sm hover:bg-orange-100 w-full transition-colors rounded',
            className,  
            {
               
            }
            )}
            {...props}
            >{children}</Comp>
    )
}