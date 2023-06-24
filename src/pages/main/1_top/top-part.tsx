import c from './top-part.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H1 } from '../../../shared/ui/text/text-h1'
import { Header_H3 } from "../../../shared/ui/text/text-h3"
import trinagle from "../../../../public/svg/triangle_mainp.svg"
export const TopPart = () => {
    return (
        <Container>
            <Header_H1>Destin Tattoo</Header_H1>
            <div className={c.top_h3}><Header_H3>Tattoos & Pircings</Header_H3></div>
            <p className={c.top_text}>Destin Tattoo Company -  Destin Beach's' premier body art studio.
                All styles of tattooing and piercing, flash and custom designs. Highly qualified staff and friendly atmosphere.</p>
            <img src={trinagle} className={c.top_triangle} />
        </Container>
    )
}