import { create } from 'zustand';
import { nanoid } from 'nanoid'
import { MenuLinks, FooterLinks, FooterText, IImgs, IFeedBack, IMember, IQuestion, IContacts, IImage, SelectItem } from './model';
import main_img1 from "../../assets/main/img1.jpg"
import main_img1_lazy from "../../assets/main/img1_lazy.jpg"
import main_img2 from "../../assets/main/img2.jpg"
import main_img2_lazy from "../../assets/main/img2_lazy.jpg"
import main_img3 from "../../assets/main/img3.jpg"
import main_img3_lazy from "../../assets/main/img3_lazy.jpg"
import main_img4 from "../../assets/main/img4.jpg"
import main_img4_lazy from "../../assets/main/img4_lazy.jpg"
import main_img5 from "../../assets/main/img5.jpg"
import main_img5_lazy from "../../assets/main/img5_lazy.jpg"
import main_img6 from "../../assets/main/img6.jpg"
import main_img6_lazy from "../../assets/main/img6_lazy.jpg"
import feedback_img1 from "../../assets/main/feedback_img1.jpg"
import feedback_img1_lazy from "../../assets/main/feedback_img1_lazy.jpg"
import feedback_img2 from "../../assets/main/feedback_img2.jpg"
import feedback_img2_lazy from "../../assets/main/feedback_img2_lazy.jpg"
import feedback_img3 from "../../assets/main/feedback_img3.jpg"
import feedback_img3_lazy from "../../assets/main/feedback_img3_lazy.jpg"
import feedback_img1_sm from "../../assets/main/feedback_img1_sm.jpg"
import feedback_img1_sm_lazy from "../../assets/main/feedback_img1_sm_lazy.jpg"
import feedback_img2_sm from "../../assets/main/feedback_img2_sm.jpg"
import feedback_img2_sm_lazy from "../../assets/main/feedback_img2_sm_lazy.jpg"
import feedback_img3_sm from "../../assets/main/feedback_img3_sm.jpg"
import feedback_img3_sm_lazy from "../../assets/main/feedback_img3_sm_lazy.jpg"
// Mike +
import member_mike from "../../assets/artists/mike/mike.jpg"
import member_mike_lazy from "../../assets/artists/mike/mike_lazy.jpg"
import mike_header from '../../assets/artists/mike/h2_mike.svg'
import mike_header_lazy from '../../assets/artists/mike/h2_mike-lazy.svg'
import mike_img2 from "../../assets/artists/mike/mike_img2.jpg"
import mike_img2_lazy from "../../assets/artists/mike/mike_img2_lazy.jpg"
import mike_img3 from "../../assets/artists/mike/mike_img3.jpg"
import mike_img3_lazy from "../../assets/artists/mike/mike_img3_lazy.jpg"
import mike_img4 from "../../assets/artists/mike/mike_img4.jpg"
import mike_img4_lazy from "../../assets/artists/mike/mike_img4_lazy.jpg"
import mike_img5 from "../../assets/artists/mike/mike-img5.jpg"
import mike_img5_lazy from "../../assets/artists/mike/mike-img5_lazy.jpg"
import mike_img6 from "../../assets/artists/mike/mike_img6.jpg"
import mike_img6_lazy from "../../assets/artists/mike/mike_img6_lazy.jpg"
import mike_img7 from "../../assets/artists/mike/mike_img7.jpg"
import mike_img7_lazy from "../../assets/artists/mike/mike_img7_lazy.jpg"
// Craig +
import member_craig from "../../assets/artists/craig/craig.jpg"
import member_craig_lazy from "../../assets/artists/craig/craig_lazy.jpg"
import craig_header from '../../assets/artists/craig/h2_craig.svg'
import craig_header_lazy from '../../assets/artists/craig/h2_craig-lazy.svg'
import craig_img2 from "../../assets/artists/craig/craig_img2.jpg"
import craig_img2_lazy from "../../assets/artists/craig/craig_img2_lazy.jpg"
import craig_img3 from "../../assets/artists/craig/craig_img3.jpg"
import craig_img3_lazy from "../../assets/artists/craig/craig_img3_lazy.jpg"
import craig_img4 from "../../assets/artists/craig/craig_img4.jpg"
import craig_img4_lazy from "../../assets/artists/craig/craig_img4_lazy.jpg"
import craig_img5 from "../../assets/artists/craig/craig_img5.jpg"
import craig_img5_lazy from "../../assets/artists/craig/craig_img5_lazy.jpg"
import craig_img6 from "../../assets/artists/craig/craig_img6.jpg"
import craig_img6_lazy from "../../assets/artists/craig/craig_img6_lazy.jpg"
import craig_img7 from "../../assets/artists/craig/craig_img7.jpg"
import craig_img7_lazy from "../../assets/artists/craig/craig_img7_lazy.jpg"
import craig_img8 from "../../assets/artists/craig/craig_img8.jpg"
import craig_img8_lazy from "../../assets/artists/craig/craig_img8_lazy.jpg"
//Jackie
import member_jackie from "../../assets/artists/jackie/jackie.jpg"
import member_jackie_lazy from "../../assets/artists/jackie/jackie_lazy.jpg"
import jackie_header from '../../assets/artists/jackie/h2_jackie.svg'
import jackie_header_lazy from '../../assets/artists/jackie/h2_jackie-lazy.svg'
import jackie_img2 from "../../assets/artists/jackie/jackie_img2.jpg"
import jackie_img2_lazy from "../../assets/artists/jackie/jackie_img2_lazy.jpg"
import jackie_img3 from "../../assets/artists/jackie/jackie_img3.jpg"
import jackie_img3_lazy from "../../assets/artists/jackie/jackie_img3_lazy.jpg"
import jackie_img4 from "../../assets/artists/jackie/jackie_img4.jpg"
import jackie_img4_lazy from "../../assets/artists/jackie/jackie_img4_lazy.jpg"
import jackie_img5 from "../../assets/artists/jackie/jackie_img5.jpg"
import jackie_img5_lazy from "../../assets/artists/jackie/jackie_img5_lazy.jpg"
import jackie_img6 from "../../assets/artists/jackie/jackie_img6.jpg"
import jackie_img6_lazy from "../../assets/artists/jackie/jackie_img6_lazy.jpg"
//Lucky - переделать макет
import member_lucky from "../../assets/artists/lucky/lucky.jpg"
import member_lucky_lazy from "../../assets/artists/lucky/lucky_lazy.jpg"
import lucky_header from '../../assets/artists/lucky/h2_lucky.svg'
import lucky_header_lazy from '../../assets/artists/lucky/h2_lucky-lazy.svg'
import lucky_img1 from "../../assets/artists/lucky/lucky_img1.jpg"
import lucky_img1_lazy from "../../assets/artists/lucky/lucky_img1_lazy.jpg"
import lucky_img2 from "../../assets/artists/lucky/lucky_img2.jpg"
import lucky_img2_lazy from "../../assets/artists/lucky/lucky_img2_lazy.jpg"
import lucky_img3 from "../../assets/artists/lucky/lucky_img3.jpg"
import lucky_img3_lazy from "../../assets/artists/lucky/lucky_img3_lazy.jpg"
import lucky_img4 from "../../assets/artists/lucky/lucky_img4.jpg"
import lucky_img4_lazy from "../../assets/artists/lucky/lucky_img4_lazy.jpg"
import lucky_img5 from "../../assets/artists/lucky/lucky_img5.jpg"
import lucky_img5_lazy from "../../assets/artists/lucky/lucky_img5_lazy.jpg"
import lucky_img6 from "../../assets/artists/lucky/lucky_img6.jpg"
import lucky_img6_lazy from "../../assets/artists/lucky/lucky_img6_lazy.jpg"
import lucky_img7 from "../../assets/artists/lucky/lucky_img7.jpg"
import lucky_img7_lazy from "../../assets/artists/lucky/lucky_img7_lazy.jpg"
import lucky_img8 from "../../assets/artists/lucky/lucky_img8.jpg"
import lucky_img8_lazy from "../../assets/artists/lucky/lucky_img8_lazy.jpg"
//Josh
import member_josh from "../../assets/artists/josh/josh.jpg"
import member_josh_lazy from "../../assets/artists/josh/josh_lazy.jpg"
import team from '../../assets/artists/team/team.jpg'
import team_lazy from '../../assets/artists/team/team_lazy.jpg'

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
        { id: nanoid(), text1: '+1 850-460-8484', link1: 'tel:18504608484', text2: 'destintattoocompany@gmail.com', link2: 'mailto:destintattoocompany@gmail.com' },
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
        { id: nanoid(), src: main_img1, src_lazy: main_img1_lazy, alt: 'tatto_image1' },
        { id: nanoid(), src: main_img2, src_lazy: main_img2_lazy, alt: 'tatto_image2' },
        { id: nanoid(), src: main_img3, src_lazy: main_img3_lazy, alt: 'tatto_image3' },
        { id: nanoid(), src: main_img4, src_lazy: main_img4_lazy, alt: 'tatto_image4' },
        { id: nanoid(), src: main_img5, src_lazy: main_img5_lazy, alt: 'tatto_image5' },
        { id: nanoid(), src: main_img6, src_lazy: main_img6_lazy, alt: 'tatto_image6' },
    ],
}));

type useFeedBacks = {
    feedbacks: IFeedBack[],
}

export const useFeedBacks = create<useFeedBacks>(() => ({
    feedbacks: [
        { id: nanoid(), src: feedback_img1, src_lazy: feedback_img1_lazy, srcSM: feedback_img1_sm, srcSM_lazy: feedback_img1_sm_lazy, alt: 'feedback', text: "I am in love with my first piercing! Jason redid an idea that I had because I wasn’t 100% certain about it and he made the perfect piece for me.  He was also funny and kept me calm since I was so so nervous. Highly recommend Jackie! Jackie was calm natured and humble which meant so much to me and I happily booked an appointment with him.", name: 'Shannon NeeSmith' },
        { id: nanoid(), src: feedback_img2, src_lazy: feedback_img2_lazy, srcSM: feedback_img2_sm, srcSM_lazy: feedback_img2_sm_lazy, alt: 'feedback', text: "II’ve had a tattoo that I’ve been unhappy with since I got it a little more than a year ago. I found Lucky online and went to see him when I realized he does a lot of work with cover ups. After  a short consultation about what I liked and didn’t like, I booked an appointment. Lucky did a fabulous job redoing the tattoo exactly as I wanted and improving on what was already there.", name: 'Jake Gyl' },
        { id: nanoid(), src: feedback_img3, src_lazy: feedback_img3_lazy, srcSM: feedback_img3_sm, srcSM_lazy: feedback_img3_sm_lazy, alt: 'feedback', text: "Mike did my tattoo and he did several things I really appreciated: 1) he took the design and my input very seriously, 2) he took his time with placement (asking questions and having me confirm everything) 3) shading! Mike absolutely took the time to carefully and skillfully shade my design. He also was super patient with me moving my arm from time to time because it falling asleep at such a strange angle.", name: 'Jenny Slatehill' },
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
            srcSM: member_mike_lazy,
            header: mike_header,
            header_lazy: mike_header_lazy,
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
                { id: nanoid(), src: mike_img2, srcSM: mike_img2_lazy, text: 'back tattoo' },
                { id: nanoid(), src: mike_img3, srcSM: mike_img3_lazy, text: 'full body tattoo' },
                { id: nanoid(), src: mike_img4, srcSM: mike_img4_lazy, text: 'full body tattoo' },
                { id: nanoid(), src: mike_img5, srcSM: mike_img5_lazy, text: 'back tattoo' },
                { id: nanoid(), src: mike_img6, srcSM: mike_img6_lazy, text: 'breast tattoo' },
            ]
        },
        {
            id: nanoid(),
            src: member_craig,
            srcSM: member_craig_lazy,
            name: 'Craig',
            header: craig_header,
            header_lazy: craig_header_lazy,
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
                { id: nanoid(), src: craig_img2, srcSM: craig_img2_lazy, text: 'chest  tattoo' },
                { id: nanoid(), src: craig_img3, srcSM: craig_img3_lazy, text: 'full body tattoo' },
                { id: nanoid(), src: craig_img4, srcSM: craig_img4_lazy, text: 'sholder tattoo' },
                { id: nanoid(), src: craig_img5, srcSM: craig_img5_lazy, text: 'hand tattoo' },
                { id: nanoid(), src: craig_img6, srcSM: craig_img6_lazy, text: 'hand tattoo' },
            ]
        },
        {
            id: nanoid(),
            src: member_lucky,
            srcSM: member_lucky_lazy,
            name: 'Jackie',
            header: jackie_header,
            header_lazy: jackie_header_lazy,
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
                { id: nanoid(), src: jackie_img2, srcSM: jackie_img2_lazy, text: 'eyebrow piercing' },
                { id: nanoid(), src: jackie_img3, srcSM: jackie_img3_lazy, text: 'nose piercing' },
                { id: nanoid(), src: jackie_img4, srcSM: jackie_img4_lazy, text: 'nose and eyebrow piercing' },
                { id: nanoid(), src: jackie_img5, srcSM: jackie_img5_lazy, text: 'nose and eyebrow piercing ' },
                { id: nanoid(), src: jackie_img6, srcSM: jackie_img6_lazy, text: 'eyebrow piercing' },
            ]
        },
        {
            id: nanoid(),
            src: member_jackie,
            srcSM: member_jackie_lazy,
            name: 'Lucky',
            header: lucky_header,
            header_lazy: lucky_header_lazy,
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
                { id: nanoid(), src: lucky_img2, srcSM: lucky_img2_lazy, text: 'full arm tattoo' },
                { id: nanoid(), src: lucky_img3, srcSM: lucky_img3_lazy, text: 'arm and shoulders tattoo' },
                { id: nanoid(), src: lucky_img4, srcSM: lucky_img4_lazy, text: 'neck and shoulders tattoo ' },
                { id: nanoid(), src: lucky_img5, srcSM: lucky_img5_lazy, text: 'had  tattoo' },
                { id: nanoid(), src: lucky_img6, srcSM: lucky_img6_lazy, text: 'arm tattoo' },
            ],
        },
        {
            id: nanoid(),
            src: member_josh,
            srcSM: member_josh_lazy,
            name: 'Josh',
            job: 'manager',
            style: [{ id: nanoid(), text: 'He wants clients to feel special and know they appreciate their presence' }],
            texts: [{ id: nanoid(), src: '', srcSM: '', text: '' },],
        },
        {
            id: nanoid(),
            src: team,
            srcSM: team_lazy,
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
        { id: nanoid(), header: 'How long does a tattoo take to heal and what can I expect during that time?', text: 'A brand new tattoo will feel like a sunburn during the first day or two. The tattoo may form a layer of dry skin or lightly scab within a few days- this is normal. Do not try to remove any scabs or dry skin by picking at it or scrubbing in the shower- let your tattoo heal by itself! You should be fully healed within about 2 weeks.' },
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


type Contacts = {
    contactLinks: IContacts[]
    socialLinks: IContacts[]
}
export const useContacts = create<Contacts>(() => ({
    contactLinks: [
        { id: nanoid(), title: 'Phone number', linkText: '+1 850-460-8484', link: 'tel:18504608484' },
        { id: nanoid(), title: 'E-mail', linkText: 'destintattoocompany@gmail.com', link: 'mailto:destintattoocompany@gmail.com' },
        { id: nanoid(), title: 'Address', linkText: '409 HARBOUR BOULEVARD , DESTIN, FL, USA', link: 'https://goo.gl/maps/Kzijm1wQke7bW5sp9' },
    ],
    socialLinks: [
        { id: nanoid(), linkText: 'Instagram', link: 'https://www.instagram.com/destintattoocompany/' },
        { id: nanoid(), linkText: 'Facebook', link: 'https://www.instagram.com/destintattoocompany/' },
    ]
}));


type Galley = {
    images: IImage[]
}
export const useGallery = create<Galley>(() => ({
    images: [
        { id: nanoid(), job: 'tattoo', artist: 'Craig', img: craig_img2, imgSM: craig_img2_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Lucky', img: lucky_img3, imgSM: lucky_img3_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Mike', img: mike_img4, imgSM: mike_img4_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Mike', img: main_img4, imgSM: main_img4_lazy },
        { id: nanoid(), job: 'piercing', artist: 'Jackie ', img: jackie_img6, imgSM: jackie_img6_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Mike', img: mike_img5, imgSM: mike_img4_lazy },
        { id: nanoid(), job: 'piercing', artist: 'Jackie', img: jackie_img5, imgSM: jackie_img5_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Mike', img: mike_img6, imgSM: mike_img6_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Lucky', img: lucky_img7, imgSM: lucky_img7_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Craig', img: craig_img7, imgSM: craig_img7_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Mike', img: mike_img7, imgSM: mike_img7_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Craig', img: craig_img8, imgSM: craig_img8_lazy },
        { id: nanoid(), job: 'piercing', artist: 'Jackie', img: jackie_img3, imgSM: jackie_img3_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Craig', img: main_img5, imgSM: main_img5_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Lucky', img: lucky_img8, imgSM: lucky_img8_lazy },
        { id: nanoid(), job: 'tattoo', artist: 'Lucky', img: lucky_img1, imgSM: lucky_img1_lazy },
    ],
}));


interface ContactsFormVisibility {
    formVisible: boolean
    setFormVisible: (meaning: boolean) => void
}

export const useContactsFormVisibility = create<ContactsFormVisibility>()(
    (set) => ({
        formVisible: true,
        setFormVisible: (meaning) => set(() => ({ formVisible: meaning })),
    }),
)

interface Form {
    formData: Object
    setFormData: (newData: any) => void
}

export const useFormData = create<Form>((set) => ({
    formData: [],
    setFormData: (newData) => {
        set(() => ({
            formData: [newData],
        }));
    },
}));

interface TriangleVisible {
    isVisible: boolean
    setIsVisible: (visibility: boolean) => void
}

export const useTriangleVisible = create<TriangleVisible>((set) => ({
    isVisible: true,
    setIsVisible: (visibility) => {
        set(() => ({
            isVisible: visibility,
        }));
    },
}));


interface SelectList {
    services: SelectItem[]
    serviceItem: string
    setServiceItem: (item: any) => void
}

export const useServiceSelectList = create<SelectList>((set) => ({
    services: [
        { id: nanoid(), value: 'tattoo' },
        { id: nanoid(), value: 'piercing' }
    ],
    serviceItem: '',
    setServiceItem: (selectedService) => set(() => ({ serviceItem: selectedService })),
}));

interface SelectArtistsList {
    artists: SelectItem[]
    artistName: string
    setArtistName: (item: any) => void
}


export const useArtistsSelectList = create<SelectArtistsList>((set) => ({
    artists: [
        { id: nanoid(), value: 'MIKE', job: 'tattoo' },
        { id: nanoid(), value: 'CRAIG', job: 'tattoo' },
        { id: nanoid(), value: 'LUCKY', job: 'tattoo' },
        { id: nanoid(), value: 'JACKIE', job: 'piercing' }
    ],
    artistName: '',
    setArtistName: (selectedArtist) => set(() => ({ artistName: selectedArtist })),
}));