import { LegacyRef, ReactNode, forwardRef } from "react"
import { RadioContainer } from "./style"

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode,
    choosedPayment: boolean,
}

export const CustomRadio = forwardRef(function CustomRadio (
    {children, choosedPayment, ...rest}: RadioProps,  ref: LegacyRef<HTMLInputElement> ) {

    return (
        <RadioContainer data-select={choosedPayment}>
            <input type="radio"
              {...rest}
              ref={ref}
            />
            {children}
        </RadioContainer>
    )
})