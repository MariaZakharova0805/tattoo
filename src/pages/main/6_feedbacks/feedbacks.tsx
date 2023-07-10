import c from "./feedbacks.module.css"
import { Container } from '../../../shared/ui/container/container'
import { useFeedBacks } from '../../../shared/store'
import { Feedback } from "../../../entities/feedback-item/feedback-item"
import { Tape } from "../../../widgets/tape/tape"

export const Feedbacks = () => {
  const { feedbacks } = useFeedBacks((state) => state)
  return (
    <div className={c.block}>
      <Tape text1={"work"} text2={"review"}/>
      <Container>
        <div className={c.feedbacks}>
          {feedbacks.map(item => <Feedback item={item} key={item.id} />)}
        </div>
      </Container>
    </div>
  )
}