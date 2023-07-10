import { FC } from 'react'
import c from "./text-regular.module.css"

type TextProps = {
    children: any,
    color?: 'grey' | 'white',
    textAlign?: 'center' | undefined,
    textTransform?: 'uppercase' | undefined,
}

export const TextRegular: FC<TextProps> = ({ children, color, textAlign, textTransform }) => {
    return (
        <p style={{textAlign, textTransform}} className={color === 'grey' ? c.text_regular_grey : c.text_regular}>{children}</p>
    )
}