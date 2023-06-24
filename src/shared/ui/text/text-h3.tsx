import { FC } from 'react'
import c from "./text.module.css"
type Header_H3_Props = {
    children: string,
    color?: 'white' | 'red',
}

export const Header_H3: FC<Header_H3_Props> = ({ children, color }) => {
    return (
        <h3 className={color === 'white' ? c.h3_white : c.h3_red}>{children}</h3>
    )
}