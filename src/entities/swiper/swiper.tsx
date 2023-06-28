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
    const [width, setWidth] = useState(window.innerWidth);
    const [itemWidth, setItemWidth] = useState(window.innerWidth / 2);
    useEffect(() => {
        if (width > 786) {
            setItemWidth(3)
        }
        else {
            setItemWidth(2)
        }
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    return (
        <>
            <Swiper
                slidesPerView={itemWidth}
                centeredSlides={false}
                className={c.mySwiper}
            >
                {member.map((item: IPorfolio) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <LazyLoadImage key={item.id}
                                alt={item.text}
                                effect="blur"
                                src={item.src}
                                placeholderSrc={item.srcSM}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

