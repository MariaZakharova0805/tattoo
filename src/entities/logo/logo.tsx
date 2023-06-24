import c from "./logo.module.css"
import logo from '../../../public/svg/logo.svg'
export const Logo = () => {
    return (
        <img src={logo} alt="destin tattoo" className={c.logo} />
    )
}