import { TopPart } from "./1_top"
import { Gallery } from "./2_gallery"
import { About } from "./3_about"
import { Tattoo } from "./4_tattoo"
import { Piercing } from "./5_piercing"
import { Feedbacks } from "./6_feedbacks"
import { Bottom } from "./7_bottom"
export const Main = () => {
  return (
    <>
      <TopPart />
      <Gallery />
      <About />
      <Tattoo />
      <Piercing />
      <Feedbacks />
      <Bottom/>
    </>
  )
}

