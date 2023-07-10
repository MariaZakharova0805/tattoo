import c from "./text-h1.module.css"
import h1 from '../../assets/main/h1.svg'

export const Header_H1 = () => {
    return (
        <img src={h1} alt="Destin Tattoo" className={c.h1_img}/>
    )
}