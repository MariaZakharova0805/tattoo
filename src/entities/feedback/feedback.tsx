import { FC } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
      <LazyLoadImage
        alt={item.alt}
        effect="blur"
        src={item.src}
        visibleByDefault={item.src === item.src_lazy}
        placeholderSrc={item.srcSM_lazy}
        className={c.feedback_img}
      />

      <LazyLoadImage
        alt={item.alt}
        effect="blur"
        src={item.srcSM}
        visibleByDefault={item.srcSM === item.srcSM_lazy}
        placeholderSrc={item.srcSM_lazy}
        className={c.feedback_img__sm}
      />
      <div className={c.feedback_text}><TextRegular color='grey' >{item.text}</TextRegular></div>
      <div className={c.feedback_footer}>
        <div className={c.feedback_name}><TextRegular>{item.name}</TextRegular></div>
        <ButtonArrow href="#">Read more</ButtonArrow>
      </div>
    </div>
  )
}