import c from './contact.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/contact/h2_contacts.svg'
import map from '../../../public/contact/Map.jpg'
import map_lazy from '../../../public/contact/MapSM.jpg'
import { PageBottom } from "../../entities/page-footer/page-footer"
import { Container } from '../../shared/ui/container/container'
import { useFooter } from '../../shared/store'
import { Link } from '../../shared/ui/link/link'
import { TextRegular } from '../../shared/ui/text/text-regular'
import { Header_H3 } from '../../shared/ui/text/text-h3'

// const appStyle = {
//   width: '100vw',
//   overflow: 'scroll',
// };

const handleOnWheel = () => {
  console.log('onWheel: scrolling the list...');
};


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
      <LazyLoadImage
        alt="map"
        effect="blur"
        src={map}
        visibleByDefault={map === '../../../public/contact/MapSM.jpg'}
        placeholderSrc={map_lazy}
        className={c.map}
        onWheel={handleOnWheel}
      />
      <PageBottom />
    </section>
  )
}




