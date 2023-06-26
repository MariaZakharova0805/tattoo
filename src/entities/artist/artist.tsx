import { FC } from 'react'
import c from './artist.module.css'
import { IMember } from '../../shared/store'
import { Header_H3 } from '../../shared/ui/text/text-h3'
import { TextRegular } from '../../shared/ui/text/text-regular'
import { ButtonArrow } from '../../shared/ui/button'

type ArtistProps = {
    member: IMember
}
export const Artist: FC<ArtistProps> = ({ member }) => {
    return (
        <section className={c.block}>
            <div className={member.potfolio? c.item_responsive : c.item_not_responsive}>
                <div className={c.content}>
                    <img src={member.src} alt={member.name} className={member.potfolio? c.block_img_transform : c.block_img} />
                </div>
            </div>
            <div className={c.flex}>
            <div className={c.flex_left}>
                <Header_H3>{member.name}</Header_H3>
                <TextRegular>{member.job}</TextRegular>
            </div>
            <div className={c.flex_right}>
                {member.potfolio ? <p className={c.flex_header}>Style</p> : ''}
                <TextRegular>{member.style.map(item => {
                    return <span className={c.flex_right_text} key={item.id}>{item.text}<br /></span>
                })}</TextRegular>
                {member.potfolio ? <ButtonArrow href={`/artists/${member.name}`}>See More</ButtonArrow> : ''}
            </div>
            </div>
        </section>
    )
}