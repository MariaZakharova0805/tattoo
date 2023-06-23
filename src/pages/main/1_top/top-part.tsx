import c from './top-part.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H3 } from "../../../shared/ui/text/header_h3"
import h1 from '../../../../public/main/h1.svg'
import trinagle from "../../../../public/svg/triangle_mainp.svg"
export const TopPart = () => {
    return (
        <Container>
            <img src={h1} className={c.top_h1} alt="Destin Tattoo" />
            <div className={c.top_h3}><Header_H3>Tattoos & Pircings</Header_H3></div>
            <p className={c.top_text}>Destin Tattoo Company -  Destin Beach's' premier body art studio.
                All styles of tattooing and piercing, flash and custom designs. Highly qualified staff and friendly atmosphere.</p>
            <img src={trinagle} className={c.top_triangle} />
        </Container>
    )
}