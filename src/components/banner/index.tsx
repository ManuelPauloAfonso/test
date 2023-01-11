import { Container } from "./style";
import banner from '../../assets/banner.png'


export default function Banner() {
    return (
        <Container>
            <img src={banner} alt="" />
        </Container>
    )
}