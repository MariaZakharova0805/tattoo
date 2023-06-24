import { useParams } from "react-router";
import c from "./member.module.css"
import { TextRegular } from '../../shared/ui/text/text-regular';
import { useMembers } from '../../shared/store';

export const Member = () => {
    const { name } = useParams();
    const { members } = useMembers(state => state)
    return (
        <div className={c.block}>
            {members.map(member => {
                if (member.name === name) {
                    return (
                        <TextRegular>{member.name}</TextRegular>
                    )
                }
            })}

        </div>
    )
}