import c from './gallery.module.css'
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/gallery/h2_gallery.svg'
import { PageBottom } from "../../widgets/page-footer/page-footer"
import { TapeBlack } from "../../widgets/tape/tape-black"
import { useGallery } from '../../shared/store'
import { GalleryItem } from '../../entities/gallery-item/gallery-item'
import { ModalImg } from '../../widgets/modal-img'


export const Gallery = () => {
  const images = useGallery(state => state.images)
  return (
    <section className={c.section}>
      <div><Header_H2 src={h2} alt="artists" /></div>
      <div className={c.tape}><TapeBlack text1="Enjoy Us" text2="Enjoy Us" /></div>
      <ModalImg />
      <div className={c.gallery}>
        {images.map(item => {
          return (
            <GalleryItem item={item} key={item.id} />
          )
        })}
      </div>
      <PageBottom />
    </section>
  )
}

