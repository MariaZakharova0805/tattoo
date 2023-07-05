import c from "./appointment.module.css"
import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/appointment/h2_book.svg'
import { Tape } from "../../widgets/tape"
import { TextRegular } from "../../shared/ui/text/text-regular"
import { Container } from "../../shared/ui/container/container"
import { InputForm } from "../../features/input-form"
import { Header_H3 } from "../../shared/ui/text/text-h3"
import { useContactsFormVisibility } from "../../shared/store"
export const Appointment = () => {
  const formVisible = useContactsFormVisibility(state => state.formVisible)

  return (
    <Container>
      <div className={formVisible ? c.block : c.block_hidden}>
        <div className={c.header}>
          <Header_H2 src={h2} alt="Book an appointment" />
          <TextRegular textAlign="center">SEND US A MESSAGE! <br />We want to help you with your tattoo or piercing design.</TextRegular>
          <TextRegular textAlign="center" color="grey">We appreciate setting up appointments but walk ins are always welcome. Please contact us with any questions you may have.</TextRegular>
        </div>
        <div className={c.form}><InputForm /></div>
        <div className={c.block_tape}><Tape text1="Contact Us" text2="Contact US" /></div>
      </div>
      <div className={formVisible ? c.block_hidden : c.block_finish}>
        <Header_H3>Success</Header_H3>
        <p className={c.block_finish_header}>Your application is accepted</p>
        <TextRegular textAlign="center" color="grey">We will contact you within 2 hours.</TextRegular>
      </div>
      <div className={formVisible ? c.block_hidden : c.block_finish}>
        <Header_H3>Success</Header_H3>
        <p className={c.block_finish_header}>Your application is accepted</p>
        <TextRegular textAlign="center" color="grey">We will contact you within 2 hours.</TextRegular>
      </div>
    </Container>
  )
}
