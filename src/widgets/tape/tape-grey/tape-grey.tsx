import React, { FC } from "react"
import c from "./tape-grey.module.css"

type TapeGreyProps = {
  text1: string,
  text2: string
}

export const TapeGrey: FC<TapeGreyProps> = ({ text1, text2 }) => {
  return (
    <section className={c.block}>
      <div className={c.tape}>
        {Array.from({ length: 20 }).map((_, i) =>
        (<React.Fragment key={i}>
          <div className={c.work}>{text1}</div>
          <div className={c.triange}></div>
          <div className={c.review}>{text2}</div>
          <div className={c.triange}></div>
        </React.Fragment>))}
      </div>
    </section>
  )
}

