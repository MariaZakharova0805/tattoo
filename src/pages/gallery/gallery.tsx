import c from './gallery.module.css'
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/h2_gallery.svg'
import { PageBottom } from "../../entities/page-footer/page-footer"
import { TapeBlack } from "../../entities/tape/tape-black/tape-black"

export const Gallery = () => {
  return (
    <section className={c.section}>
      <div><Header_H2 src={h2} alt="artists" /></div>
      <div className={c.tape}><TapeBlack text1="Enjoy Us" text2="Enjoy Us" /></div>
       <div className={c.gallery}></div>
      <PageBottom />
    </section>
  )
}

