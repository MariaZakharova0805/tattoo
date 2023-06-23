import { FC } from 'react'
import c from './container.module.css'
type ContainerProps = {
    children: any
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className={c.container}>{children}</div>
    )
}