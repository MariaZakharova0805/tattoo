import c from './gallery.module.css'
import { IImgs, useMainPageGallery } from "../../../shared/store"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

export const Gallery = () => {
    const { imgs } = useMainPageGallery((state) => state)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 6}}
            className={c.gallary}>
            {imgs.map((img: IImgs) => {
                return (<div key={img.id} className={c.gallary_item}>
                    <LazyLoadImage
                        alt={img.alt}
                        effect="blur"
                        src={img.src}
                        visibleByDefault={img.src === img.src}
                        placeholderSrc={img.src_lazy}
                    />
                </div>)
            })}
        </motion.div>
    )
}



