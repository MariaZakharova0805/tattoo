// import c from './artists.module.css'
import { useMembers } from "../../shared/store"
import { Artist } from "../../entities/artist"
import { Container } from "../../shared/ui/container/container"
// import h1 from '../../../public/artists/h1.svg'
import { Header_H2 } from '../../shared/ui/text/text-h2'
export const Artists = () => {

  const members = useMembers(state => state.members)
  return (
    <div>
      <Container>
      <Header_H2>Artists</Header_H2>

        {members.map(member => {
          return <Artist member={member} key={member.id} />
        })}
      </Container>
      </div>
  )
}

