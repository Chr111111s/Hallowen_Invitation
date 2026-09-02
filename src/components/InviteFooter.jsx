import Divider from './Divider.jsx'
import RevealSection from './RevealSection.jsx'
import Seal from './Seal.jsx'

function InviteFooter() {
  return (
    <RevealSection as="footer" className="footer">
      <Divider />
      <Seal small className="mx-auto mt-6" />
      <p className="footer-sign">
        Te espero para brindar por este nuevo capítulo, con la mejor compañía y algo de magia oscura.
      </p>
      <p className="footer-stamp">Sheyla Denisse &middot; 29 Años</p>
    </RevealSection>
  )
}

export default InviteFooter
