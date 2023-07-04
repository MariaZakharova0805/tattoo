import { useEffect } from "react";
import trinagle from "../../../public/svg/triangle_mainp.svg"
import c from "./triangle.module.css"
import { useTriangleVisible } from "../../shared/store";
import { motion } from 'framer-motion';

export const Triangle = () => {
    const { isVisible, setIsVisible } = useTriangleVisible(state => state)
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const opacity = isVisible ? 1 : 0;

    return (
        <div className={c.top_triangle}>
            <motion.img src={trinagle} className={c.top_triangle_img} 
            style={{
                opacity,
                transition: "opacity 0.5s ease",
                pointerEvents: isVisible ? "auto" : "none",
            }} />
        </div>
    )
}