import { FC } from 'react'
import c from "./text.module.css"

type TextProps = {
    children: any,
    color?: 'grey' | 'white',
}

export const TextRegular: FC<TextProps> = ({ children, color }) => {
    return (
        <p className={color === 'grey' ? c.text_regular_grey : c.text_regular}>{children}</p>
    )
}