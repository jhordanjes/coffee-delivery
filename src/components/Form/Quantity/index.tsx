import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
import { ICoffeeResponse } from "../../../interfaces/ICoffee.response";
import { useCart } from "../../../hooks/useCart";

interface Props {
    coffee: ICoffeeResponse;
}

export function QuantityInput({ coffee }: Props) {
    const { decrementItem, getItemQuantity, incrementItem } = useCart();
    return (
        <Container>
            <button type="button" onClick={() => decrementItem(coffee)}>
                <Minus size={14} />
            </button>
            <span>{getItemQuantity(coffee.id)}</span>
            <button type="button" onClick={() => incrementItem(coffee)}>
                <Plus size={14} />
            </button>
        </Container>
    )
}