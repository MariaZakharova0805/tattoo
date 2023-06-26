import { FC } from 'react'
import c from './link.module.css'

type LinkProps = {
    children: string,
    href: string | undefined,
}

export const Link: FC<LinkProps> = ({ children, href }) => {
    return (
        <span className={c.link}><a href={href} target="_blank">{children}</a></span>
    )
}