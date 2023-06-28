import { FC } from 'react'
import c from './link.module.css'

type LinkProps = {
    children: string | string[],
    href: string | undefined,
    targetfalse?: boolean
}

export const Link: FC<LinkProps> = ({ children, href, targetfalse }) => {
    return (
        <span className={c.link}><a href={href} target={targetfalse === true ? '' : "_blank"}>{children}</a></span>
    )
}