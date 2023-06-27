import c from './about.module.css'
import { Container } from "../../../shared/ui/container/container"
import { Header_H3 } from "../../../shared/ui/text/text-h3"
import { TextRegular } from "../../../shared/ui/text/text-regular"
import opened from "../../../../public/main/opened.svg"
import part3_img from "../../../../public/main/part3_img.jpg"
import part3_img_lazy from "../../../../public/main/part3_img_768_lazy.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const About = () => {
  return (
    <div className={c.part3}>
      <Container>
        <div className={c.part3_header}><Header_H3 color="white">Destin Tattoo Company</Header_H3></div>
        <div className={c.part3_text}>
          <TextRegular>Welcome to Destin Tattoo Company, Destin Beach's' premier body art studio. Destin Tattoo provides high quality tattoos and piercings performed in a clean, friendly environment by highly qualified staff. </TextRegular>
          <TextRegular>Our artists are skilled in all styles of tattooing and piercing, flash and custom designs, applied using the best materials and hospital sterilization.</TextRegular>
          <TextRegular>Offering the most modern  techniques and a light, clean, and spacious studio, you’ll find yourself at ease in a welcoming atmosphere. </TextRegular>
          <TextRegular>We create your custom tattoo or piercing designs!</TextRegular>
        </div>
      </Container>
      <div className={c.part3_img}>
      <LazyLoadImage src={part3_img} placeholderSrc={part3_img_lazy} alt="destin tattoo company" />
      </div>
      <div className={c.part3_footer}>
        <img src={opened} alt="opened 7 days" className={c.part3_footer_img} />
      </div>
    </div>
  )
}