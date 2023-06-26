import { FC } from 'react'
import c from "./text.module.css"

type TextProps = {
    children: any,
    color?: 'grey' | 'white',
    textAlign?: 'center' | undefined,
}

export const TextRegular: FC<TextProps> = ({ children, color, textAlign }) => {
    return (
        <p style={{textAlign}} className={color === 'grey' ? c.text_regular_grey : c.text_regular}>{children}</p>
    )
}