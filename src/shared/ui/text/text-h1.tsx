import { FC } from 'react'
import c from "./text.module.css"
import h1 from '../../../../public/h1.svg'
type Header_H1_Props = {
    children: string,
}

export const Header_H1: FC<Header_H1_Props> = ({ children }) => {
    return (
        <img src={h1} alt={children} className={c.h1_img}/>
    )
}