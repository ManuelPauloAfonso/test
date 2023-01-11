import { Container } from "./style";
import img from '../../assets/Union.png'
import { useEffect, useState } from "react";





export default function Main() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <div>
        <div>
          <h1>Shop Terms & Conditions</h1>
          <h3>GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h3>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
          <div>
            <h5>Definitions & Interpretation</h5>
            <p>In the following Terms and Conditions of sale, unless the context requires otherwise</p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
              <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
              <li>(d) if the Customer comprises more than one person, each of those person’s liability is joint and several;</li>
              <li>(e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; </li>
              <li>(f) for all periods and times specified in clauses 5 and 11, time is of the essence; and</li>
              <li>(g) all references to currency are references to Australian dollars. </li>
            </ul>

          </div>
        </div>
        <div className="btn">
          {showTopBtn && (
            <button onClick={goToTop} id="home"> <img src={img} alt="" /></button>
          )}
        </div>
      </div>

    </Container>
  )
}