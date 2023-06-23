import { FC } from "react"
import { IFeedBack } from "../../shared/store"
import c from "./feedback.module.css"
import { TextRegular } from "../../shared/ui/text/text-regular"
import { ButtonArrow } from "../../shared/ui/button"

type FeedbackProps = {
  item: IFeedBack
}

export const Feedback: FC<FeedbackProps> = ({ item }) => {
  return (
    <div className={c.feedback}>
      <img className={c.feedback_img} src={item.src} alt={item.alt} />
      <img className={c.feedback_img__sm} src={item.srcSM} alt={item.alt} />
      <div className={c.feedback_text}><TextRegular color='grey' >{item.text}</TextRegular></div>
      <div className={c.feedback_footer}>
        <div className={c.feedback_name}><TextRegular>{item.name}</TextRegular></div>
        <ButtonArrow href="#">Read more</ButtonArrow>
      </div>
    </div>
  )
}