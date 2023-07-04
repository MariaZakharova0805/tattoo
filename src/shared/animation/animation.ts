import { Variants } from "framer-motion";

export const textLeftToRightAnimation: Variants = {
    offscreen: {
        x: -100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        rotate: -10,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};


export const textBottomToTopAnimation: Variants = {
    offscreen: {
        y: 400,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            duration: 3
        }
    }
};



export const triangleAnimation: Variants = {
    offscreen: {
        y: 0,
        opacity: 1
    },
    onscreen: {
        y: 100,
        opacity: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 8,
            delay: 2
        }
    }
};

export const HideBlock: Variants = {
    offscreen: {
        x: 0,
        opacity: 1,
    },
    onscreen: {
        x: 2600,
        transition: {
            type: "spring",
            duration: 15,

        }
    }
};