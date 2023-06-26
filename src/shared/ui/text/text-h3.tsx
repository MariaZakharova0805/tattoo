import { FC } from 'react'
import c from "./text.module.css"
type Header_H3_Props = {
    children: string | string[],
    color?: 'white' | 'red',
    textAlign?: 'center' | undefined,
}

export const Header_H3: FC<Header_H3_Props> = ({ children, color, textAlign }) => {
    return (
        <h3 style={{textAlign}} className={color === 'white' ? c.h3_white : c.h3_red}>{children}</h3>
    )
}