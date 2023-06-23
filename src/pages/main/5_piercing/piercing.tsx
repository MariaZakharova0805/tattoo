import c from './piercing.module.css'
import { Container } from "../../../shared/ui/container/container"
import { TextRegular } from "../../../shared/ui/text/text-regular"
import { ButtonArrow } from '../../../shared/ui/button'
import piercing_h1 from "../../../../public/main/piercing_h1.svg"
import piercing_h2 from "../../../../public/main/piercing_h2.svg"

export const Piercing = () => {
  return (
    <div className={c.block}>
      <div className={c.block_header}>
        <img className={c.block_header__img1} src={piercing_h1} />
        <img className={c.block_header__img2} src={piercing_h2} />
        <img className={c.block_header__img3} src={piercing_h1} />
        <img className={c.block_header__img4} src={piercing_h2} />
        <img className={c.block_header__img5} src={piercing_h1} />
        <img className={c.block_header__img6} src={piercing_h2} />
        <img className={c.block_header__img7} src={piercing_h1} />
      </div>
      <div className={c.block_text}>
        <Container>
          <div className={c.block_texts}>
            <TextRegular>A wide range of piercing from the more common navel and nipple piercings to more advanced male and female genital piercings and everything in between is available. All piercings are carried out in a private consultation room ensuring you one of the best piercing experiences.</TextRegular>
            <TextRegular>For our piercings we do them by hand allowing the utmost accuracy and precision. We utilize medical grade standard initial jewelry made of PTFE for most piercings. We believe you will be impressed as well as delighted in the rapid healing process and comfort of this custom fitted flexible jewelry. </TextRegular>
            <TextRegular>Looking for some new jewelry for existing or new piercings? We got it! Come in to view our custom ordered selection and consult with our experienced piercer to find the jewelry that’s the best fit for you.</TextRegular>
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