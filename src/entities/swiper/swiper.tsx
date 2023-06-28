import { FC, useState, useEffect } from "react";
import c from './swiper.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IPorfolio } from "../../shared/store";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type SwiperProps = {
    member: any
}
export const SwiperItem: FC<SwiperProps> = ({ member }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [itemsPerView, setItemsPerView] = useState(window.innerWidth / 2);
    useEffect(() => {
        if (windowWidth > 786) {
            setItemsPerView(3)
        }
        else {
            setItemsPerView(2)
        }
        const handleResize = (event: any) => {
            setWindowWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return (
        <>
            <Swiper
                autoHeight={true}
                slidesPerView={itemsPerView}
                watchSlidesProgress={true}
                className={c.swiper}
                loop={true}
            >
                {member.map((item: IPorfolio) => {
                    return (
                        <SwiperSlide key={item.id} className={c.swiper_slide}>
                            <LazyLoadImage key={item.id}
                                alt={item.text}
                                effect="blur"
                                src={item.src}
                                placeholderSrc={item.srcSM}
                                className={c.swiper_slide_img}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

