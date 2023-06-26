import { useParams } from "react-router";
import c from "./member.module.css"
import { TextRegular } from '../../shared/ui/text/text-regular';
import { useMembers } from '../../shared/store';
import { Header_H2 } from "../../shared/ui/text/text-h2"

export const Member = () => {
    const { name } = useParams();
    const { members } = useMembers(state => state)
    return (
        <div className={c.block}>
            {members.map(member => {
                if (member.name === name) {
                    return (
                        <div>
                            <Header_H2 src={member.header} 
                            alt={"tatto by" + member.name} />
                            <TextRegular>{member.name}
                            </TextRegular>
                        </div>

                    )
                }
            })}

        </div>
    )
}







