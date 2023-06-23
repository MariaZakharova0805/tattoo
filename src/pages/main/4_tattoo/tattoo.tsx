import c from './tattoo.module.css'
import { Container } from "../../../shared/ui/container/container"
import { TextRegular } from "../../../shared/ui/text/text-regular"
import { ButtonArrow } from '../../../shared/ui/button'
import svg_tattoo from "../../../../public/main/svg_tatoo.svg"
import svg_tattoo2 from "../../../../public/main/svg_tatoo2.svg"

export const Tattoo = () => {
  return (
    <div className={c.block}>
      <div className={c.block_header}>
        <img className={c.block_header__img1} src={svg_tattoo} />
        <img className={c.block_header__img2} src={svg_tattoo2} />
        <img className={c.block_header__img3} src={svg_tattoo} />
        <img className={c.block_header__img4} src={svg_tattoo2} />
        <img className={c.block_header__img5} src={svg_tattoo} />
        <img className={c.block_header__img6} src={svg_tattoo2} />
        <img className={c.block_header__img7} src={svg_tattoo} />
      </div>
      <div className={c.block_text}>
        <Container>
          <div className={c.block_texts}>
            <TextRegular>Our artists excel at using the body as a canvas to tell a story in incredibly cohesive and intricate visual detail. We do not repeat ourselves. Every design is yours, and yours alone! </TextRegular>
            <TextRegular>We want our clients to have the best experience. If an artist doesn’t feel they are the right fit for what you are looking for, they will let you know and can recommend another tattoo artist in our studio.</TextRegular>
            <TextRegular>Our tattoo artists do a variety of tattoo styles and they have many different artistic backgrounds. Check out their info so you can select a tattoo artist who can best complement your tattoo idea.</TextRegular>
            <TextRegular>We use ONLY single use needles and safe, top quality pigments and all of our artists work with a sterile work space.</TextRegular>
            <div className={c.block_footer}>
            <ButtonArrow href="./gallery">see gallary</ButtonArrow>
            <ButtonArrow href="./appointment">book</ButtonArrow>
          </div>
          </div>
         
        </Container>
      </div>
    </div>
  )
}