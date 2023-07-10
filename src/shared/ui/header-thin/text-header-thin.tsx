import { FC } from 'react'
import c from "./text-header-thin.module.css"
type HeaderThinProps = {
    children: string
}

export const HeaderThin: FC<HeaderThinProps> = ({ children }) => {
    return (
        <h4 className={c.header_thin}>{children}</h4>
    )
}