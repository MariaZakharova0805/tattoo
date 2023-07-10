import { useParams } from "react-router";
import c from "./member.module.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMembers } from '../../shared/store';
import { Header_H2 } from "../../shared/ui/h2/text-h2"
import { Container } from "../../shared/ui/container/container";
import { Header_H3 } from "../../shared/ui/h3/text-h3";
import { PageBottom } from "../../widgets/page-footer/page-footer";
import { SwiperItem } from "../../features/swiper";
import { MemberText } from "../../entities/member-about-item";
export const Member = () => {
    const { name } = useParams();
    const { members } = useMembers(state => state)
    return (
        <>
            {members.map(member => {
                if (member.name === name && member.texts && member.job) {
                    return (
                        <div key={member.id}>
                            <Container>
                                <Header_H2 src={member.header} alt={member.job + ' ' + member.name} />
                                <MemberText member={member} />
                            </Container>
                            <div className={c.swiper}><SwiperItem member={member.potfolio} /></div>
                            <Container>
                                <div className={c.header_h3}><Header_H3 textAlign="center">{member.job} by {member.name}</Header_H3></div>
                                <PageBottom />
                            </Container>
                        </div>
                    )
                }
            })}

        </>
    )
}