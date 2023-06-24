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
        <div className={c.block}>
            <img src={member.src} alt={member.name} />
            <Header_H3>{member.name}</Header_H3>
            <TextRegular>{member.job}</TextRegular>

            {member.potfolio ? <p>Style</p>: ''}

            <TextRegular>{member.style.map(item => {
                return <span key={item.id}>{item.text}<br /></span>
            })}</TextRegular>

            {member.potfolio ? <ButtonArrow href={`/artists/${member.name}`}>See More</ButtonArrow> : ''}
        </div>
    )
}