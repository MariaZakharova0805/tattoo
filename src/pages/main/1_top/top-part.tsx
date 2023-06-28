import c from './top-part.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H1 } from '../../../shared/ui/text/text-h1'
import trinagle from "../../../../public/svg/triangle_mainp.svg"
import { motion } from "framer-motion";
import { textLeftToRightAnimation, triangleAnimation } from '../../../shared/animation';

export const TopPart = () => {
    return (
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            <Container>
                <Header_H1>Destin Tattoo</Header_H1>
                <motion.div variants={textLeftToRightAnimation} className={c.top_h3}>Tattoos & Pircings</motion.div>
                <motion.p variants={textLeftToRightAnimation} className={c.top_text}>Destin Tattoo Company -  Destin Beach's' premier body art studio.
                    All styles of tattooing and piercing, flash and custom designs. Highly qualified staff and friendly atmosphere.</motion.p>
                <motion.img variants={triangleAnimation} src={trinagle} className={c.top_triangle} />
            </Container>
        </motion.section>
    )
}