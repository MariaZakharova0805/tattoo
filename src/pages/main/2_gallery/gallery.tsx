import c from './gallery.module.css'
import { IImgs, useMainPageGallery } from "../../../shared/store"

export const Gallery = () => {
    const { imgs } = useMainPageGallery((state) => state)
    return (
        <div className={c.gallary}>
            {imgs.map((img: IImgs) => {
                return (<div key={img.id} className={c.gallary_item}><img key={img.id} src={img.src} className={c.gallary_item_img} alt={img.alt} /></div>)
            })}
        </div>
    )
}