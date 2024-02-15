import { LegacyRef, forwardRef, useState } from "react"
import { InputContainer } from "./styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    propsStyle?: React.CSSProperties,
    optional?: boolean
}


export const CustomInput = forwardRef(function CustomInput(
    {propsStyle, optional, ...rest}:InputProps,  ref: LegacyRef<HTMLInputElement> ) {
    const [isFocused,setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    return(
        <InputContainer data-focus={isFocused} style={propsStyle}>
            <input 
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={ref}
                {...rest}
            />
             {optional ? <span>Opcional</span> : null}
       </InputContainer>

    )
})