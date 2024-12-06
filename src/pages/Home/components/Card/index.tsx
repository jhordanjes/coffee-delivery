import { ShoppingCartSimple } from "phosphor-react";
import { ICoffeeResponse } from "../../../../interfaces/ICoffee.response";
import { 
    ButtonCard, 
    Container, 
    Content, 
    Footer, 
    Price,  
    TagWrapper, 
    WrapperPrice 
} from "./styles";
import { useTheme } from "styled-components";
import { useCart } from "../../../../hooks/useCart";
import { QuantityInput } from "../../../../components/Form/Quantity";

interface Props {
    coffee: ICoffeeResponse;
}

export function Card({ coffee }: Props) {
    const theme = useTheme();
    const { addNewItem } = useCart();

    return (
        <Container>
            <img src={coffee.image} alt={coffee.title} />
            <TagWrapper>
                {coffee.tags.map(item => <span key={item}>{item}</span>)}
            </TagWrapper>

            <Content>
                <h4>{coffee.title}</h4>
                <p>{coffee.description}</p>
            </Content>

            <Footer>
                <Price>
                    <span>R$</span>
                    <strong>{coffee.amount.toFixed(2)}</strong>
                </Price>

                <WrapperPrice>
                    <QuantityInput coffee={coffee} />
                    
                    <ButtonCard type="button" onClick={() => addNewItem(coffee)}>
                        <ShoppingCartSimple size={22} color={theme.colors['base-card']} />
                    </ButtonCard>
                </WrapperPrice>
            </Footer>
        </Container>
    );
}