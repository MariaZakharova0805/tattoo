import c from './artists.module.css'
import { useMembers } from "../../shared/store"
import { Artist } from "../../entities/artist"
import { Container } from "../../shared/ui/container/container"
import h2 from '../../assets/artists/h2_artists.svg'
import { Header_H2 } from '../../shared/ui/text/text-h2'
import { HeaderThin } from "../../shared/ui/text/text-header-thin"
import { Tape } from '../../widgets/tape'
import { PageBottom } from '../../widgets/page-footer'

export const Artists = () => {
  const members = useMembers(state => state.members)
  return (
    <div className={c.section}>
      <Container>
        <div className={c.header}>
          <Header_H2 src={h2} alt="artists" />
          <HeaderThin>GET TATTOOED AND PIERCED BY PROFESSIONAL ARTISTS</HeaderThin></div>
        <div className={c.block}>
          {members.map(member => {
            return <Artist member={member} key={member.id} />
          })}
        </div>
      </Container>
      <div className={c.block_tape}><Tape text1="Contact Us" text2="Contact Us" /></div>
      <PageBottom />
    </div>
  )
}

