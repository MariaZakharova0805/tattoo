import { FC } from 'react'
import c from "./text.module.css"
type Header_H2_Props = {
    src: string | undefined,
    alt: string,
}

export const Header_H2: FC<Header_H2_Props> = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className={c.h2_img} />
    )
}