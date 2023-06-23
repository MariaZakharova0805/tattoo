import { create } from 'zustand';
import { nanoid } from 'nanoid'
import { MenuLinks, FooterLinks, FooterText, IImgs, IFeedBack } from './model';
import main_img1 from "../../../public/main/img1.jpg"
import main_img2 from "../../../public/main/img2.jpg"
import main_img3 from "../../../public/main/img3.jpg"
import main_img4 from "../../../public/main/img4.jpg"
import main_img5 from "../../../public/main/img5.jpg"
import main_img6 from "../../../public/main/img6.jpg"
import feedback_img1 from "../../../public/main/feedback_img1.jpg"
import feedback_img2 from "../../../public/main/feedback_img2.jpg"
import feedback_img3 from "../../../public/main/feedback_img3.jpg"
import feedback_img1_sm from "../../../public/main/feedback_img1_sm.jpg"
import feedback_img2_sm from "../../../public/main/feedback_img2_sm.jpg"
import feedback_img3_sm from "../../../public/main/feedback_img3_sm.jpg"

type NavBar = {
    menuLinks: MenuLinks[]
}
export const useNavbar = create<NavBar>(() => ({
    menuLinks: [
        { id: nanoid(), href: '/', text: 'Home' },
        { id: nanoid(), href: '/artists', text: 'Artists' },
        { id: nanoid(), href: '/gallery', text: 'Gallery' },
        { id: nanoid(), href: '/appointment', text: 'Appointment' },
        { id: nanoid(), href: '/contact', text: 'Contact' },
    ]
}));

type Footer = {
    footerLinks: FooterLinks[],
    footerText: FooterText[]
}
export const useFooter = create<Footer>(() => ({
    footerLinks: [
        { id: nanoid(), text1: '409 HARBOUR BOULEVARD , DESTIN, FL, USA', link1: 'https://goo.gl/maps/Kzijm1wQke7bW5sp9', text2: 'View on map', link2: 'https://goo.gl/maps/Kzijm1wQke7bW5sp9' },
        { id: nanoid(), text1: '+1 850-460-8484 , Destin, FL, USA', link1: 'tel:18504608484', text2: 'destintattoocompany@gmail.com', link2: 'mailto:destintattoocompany@gmail.com' },
        { id: nanoid(), text1: 'Instagram', link1: 'https://www.instagram.com/destintattoocompany/', text2: 'Facebook', link2: 'https://www.facebook.com/Destintattoocompany/' },
    ],
    footerText: [
        { id: nanoid(), text: 'Destin Tattoo Company 2022' },
        { id: nanoid(), text: 'Privacy Policy' },
        { id: nanoid(), text: 'Term of use' },
    ]
}));

type useMainPageGallery = {
    imgs: IImgs[],
}

export const useMainPageGallery = create<useMainPageGallery>(() => ({
    imgs: [
        { id: nanoid(), src: main_img1, alt: 'tatto_image1' },
        { id: nanoid(), src: main_img2, alt: 'tatto_image2' },
        { id: nanoid(), src: main_img3, alt: 'tatto_image3' },
        { id: nanoid(), src: main_img4, alt: 'tatto_image4' },
        { id: nanoid(), src: main_img5, alt: 'tatto_image5' },
        { id: nanoid(), src: main_img6, alt: 'tatto_image6' },
    ],
}));

type useFeedBacks = {
    feedbacks: IFeedBack[],
}

export const useFeedBacks = create<useFeedBacks>(() => ({
    feedbacks: [
        { id: nanoid(), src: feedback_img1, srcSM: feedback_img1_sm, alt: 'feedback', text: "I am in love with my first piercing! Jason redid an idea that I had because I wasn’t 100% certain about it and he made the perfect piece for me.  He was also funny and kept me calm since I was so so nervous. Highly recommend Jackie! Jackie was calm natured and humble which meant so much to me and I happily booked an appointment with him.", name: 'Shannon NeeSmith' },
        { id: nanoid(), src: feedback_img2, srcSM: feedback_img2_sm, alt: 'feedback', text: "II’ve had a tattoo that I’ve been unhappy with since I got it a little more than a year ago. I found Lucky online and went to see him when I realized he does a lot of work with cover ups. After  a short consultation about what I liked and didn’t like, I booked an appointment. Lucky did a fabulous job redoing the tattoo exactly as I wanted and improving on what was already there.", name: 'Jake Gyl' },
        { id: nanoid(), src: feedback_img3, srcSM: feedback_img3_sm, alt: 'feedback', text: "Mike did my tattoo and he did several things I really appreciated: 1) he took the design and my input very seriously, 2) he took his time with placement (asking questions and having me confirm everything) 3) shading! Mike absolutely took the time to carefully and skillfully shade my design. He also was super patient with me moving my arm from time to time because it falling asleep at such a strange angle.", name: 'Jenny Slatehill' },
    ],
}));
