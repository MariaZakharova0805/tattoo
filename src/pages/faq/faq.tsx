import c from './faq.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../assets/faq/h2_faq.svg'
import img from '../../assets/faq/img.jpg'
import img_lazy from '../../assets/faq/img_lazy.jpg'
import { PageBottom } from "../../widgets/page-footer/page-footer"
import { TapeBlack } from "../../widgets/tape/tape-black"
import { HeaderThin } from '../../shared/ui/text/text-header-thin'
import { TextRegular } from '../../shared/ui/text/text-regular'
import { Container } from '../../shared/ui/container/container'
import { useFaq } from '../../shared/store'
import { DropDownItem } from '../../entities/drop-down-item'

export const Faq = () => {
  const questions = useFaq(state => state.questions)
  return (
    <section className={c.section}>
      <Container>
        <div className={c.text}>
          <Header_H2 src={h2} alt="FAQ" />
          <HeaderThin>WHAT SHOULD I EXPECT ON MY FIRST TATTOO or piercing?</HeaderThin>
          <TextRegular textAlign='center'>We're here to help. See the FAQ below. Have more questions? Contact us or stop by in and consult with an artist!</TextRegular>
        </div>
      </Container>
      <div className={c.tape}><TapeBlack transform={"rotate(-5deg)"} text1="Enjoy Us" text2="Enjoy Us" /></div>
      <Container>
        <div className={c.question}>
          {questions.map(question => {
            return (<DropDownItem header={question.header} text={question.text} key={question.id} />)
          })}
        </div>
      </Container>
      <div className={c.img}>
        <LazyLoadImage
          alt="tatto"
          effect="blur"
          src={img}
          visibleByDefault={img === '../../../public/faq/img_lazy.jpg'}
          placeholderSrc={img_lazy}
        /></div>
      <PageBottom />
    </section>
  )
}




