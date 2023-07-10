import img from "../../assets/error/main.jpg"
import img_lazy from "../../assets/error/main_lazy.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import c from "./error.module.css"
import { Header_H3 } from "../../shared/ui/h3/text-h3";
import { HeaderThin } from "../../shared/ui/header-thin/text-header-thin";
import { Container } from "../../shared/ui/container/container";
import { ButtonArrow } from "../../shared/ui/button";
export const Error = () => {
  return (
    <div className={c.error}>
      <Container>
        <div className={c.error_container}>
          <Header_H3 textAlign="center">An error has occurred</Header_H3>
          <HeaderThin>It's better to move back to</HeaderThin>
          <ButtonArrow href="/">main page</ButtonArrow>
          <LazyLoadImage
            alt="error page"
            effect="blur"
            src={img}
            className={c.error_img}
            placeholderSrc={img_lazy}
          />
        </div></Container>
    </div>
  )
}