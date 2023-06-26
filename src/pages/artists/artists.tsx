// import c from './artists.module.css'
import { useMembers } from "../../shared/store"
import { Artist } from "../../entities/artist"
import { Container } from "../../shared/ui/container/container"
import h2 from '../../../public/h2_artists.svg'
import { Header_H2 } from '../../shared/ui/text/text-h2'
import { Header_H3 } from '../../shared/ui/text/text-h3'

export const Artists = () => {
  const members = useMembers(state => state.members)
  return (
    <div>
      <Container>
      <Header_H2 src={h2} alt="artists"/>
      <Header_H3>GET TATTOOED AND PIERCED BY PROFESSIONAL ARTISTS</Header_H3>
        {members.map(member => {
          return <Artist member={member} key={member.id} />
        })}
      </Container>
      </div>
  )
}

