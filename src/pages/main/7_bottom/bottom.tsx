import c from './bottom.module.css'
import { Container } from "../../../shared/ui/container/container"
import { ButtonArrow } from '../../../shared/ui/button'
import { Header_H3 } from '../../../shared/ui/text/text-h3'
export const Bottom = () => {
  return (
    <Container>
      <div className={c.block}>
        <h2 className={c.block_header}>We hope we have your attention and you’re willing </h2>
        <div className={c.block_header_big}><Header_H3 color={'white'}>to take advantage of our inspiration</Header_H3></div>
        <ButtonArrow href="./appointment">book</ButtonArrow>
      </div>
    </Container>
  )
}