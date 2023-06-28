import { Container } from '../../shared/ui/container/container'
import { ButtonArrow } from '../../shared/ui/button'
import { Header_H3 } from '../../shared/ui/text/text-h3'
import { HeaderThin } from '../../shared/ui/text/text-header-thin'
import c from './page-footer.module.css'

export const PageBottom = () => {
  return (
    <Container>
      <div className={c.block}>
        <HeaderThin>We hope we have your attention and you’re willing</HeaderThin>
        <Header_H3 color={'white'}>to take advantage of our inspiration</Header_H3>
        <ButtonArrow href="/appointment">book</ButtonArrow>
      </div>
    </Container>
  )
}