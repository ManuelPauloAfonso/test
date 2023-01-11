import { Container } from "./style";
import visa from '../../assets/visa.png'



export default function Footer() {
  return (
    <Container>
      <div>
        <div>
          <h1>Sign Up To Our Newsletter.</h1>
          <p>Be the first to hear about the latest offers.</p>
          <div className="menu-ul">
            <ul>
              <h5>Information</h5>
              <li>About Us</li>
              <li>About Zip</li>
              <li> Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
            </ul>
            <ul>
              <h5>Information</h5>
              <li>About Us</li>
              <li>About Zip</li>
              <li> Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
            </ul>
            <ul>
              <h5>Information</h5>
              <li>About Us</li>
              <li>About Zip</li>
              <li> Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
            </ul>
            <ul>
              <h5>Andress</h5>
              <p>Address: 1234 Street Adress City Address, 1234
                Phones: (00) 1234 5678
                We are open: Monday-Thursday: 9:00 AM - 5:30 PM
                Friday: 9:00 AM - 6:00 PM
                Saturday: 11:00 AM - 5:00 PM
                E-mail: shop@email.com</p>
            </ul>

          </div>
          <div className="line">

          </div>
          <div className="visa">
            <img src={visa} alt="" />
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}