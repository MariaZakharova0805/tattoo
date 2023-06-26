export interface MenuLinks {
    id: string,
    href: string,
    text: string
}
export interface FooterLinks {
    id: string,
    text1: string,
    link1: string,
    text2: string,
    link2: string,
}
export interface FooterText {
    id: string,
    text: string,
}
export interface IImgs {
    id: string,
    src: string,
    alt: string,
}
export interface IFeedBack {
    id: string,
    src: string,
    srcSM: string,
    alt: string,
    text: string,
    name: string,
}
interface IPorfolio {
    id: string,
    src?: string,
    srcSM?: string,
    text?:string,
}

export interface IMember {
    id: string,
    src: string,
    srcSM: string,
    name: string,
    header?:string,
    job?: string,
    style: IPorfolio[],
    texts?: IPorfolio[],
    instagram?: string,
    facebook?: string,
    potfolio?: IPorfolio[]
}
