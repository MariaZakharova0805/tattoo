import c from './top-part.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H1 } from '../../../widgets/header-h1/text-h1'
import { motion } from "framer-motion";
import { HideBlock } from '../../../shared/animation';
import { Triangle } from "../../../widgets/triangle/triangle";

export const TopPart = () => {
    return (
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className={c.section}>
            <Container>
                <Header_H1/>
                <motion.div variants={HideBlock} className={c.hideBlock} style={{ transform: "skew(15deg, 15deg)" }}>
                </motion.div>
                <div className={c.top_h3}>Tattoos & Pircings</div>
                <p className={c.top_text}>Destin Tattoo Company -  Destin Beach's' premier body art studio.
                    All styles of tattooing and piercing, flash and custom designs. Highly qualified staff and friendly atmosphere.</p>
                <Triangle />
            </Container>
        </motion.section>
    )
}


