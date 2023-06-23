import c from "./feedbacks.module.css"
import { Container } from '../../../shared/ui/container/container'
import { useFeedBacks } from '../../../shared/store'
import { Feedback } from "../../../entities/feedback/feedback"
import { TapeGrey } from "../../../entities/tape-grey/tape-grey"
import { TapeBlack } from "../../../entities/tape-black/tape-black"

export const Feedbacks = () => {
  const { feedbacks } = useFeedBacks((state) => state)
  return (
    <div className={c.block}>
      <TapeGrey/>
      <TapeBlack/>
      <Container>
        <div className={c.feedbacks}>
          {feedbacks.map(item => <Feedback item={item} key={item.id} />)}
        </div>
      </Container>
    </div>
  )
}