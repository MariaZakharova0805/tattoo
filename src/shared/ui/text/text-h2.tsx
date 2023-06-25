import { FC } from 'react'
import c from "./text.module.css"
type Header_H2_Props = {
    children: string,
}

export const Header_H2: FC<Header_H2_Props> = ({ children }) => {
    return (
        <h2 className={c.h2}>{children}</h2>
    )
}