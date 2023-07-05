import img from "../../assets/error/main.jpg"
import img_lazy from "../../assets/error/main_lazy.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import c from "./error.module.css"
import { Header_H3 } from "../../shared/ui/text/text-h3";
import { HeaderThin } from "../../shared/ui/text/text-header-thin";
import { Link } from "../../shared/ui/link/link";
import { Container } from "../../shared/ui/container/container";
export const Error = () => {
  return (
    <section className={c.error}>
      <Container>
        <Header_H3 textAlign="center">An error has occurred</Header_H3>
        <HeaderThin>It's better to move back to</HeaderThin>
        <Link href="/" targetfalse={true}>main page</Link>
        <LazyLoadImage
          alt="error page"
          effect="blur"
          src={img}
          className={c.error_img}
          placeholderSrc={img_lazy}
        /></Container>
    </section>
  )
}