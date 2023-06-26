import { useParams } from "react-router";
import c from "./member.module.css"
import { TextRegular } from '../../shared/ui/text/text-regular';
import { useMembers } from '../../shared/store';
import { Header_H2 } from "../../shared/ui/text/text-h2"
import { Container } from "../../shared/ui/container/container";
import { Header_H3 } from "../../shared/ui/text/text-h3";
import { PageBottom } from "../../entities/page-footer/page-footer";
import { Link } from "../../shared/ui/link/link";

export const Member = () => {
    const { name } = useParams();
    const { members } = useMembers(state => state)
    return (
        <div className={c.block}>
            {members.map(member => {
                if (member.name === name && member.texts) {
                    return (
                        <div key={member.id}>
                            <Container>
                                <Header_H2 src={member.header}
                                    alt={"tatto by" + member.name} />
                                <div className={c.member}>
                                    <div className={c.member_texts}>
                                        <div className={c.member_texts_text}>
                                            <div>
                                                <Header_H3>{member.name}</Header_H3>
                                                <TextRegular>{member.job}</TextRegular></div>
                                            <TextRegular>Style: <br /> {member.style.map(item => {
                                                return <span className={c.flex_right_text} key={item.id}>{item.text}<br /></span>
                                            })}</TextRegular>
                                        </div>
                                        <div className={c.member_texts_social}>
                                            <TextRegular>
                                                <Link href={member.instagram}>Instagram</Link>
                                                <Link href={member.instagram}>Facebook</Link>
                                           </TextRegular>
                                        </div>
                                    </div>
                                    <div className={c.member_img}>
                                        <img src={member.src} className={c.member_img__image} />
                                    </div>
                                </div>
                            </Container>
                            <Container>
                                <Header_H3 textAlign="center">Tattoo by {member.name}</Header_H3>
                                <PageBottom />
                            </Container>
                        </div>
                    )
                }
            })}

        </div>
    )
}







