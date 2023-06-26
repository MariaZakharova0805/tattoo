import { create } from 'zustand';
import { nanoid } from 'nanoid'
import { MenuLinks, FooterLinks, FooterText, IImgs, IFeedBack, IMember, IQuestion } from './model';
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
// Mike +
import member_mike from "../../../public/artists/mike.jpg"
import mike_header from '../../../public/h2_mike.svg'
import mike_img1 from "../../../public/artists/mike_img1.jpg"
import mike_img2 from "../../../public/artists/mike_img2.jpg"
import mike_img3 from "../../../public/artists/mike_img3.jpg"
import member_craig from "../../../public/artists/craig.jpg"
// Craig +
import craig_header from '../../../public/h2_craig.svg'
import craig_img1 from "../../../public/artists/craig_img1.jpg"
import craig_img2 from "../../../public/artists/craig_img2.jpg"
import craig_img3 from "../../../public/artists/craig_img3.jpg"
import craig_img4 from "../../../public/artists/craig_img4.jpg"
import craig_img5 from "../../../public/artists/craig_img5.jpg"
import craig_img6 from "../../../public/artists/craig_img6.jpg"
//Jackie
import member_jackie from "../../../public/artists/jackie.jpg"
import jackie_header from '../../../public/h2_jackie.svg'
import jackie_img1 from "../../../public/artists/jackie_img1.jpg"
import jackie_img2 from "../../../public/artists/jackie_img2.jpg"
import jackie_img3 from "../../../public/artists/jackie_img3.jpg"
import jackie_img4 from "../../../public/artists/jackie_img4.jpg"
import jackie_img5 from "../../../public/artists/jackie_img5.jpg"
import jackie_img6 from "../../../public/artists/jackie_img6.jpg"
import member_lucky from "../../../public/artists/lucky.jpg"
//Lucky - переделать макет
import lucky_header from '../../../public/h2_lucky.svg'
import lucky_img1 from "../../../public/artists/lucky_img1.jpg"
import lucky_img2 from "../../../public/artists/lucky_img2.jpg"
import lucky_img3 from "../../../public/artists/lucky_img3.jpg"
import lucky_img4 from "../../../public/artists/lucky_img4.jpg"
import lucky_img5 from "../../../public/artists/lucky_img5.jpg"
import lucky_img6 from "../../../public/artists/lucky_img6.jpg"
//Josh
import member_josh from "../../../public/artists/josh.jpg"
import team from '../../../public/artists/team.jpg'

type NavBar = {
    menuLinks: MenuLinks[]
}
export const useNavbar = create<NavBar>(() => ({
    menuLinks: [
        { id: nanoid(), href: '/', text: 'Home' },
        { id: nanoid(), href: '/artists', text: 'Artists' },
        { id: nanoid(), href: '/gallery', text: 'Gallery' },
        { id: nanoid(), href: '/faq', text: 'Faq' },
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



type useMembers = {
    members: IMember[],
}

export const useMembers = create<useMembers>(() => ({
    members: [
        {
            id: nanoid(),
            src: member_mike,
            srcSM: member_mike,
            header: mike_header,
            name: 'Mike',
            job: 'tattoo',
            style: [{ id: nanoid(), text: 'Black & Gray' }, { id: nanoid(), text: 'and large-scale storytelling' }],
            texts: [
                { id: nanoid(), text: 'Our Master Tattoo Artist, Mike started tattooing in 2010.' },
                { id: nanoid(), text: 'After attempting a few more conventional careers, he determined that the only happy life was one filled with art and artists.' },
                { id: nanoid(), text: 'Mikes tattoos in an illustrative style with strong roots in realism. His favourite subjects include birds and the human face, but he approaches every request with equal devotion and interest.' },
                { id: nanoid(), text: 'Challenges like coverups and reworks are always welcome. Mike works primarily in black and grey but will accept colour projects that are right for his.' }
            ],
            instagram: "https://www.instagram.com/destintattoocompany/",
            facebook: "https://www.facebook.com/Destintattoocompany/",
            potfolio: [
                { id: nanoid(), src: mike_img1, srcSM: mike_img1, text: 'neck tattoo' },
                { id: nanoid(), src: mike_img2, srcSM: mike_img2, text: 'back tattoo' },
                { id: nanoid(), src: mike_img3, srcSM: mike_img2, text: 'full body tattoo' },
            ]
        },
        {
            id: nanoid(),
            src: member_craig,
            srcSM: member_craig,
            name: 'Craig',
            header: craig_header,
            job: 'tattoo',
            style: [{ id: nanoid(), text: 'New school ' }, { id: nanoid(), text: 'and Neo-traditional' }],
            texts: [
                { id: nanoid(), text: 'Our Master Tattoo Artist, Craig has been tattooing for just over 6 years.' },
                { id: nanoid(), text: 'He prides himself on being a versatile artist capable of a multitude of styles. ' },
                { id: nanoid(), text: 'He is always looking to challenge his abilities and continually improve — he aims to exceed not only his own but the client’s expectations as well.' },
                { id: nanoid(), text: 'Having said that he appreciates tattooing neo-traditional, new-school, illustrative colour, illustrative black and grey work, and has found a new fascination with the Japanese tattoo style and subject matter.' },
                { id: nanoid(), text: 'Along with to subject matter, he likes tattooing all things nerdy from Star Wars to anime, which fits with him being a huge nerd!' }
            ],
            instagram: "https://www.instagram.com/destintattoocompany/",
            facebook: "https://www.facebook.com/Destintattoocompany/",
            potfolio: [
                { id: nanoid(), src: craig_img1, srcSM: mike_img1, text: 'neck tattoo' },
                { id: nanoid(), src: craig_img2, srcSM: mike_img2, text: 'chest  tattoo' },
                { id: nanoid(), src: craig_img3, srcSM: mike_img2, text: 'full body tattoo' },
                { id: nanoid(), src: craig_img4, srcSM: mike_img1, text: 'sholder tattoo' },
                { id: nanoid(), src: craig_img5, srcSM: mike_img2, text: 'hand tattoo' },
                { id: nanoid(), src: craig_img6, srcSM: mike_img2, text: 'hand tattoo' },
            ]
        },
        {
            id: nanoid(),
            src: member_lucky,
            srcSM: member_lucky,
            name: 'Jackie',
            header: jackie_header,
            job: 'Piercing',
            style: [{ id: nanoid(), text: 'All types of piercings: Eye Dermals, septum, bridge, webbing of tongue, webbing on hands' }],
            texts: [
                { id: nanoid(), text: 'Jackie has participated in seminars in the USA and Mexico with the LBP (Latin American Body Piercing).' },
                { id: nanoid(), text: 'Her license in the USA allows her to practice the different techniques of piercing.' },
                { id: nanoid(), text: 'She is always attentive and provides the best service possible to her clients, working with the highest standards of hygiene, and using premium jewelry.' },
            ],
            instagram: "https://www.instagram.com/destintattoocompany/",
            facebook: "https://www.facebook.com/Destintattoocompany/",
            potfolio: [
                { id: nanoid(), src: jackie_img1, srcSM: mike_img1, text: 'lip piercing' },
                { id: nanoid(), src: jackie_img2, srcSM: mike_img2, text: 'eyebrow piercing' },
                { id: nanoid(), src: jackie_img3, srcSM: mike_img2, text: 'nose piercing' },
                { id: nanoid(), src: jackie_img4, srcSM: mike_img1, text: 'nose and eyebrow piercing' },
                { id: nanoid(), src: jackie_img5, srcSM: mike_img2, text: 'nose and eyebrow piercing ' },
                { id: nanoid(), src: jackie_img6, srcSM: mike_img2, text: 'eyebrow piercing' },
            ]
        },
        {
            id: nanoid(),
            src: member_jackie,
            srcSM: member_jackie,
            name: 'Lucky',
            header: lucky_header,
            job: 'Tattoo',
            style: [{ id: nanoid(), text: 'Black & Gray, traditional and Japanese' }],
            texts: [
                { id: nanoid(), text: 'Spawned from the depths of the abyss Lucky’s goal is to etch drawings of pure unfiltered madness upon thine mortal flesh…or perhaps a cute butterfly if that’s more your flavour.' },
                { id: nanoid(), text: 'His major influences include anything dark/macabre, anime, video games, medieval and Japanese folklore — all presented in a style he likes to call “Dark Trad.” Lucky also enjoys doing pieces in the Traditional and Neo-Traditional styles of tattooing as he frequently puts his own twists on classic designs.' },
                { id: nanoid(), text: 'He can work with you to bring your ideas to life and present them in the most aesthetically pleasing way possible.' },
            ],
            instagram: "https://www.instagram.com/destintattoocompany/",
            facebook: "https://www.facebook.com/Destintattoocompany/",
            potfolio: [
                { id: nanoid(), src: lucky_img1, srcSM: mike_img1, text: 'back tattoo' },
                { id: nanoid(), src: lucky_img2, srcSM: mike_img2, text: 'full arm tattoo' },
                { id: nanoid(), src: lucky_img3, srcSM: mike_img1, text: 'arm and shoulders tattoo' },
                { id: nanoid(), src: lucky_img4, srcSM: mike_img2, text: 'neck and shoulders tattoo ' },
                { id: nanoid(), src: lucky_img5, srcSM: mike_img2, text: 'had  tattoo' },
                { id: nanoid(), src: lucky_img6, srcSM: mike_img2, text: 'arm tattoo' },
            ],
        },
        {
            id: nanoid(),
            src: member_josh,
            srcSM: member_josh,
            name: 'Josh',
            job: 'manager',
            style: [{ id: nanoid(), text: 'He wants clients to feel special and know they appreciate their presence' }],
            texts: [{ id: nanoid(), src: '', srcSM: '', text: '' },],
        },
        {
            id: nanoid(),
            src: team,
            srcSM: team,
            name: 'our team',
            style: [{ id: nanoid(), text: 'The artists we choose to join our team are caring, down to earth and easy for their clients to talk to. We all want the best for our clients. ' }],
            texts: [{ id: nanoid(), src: '', srcSM: '', text: '' },]
        },
    ]
}));


type FAQ = {
    questions: IQuestion[]
}
export const useFaq = create<FAQ>(() => ({
    questions: [
        { id: nanoid(), header: 'How long does a tattoo take to heal and what can I expect during that time?', text: 'Text' },
        { id: nanoid(), header: 'What do I need to do after I get a tattoo?', text: 'The tattoo artist will advise you on specifically what you will need to do after the tattoo. In general, until the tattoo is healed, you will need to protect the tattoo from direct sunlight, avoid prolonged wetness (swimming, bath tubs/hot tubs,etc) and no petroleum jelly as the initial healing agent. We do sell a specific aftercare cream that will help get the tattoo off to a great start. Don’t be cheap and buy a $1.59 tube of A&D ointment at the local pharmacy- ointment has petroleum jelly in it and that is a no no… ' },
        { id: nanoid(), header: 'What do I need to do after I get a piercing?', text: 'A premade, piercing specific solution work excellently. Simple Care is a great example of one of those products. You can also make a solution at home using sea salt and distilled water however, most people are usually very busy and don’t always have time to make this. For the first few weeks, you may see some fluid or some “crustiness” on the jewelry. As attractive as this sounds, it is also normal, this is your body’s natural reaction to a new piercing. Spray (or soak) the piercing once for about 5-10 minutes, then gently wipe away any grossness from the piercing site. This is best done twice a day for the first month, once a day for the second month, and then every so often after that.' },
        { id: nanoid(), header: 'Does it hurt?', text: 'Every person is different, but generally speaking, the anticipation of any pain is usually worse than what it actually feels like.' },
        { id: nanoid(), header: 'Is it safe to get a tattoo or piercing?', text: 'Yes, it is safe to get a tattoo. Every tool and piece of equipment is sterilized immediately after each tattoo is completed. All tattoo needles are 1-time use only. They arrive to us from the manufacturer in individual pre-sealed pouches and are opened up right in front of you.' },
        { id: nanoid(), header: 'What kind of tattoo designs can I choose from?', text: 'We have thousands of pre-made flash designs in the shop, but all of our tattoo artists do custom artwork. If you have an idea, bring in a rough sketch or picture and the tattoo artist can draw something up for you. We will not tattoo any hate or gang related imagery.' },
        { id: nanoid(), header: 'How much does a tattoo or piercing cost?', text: 'Our studio’s minimum price is $100, depending on the part of the body to be tattooed. The individual pricing of a tattoo must be done in person however and cannot be done over the phone, through email or social media messaging.' },
        { id: nanoid(), header: 'How old do I have to be to get a tattoo or piercing?', text: 'Tattoo: Sorry- no one under 18- it’s the law. State/Gov. issued ID required. Piercing: 18 years of age with State/Gov. issued ID. If under 18, a parent/legal guardian must be present with the *minor’s birth certificate, *a State/Gov. issued ID for the parent/guardian and *a picture ID for the minor.' },
        { id: nanoid(), header: 'What is considered a proper form or ID?', text: 'A state issued driver’s license or state ID card, a military ID or a passport. Many forms of ID are valid for 5 or more years and though the ID presented may be valid, the photo must be current enough to match the person presenting the ID.' },
    ]
})); 
  