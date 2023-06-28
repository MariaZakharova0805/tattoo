import c from './contact.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/contact/h2_contacts.svg'
import { PageBottom } from "../../entities/page-footer/page-footer"
import { Container } from '../../shared/ui/container/container'
import { useFooter } from '../../shared/store'
import { Link } from '../../shared/ui/link/link'
import { TextRegular } from '../../shared/ui/text/text-regular'
import { Header_H3 } from '../../shared/ui/text/text-h3'
import { Iframe } from '../../entities/iframe';

export const Contact = () => {
  const links = useFooter(state => state.footerLinks)
  return (
    <section className={c.section}>
      <Container>
        <Header_H2 src={h2} alt="artists" />
        <div className={c.top}>
          <div className={c.top_left}>
            {links.map(link => {
              if (link.text1 === 'Instagram') {
                return ''
              }
              else if (link.text2 === 'destintattoocompany@gmail.com') {
                return (
                  <div key={link.id}>

                    <div className={c.top_left_item}>
                      <TextRegular color='grey'>Phone number </TextRegular>
                      <Link href={link.link1}>{link.text1}</Link>
                    </div>

                    <div className={c.top_left_item}>
                      <TextRegular color='grey'>E-mail</TextRegular>
                      <Link href={link.link2}>{link.text2}</Link>
                    </div>
                  </div>
                )
              } else
                return (
                  <div key={link.id}>
                    <TextRegular color='grey'>Address</TextRegular>
                    <div className={c.top_left_item}><Link href={link.link1} >{link.text1}</Link></div>
                  </div>)
            }
            )}
          </div>
          <div className={c.top_right}>
            <div className={c.top_right_top}>
              <TextRegular color='white'>Monday - Sunday 12pm - 10pm</TextRegular>
              <Header_H3>We open 7 days a week</Header_H3>
            </div>
            <div className={c.top_right_socials}>
              {links.map(link => {
                if (link.text1 === "Instagram") {
                  return (
                    <span key={link.id}>
                      <TextRegular color='white'><Link href={link.link1}>{link.text1}</Link> </TextRegular>
                      <TextRegular><Link href={link.link2}>{link.text2}</Link> </TextRegular>
                    </span>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </Container>
      <Iframe />
      <PageBottom />
    </section>
  )
}




