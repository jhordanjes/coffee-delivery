import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import * as zod from 'zod';
import { useTheme } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { 
    Container, 
    Heading, 
    Wrapper, 
    Resume, 
    Title, 
    Order, 
    MethodPayment, 
    FormFields, 
    ButtonMethodPayment, 
    CartItem, 
    ItemActions, 
    Prices 
} from "./styles";
import { Input } from "../../components/Form/Input";
import { useCart } from "../../hooks/useCart";
import { formatCurrencyReal } from "../../utils/formatCurrencyReal";
import { QuantityInput } from "../../components/Form/Quantity";
import { MethodPaymentEnum } from "../../enum/MethodPayment.enum";

const AddressOrderSchema = zod.object({
    zipcode: zod.string().refine((value) => value.trim() !== "", 'O campo CEP é obrigatório'),
    street: zod.string().refine((value) => value.trim() !== "", 'O campo rua é obrigatório'),
    number: zod.string().refine((value) => value.trim() !== "", 'O campo número é obrigatório'),
    complement: zod.string(),
    neighborhood: zod.string().refine((value) => value.trim() !== "", 'O campo bairro é obrigatório'),
    city: zod.string().refine((value) => value.trim() !== "", 'O campo cidade é obrigatório'),
    state: zod.string().refine((value) => value.trim() !== "", 'O campo estado é obrigatório'),
    methodPayment: zod.enum(['CREDIT', 'DEBIT', 'MONEY'], { invalid_type_error: 'Informe o método de pagamento' }),
})

export type AddressOrderFormData = zod.infer<typeof AddressOrderSchema>;

export function Cart() {
    const navigate = useNavigate();
    const { cart, removeItem, clearAll } = useCart();
    const theme = useTheme();
    const addressOrderForm = useForm<AddressOrderFormData>({
        resolver: zodResolver(AddressOrderSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            number: '',
            city: '',
            complement: '',
            neighborhood: '',
            state: '',
        }
    });
    const { watch, handleSubmit, setValue } = addressOrderForm;

    const totalItemsPrice = cart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.amount * currentItem.quantity)
    }, 0);

    const deliveryCost = totalItemsPrice * 0.05;

    const total = totalItemsPrice + deliveryCost;

    function handleSaveAddress(data: AddressOrderFormData): void {
        clearAll();

        navigate('/checkout', {
            state:{
                address: data,
            }
        })
    }

    return (
        <FormProvider {...addressOrderForm}>
            <Container onSubmit={handleSubmit(handleSaveAddress)}>
                <Order>
                    <Title>Complete seu pedido</Title>
                    <Wrapper>
                        <Heading>
                            <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
                            <div>
                                <h5>Endereço de entrega</h5>
                                <p>Informe o endereço onde deseja receber seu pedido.</p>
                            </div>
                        </Heading>

                        <FormFields>
                            <div style={{ gridArea: 'zipcode' }}>
                                <Input
                                    placeholder="CEP"
                                    maxLength={8}
                                    name="zipcode"
                                />
                            </div>
                            <div style={{ gridArea: 'street' }}>
                                <Input
                                    placeholder="Rua"
                                    name="street"
                                />
                            </div>
                            <div style={{ gridArea: 'number' }}>
                                <Input
                                    placeholder="Número"
                                    name="number"
                                />
                            </div>

                            <div style={{ gridArea: 'complement' }}>
                                <Input
                                    placeholder="Complemento"
                                    name="complement"
                                />
                            </div>
                            <div style={{ gridArea: 'neighborhood' }}>
                                <Input
                                    placeholder="Bairro"
                                    name="neighborhood"
                                />
                            </div>
                            <div style={{ gridArea: 'city' }}>
                                <Input
                                    placeholder="Cidade"
                                    name="city"
                                />
                            </div>
                            <div style={{ gridArea: 'state' }}>
                                <Input
                                    placeholder="UF"
                                    maxLength={2}
                                    name="state"
                                />
                            </div>
                        </FormFields>
                    </Wrapper>

                    <Wrapper>
                        <Heading>
                            <CurrencyDollar size={22} color={theme.colors["purple-dark"]} />
                            <div>
                                <h5>Pagamento</h5>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                            </div>
                        </Heading>
                        <MethodPayment>
                            <ButtonMethodPayment
                                type="button"
                                isActive={watch('methodPayment') === 'CREDIT'}
                                onClick={() => setValue('methodPayment', 'CREDIT')}
                            >
                                <CreditCard size={16} />
                                <span>{MethodPaymentEnum.CREDIT}</span>
                            </ButtonMethodPayment>

                            <ButtonMethodPayment
                                type="button"
                                isActive={watch('methodPayment') === 'DEBIT'}
                                onClick={() => setValue('methodPayment', 'DEBIT')}
                            >
                                <Bank size={16} />
                                <span>{MethodPaymentEnum.DEBIT}</span>
                            </ButtonMethodPayment>

                            <ButtonMethodPayment
                                type="button"
                                isActive={watch('methodPayment') === 'MONEY'}
                                onClick={() => setValue('methodPayment', 'MONEY')}
                            >
                                <Money size={16} />
                                <span>{MethodPaymentEnum.MONEY}</span>
                            </ButtonMethodPayment>
                        </MethodPayment>
                    </Wrapper>
                </Order>
                
                <Resume>
                    <Title>Cafés selecionados</Title>
                    <div>
                        {cart.map(item => (
                            <CartItem key={item.id}>
                                <div>
                                    <img src={item.image} />
                                    <div>
                                        <span>{item.title}</span>
                                        <ItemActions>
                                            <QuantityInput coffee={item} />
                                            <button type="button" onClick={() => removeItem(item.id)}>
                                                <Trash />
                                                Remover
                                            </button>
                                        </ItemActions>
                                    </div>
                                </div>
                                <strong>{formatCurrencyReal(item.amount)}</strong>
                            </CartItem>
                        ))}
                        <Prices>
                            <div>
                                <span>Total de itens</span>
                                <span>{formatCurrencyReal(totalItemsPrice)}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>{formatCurrencyReal(deliveryCost)}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>{formatCurrencyReal(total)}</span>
                            </div>
                        </Prices>
                        <button type="submit" disabled={!cart.length}>Confirmar pedido</button>
                    </div>
                </Resume>
            </Container>
        </FormProvider>
    )
}