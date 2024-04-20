import { PropsWithChildren } from "react";

export const ErrorMessage = ({children}:PropsWithChildren) => {
    return(
        <div 
        className="bg-red-100 border-l-4 border-red-600 text-red-600 font-bold p-3 text-center mt-3 uppercase">
            {children}
        </div>
    )
}