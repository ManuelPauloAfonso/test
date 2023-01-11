import { Container } from "./style";
import Logo from '../../assets/Logo.svg'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'

import { Link } from 'react-scroll'

export default function Header() {
  return (
    <Container >
      <img src={Logo} />
      <ul>
        <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500}  >home</Link></li>
        <li>Desktop PCs</li>
        <li>Networking Devices</li>
        <li>Printers & Scanners</li>
        <li>PC Parts</li>
        <li>All Other Products</li>
        <li>Repairs</li>
        <li> <button>ours  Deals  </button> </li>
      </ul>
      <ul>
        <li><img src={img1} /></li>
        <li><img src={img2} /></li>
        <li><img src={img3} /></li>
      </ul>

    </Container>
  )
}