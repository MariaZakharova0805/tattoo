import { FC } from 'react'
import c from "./text.module.css"
// import noise from '../../../../public/noise.png'

type Header_H1_Props = {
    children: string,
}

export const Header_H1: FC<Header_H1_Props> = ({ children }) => {
    return (
        <div className={c.block}>
            <h2 className={c.h1}>{children}</h2>
            <div className={c.noise}>
                {/* <img src={noise} alt="shadow" /> */}
            </div>
        </div>
    )
}