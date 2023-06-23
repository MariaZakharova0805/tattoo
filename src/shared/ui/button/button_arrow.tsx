import { FC } from 'react'
import c from "./button_arrow.module.css"
import arrow from "../../../../public/svg/arrow_red.svg"
import { Link } from 'react-router-dom'

type ButtonArrowProps = { 
    children: string,
    href: string
}

export const ButtonArrow: FC<ButtonArrowProps> = ({ children, href }) => {
    return (
        <div className={c.btn}>
            <Link to={href} className={c.btn_link}><p className={c.btn_link_text}>{children}</p><img src={arrow} /></Link>
        </div>
    )
}