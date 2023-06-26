import { FC } from 'react'
import c from './container.module.css'
type ContainerProps = {
    children: any,
    style?: React.CSSProperties
}

export const Container: FC<ContainerProps> = ({ children, style }) => {
    return (
        <div className={c.container} style={style}>{children}</div>
    )
}