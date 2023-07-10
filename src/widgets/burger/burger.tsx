import { FC } from "react"
import c from "./burger.module.css"

type BurgerProps = {
    onClick: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const Burger: FC<BurgerProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className={c.burger}>
            <div className={c.burger_line1}></div>
            <div className={c.burger_line2}></div>
        </div>
    )
}