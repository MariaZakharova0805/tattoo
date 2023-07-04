import c from './about.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H3 } from "../../../shared/ui/text/text-h3"
import { TextRegular } from "../../../shared/ui/text/text-regular"
import opened from "../../../../public/main/opened.svg"
import opened_lazy from "../../../../public/main/opened-svg_lazy.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";
import { textBottomToTopAnimation } from '../../../shared/animation'

export const About = () => {
  return (
    <>
      <div className={c.header}>
        <Header_H3 color="white">Destin Tattoo Company</Header_H3></div>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={c.section}>
        <Container>
          <motion.div variants={textBottomToTopAnimation} className={c.text}>
            <TextRegular>Welcome to Destin Tattoo Company, Destin Beach's' premier body art studio. Destin Tattoo provides high quality tattoos and piercings performed in a clean, friendly environment by highly qualified staff. </TextRegular>
            <TextRegular>Our artists are skilled in all styles of tattooing and piercing, flash and custom designs, applied using the best materials and hospital sterilization.</TextRegular>
            <TextRegular>Offering the most modern  techniques and a light, clean, and spacious studio, you’ll find yourself at ease in a welcoming atmosphere. </TextRegular>
            <TextRegular>We create your custom tattoo or piercing designs!</TextRegular>
          </motion.div>
          <motion.div variants={textBottomToTopAnimation}>
            <LazyLoadImage
              alt="opened 7 days"
              effect="blur"
              src={opened}
              visibleByDefault={opened === "../../../../public/main/opened-svg_lazy.svg"}
              placeholderSrc={opened_lazy}
              className={c.footer}
            /></motion.div>
        </Container>
      </motion.section>
    </>
  )
}