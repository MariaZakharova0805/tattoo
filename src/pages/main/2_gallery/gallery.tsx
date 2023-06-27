import c from './gallery.module.css'
import { IImgs, useMainPageGallery } from "../../../shared/store"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Gallery = () => {
    const { imgs } = useMainPageGallery((state) => state)
    return (
        <div className={c.gallary}>
            {imgs.map((img: IImgs) => {
                return (<div key={img.id} className={c.gallary_item}>
                    <LazyLoadImage src={img.src} placeholderSrc={img.src_lazy} alt={img.alt} />
                </div>)
            })}
        </div>
    )
}