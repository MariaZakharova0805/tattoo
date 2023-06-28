import { FC } from 'react';
import c from './gallery-item.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IImage } from '../../shared/store';
import { Link } from '../../shared/ui/link/link';

type GalleryItemProps = {
    item: IImage 
}

export const GalleryItem: FC<GalleryItemProps> = ({ item }) => {
    return (
        <figure className={c.item}>
           <LazyLoadImage
                alt={item.job + "by" + item.artist}
                effect="blur"
                src={item.img}
                placeholderSrc={item.imgSM}
            />
            <figcaption className={c.figcaption}>
                <Link href={`artists/${item.artist}`} targetfalse={true}>{item.job} by {item.artist}</Link>
            </figcaption>
        </figure>
    )
}