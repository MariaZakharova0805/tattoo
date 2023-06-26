import { Header_H2 } from "../../shared/ui/text/text-h2"
import h2 from '../../../public/h2_contacts.svg'
import { PageBottom } from "../../entities/page-footer/page-footer"
export const Contact = () => {
  return (
    <div>
      <Header_H2 src={h2} alt="artists" /> 
      <PageBottom/>
    </div>
  )
}




