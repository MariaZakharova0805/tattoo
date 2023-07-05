import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IMember } from '../../shared/store'
import { Link } from '../../shared/ui/link/link'
import { Header_H3 } from '../../shared/ui/text/text-h3'
import { TextRegular } from '../../shared/ui/text/text-regular'
import c from './member-about-item.module.css'

type MemberTextProp = {
    member: IMember
}

export const MemberText: FC<MemberTextProp> = ({ member }) => {
    return (
        <div className={c.block}>
            <div className={c.block_header}>
                <Header_H3>{member.name}</Header_H3>
                <TextRegular>{member.job}</TextRegular>
            </div>

            <div className={c.block_style}>
                Style:
                <TextRegular color="grey">{member.style.map(item => {
                    return <span key={item.id}>{item.text}<br /></span>
                })}</TextRegular>
            </div>

            <div className={c.block_text}>
                {member.texts ? member.texts.map(text => {
                    return (<TextRegular color="grey" key={text.id}>{text.text}</TextRegular>)
                }) : ''}
            </div>
            <div className={c.block_social}>
                <Link href={member.instagram}>Instagram</Link><br />
                <Link href={member.facebook}>Facebook</Link>
            </div>
            <div className={c.block_img}>
            <LazyLoadImage
                alt={member.name}
                effect="blur"
                src={member.src}
                placeholderSrc={member.srcSM}
                
            /></div>
        </div>
    )
}