import { FC } from 'react'
import c from "./text.module.css"
import shadow from '../../../../public/shadow.png'
type Header_H2_Props = {
    children: string,
}

export const Header_H2: FC<Header_H2_Props> = ({ children }) => {
    return (
        <div className={c.block}>
            <h2 className={c.h2}>{children}</h2>
            <div className={c.shadow}>
                <img src={shadow} alt="shadow" />
            </div>
        </div>
    )
}