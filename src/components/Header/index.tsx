import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cart } = useCart();
    return (
        <Container>
             <Link to="/">
                <img src={logo} alt="Coffee Delivery" />
            </Link>

            <aside>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Manaus, AM</span>
                </div>

                <Link to={`cart`} aria-disabled={cart.length === 0}>
                    <ShoppingCart size={20} weight="fill" />
                    {cart.length > 0 && <span>{cart.length}</span>}
                </Link>
            </aside>
        </Container>
    )
}