import c from './contact.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import map from '../../assets/contact/Map.jpg'
import map_lazy from '../../assets/contact/MapSM.jpg'
import h2 from '../../assets/contact/h2_contacts.svg'
import { Header_H2 } from "../../shared/ui/text/text-h2"
import { PageBottom } from "../../widgets/page-footer/page-footer"
import { Container } from '../../shared/ui/container/container'
import { Link } from '../../shared/ui/link/link'
import { TextRegular } from '../../shared/ui/text/text-regular'
import { Header_H3 } from '../../shared/ui/text/text-h3'
import { Iframe } from '../../widgets/iframe';
import { useContacts } from '../../shared/store';


export const Contact = () => {
  const { contactLinks, socialLinks } = useContacts(state => state)
  function changeOpacity() {
    console.log(1)
  }

  return (
    <section className={c.section}>
      <Container>
        <Header_H2 src={h2} alt="artists" />
        <div className={c.top}>
          <div className={c.top_left}>
            {contactLinks.map(link => {
              return (
                <div className={c.top_left_item} key={link.id}>
                  <TextRegular color='grey'>{link.title}</TextRegular>
                  <TextRegular><Link href={link.link}>{link.linkText}</Link></TextRegular>
                </div>
              )
            })}
          </div>
          <div className={c.top_right}>
            <div className={c.top_right_top}>
              <TextRegular color='white'>Monday - Sunday 12pm - 10pm</TextRegular>
              <Header_H3>We open 7 days a week</Header_H3>
            </div>
            <div className={c.top_right_socials}>
              {socialLinks.map(link => {
                return (
                  <TextRegular color='white' key={link.id}><Link href={link.link}>{link.linkText}</Link></TextRegular>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
      <div className={c.map} onClick={() => changeOpacity()}>
        <div className={c.map_iframe}><Iframe /></div>
        <LazyLoadImage
          alt="map iframe"
          effect="blur"
          src={map}
          placeholderSrc={map_lazy}
          className={c.map_img}
        />
      </div>
      <PageBottom />
    </section>
  )
}




