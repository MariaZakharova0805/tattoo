import { FC } from 'react'
import c from "./text.module.css"

type Header_H1_Props = {
    children: string,
}

export const Header_H1: FC<Header_H1_Props> = ({ children }) => {
    return (
        <h2 className={c.h1}>{children}</h2>
    )
}