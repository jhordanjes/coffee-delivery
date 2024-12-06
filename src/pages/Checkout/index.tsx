import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container, Heading, Info, ItemInfo } from "./styles";
import { useEffect, useState } from "react";
import { AddressOrderFormData } from "../Cart";
import { MethodPaymentEnum } from "../../enum/MethodPayment.enum";

export function Checkout() {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [address, setAddress] = useState<AddressOrderFormData>();

    useEffect(() => {
        if (!location.state) {
            navigate('/');
        }

        if (location.state && location.state.address) {
            setAddress(location.state.address);
        }
    }, [location.state, navigate]);

    if (!address) {
        return;
    }

    return (
        <Container>
            <div>
                <Heading>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h5>Agora é só aguardar que logo o café chegará até você</h5>
                </Heading>

                <Info>
                    <div>
                        <ItemInfo>
                            <MapPin style={{ background: theme.colors.purple }} />
                            <div>
                                <span>Entrega em <strong>{address?.street}, {address?.number}</strong></span>
                                <span>{address?.neighborhood} - {address?.city}, {address?.state}</span>
                            </div>
                        </ItemInfo>

                        <ItemInfo>
                            <Timer style={{ background: theme.colors.yellow }} />
                            <div>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </ItemInfo>

                        <ItemInfo>
                            <CurrencyDollar style={{ background: theme.colors["yellow-dark"] }} />
                            <div>
                                <span>Pagamento na entrega</span>
                                <strong>{MethodPaymentEnum[address!.methodPayment]}</strong>
                            </div>
                        </ItemInfo>
                    </div>
                </Info>
            </div>
            <img src="/imgs/checkout.svg" alt="" />
        </Container>
    )
}