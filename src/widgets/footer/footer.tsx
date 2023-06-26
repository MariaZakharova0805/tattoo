import c from "./footer.module.css"
import { FooterLinks, FooterText, useFooter } from "../../shared/store"
import { Container } from "../../shared/ui/container/container";
import { Link } from "../../shared/ui/link/link";

export const Footer = () => {
  const { footerLinks, footerText } = useFooter((state) => state);
  return (
    <Container>
      <div className={c.footer}>
        <div className={c.footer_links}>{footerLinks.map((link: FooterLinks) => {
          return (
            <div key={link.id} className={link.text1 === 'Instagram' ? c.instaram : c.footer_links_item}>
              <Link href={link.link1}>{link.text1}</Link>
              <Link href={link.link2} >{link.text2}</Link>
            </div>
          )
        })}</div>
        <span className={c.divider}></span>
        <div className={c.footer_texts}>{footerText.map((item: FooterText) => {
          return (<p className={c.footer_texts_item} key={item.id}>{item.text}</p>)
        })}</div>
      </div>
    </Container>
  )
}