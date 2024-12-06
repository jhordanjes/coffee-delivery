import styled, { css } from "styled-components";

export const Container = styled.form`
    margin: 0 auto;
    max-width: 1160px;
    padding: 40px 20px;
    display: flex;
    gap: 30px;
`;

export const Title = styled.h4`
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
`;

export const Order = styled.div`
    width: 640px;
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2rem 1.75rem;

    & + div {
        margin-top: 1rem;
    }
`;

export const FormFields = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-areas:
        'zipcode . .'
        'street street street'
        'number complement complement'
        'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
`;

export const Resume = styled.div`
    flex: 1;
    
    > div {
        background-color: ${({ theme }) => theme.colors["base-card"]};
        border-radius: 5px 35px;
        padding: 2rem 1.75rem;
    }

    button[type=submit] {
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 6px;
        width: 100%;
        padding: 0.8rem;
        text-transform: uppercase;
        border: 0;
        cursor: pointer;
        margin-top: 1rem;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
`;

export const Heading = styled.div`
    display: flex;  
    gap: 10px;

    p {
        font-size: 0.85rem;
        line-height: 1.5rem;
    }
`;

export const MethodPayment = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 1.5rem;

    svg {
        color: ${({ theme }) => theme.colors.purple};
    }
`; 

interface ButtonMethodPaymentProps {
    isActive?: boolean;
}

export const ButtonMethodPayment = styled.button<ButtonMethodPaymentProps>`
    border: 0;
    display: flex;
    gap: 14px;
    align-items: center;
    background: ${({ theme }) => theme.colors["base-button"]};
    padding: 1rem 0.75rem;
    border-radius: 6px;
    width: calc(100% / 3);
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: pointer;

    ${({ isActive, theme }) => isActive && css`
        border: 1px solid ${theme.colors.purple};
        background: ${theme.colors["purple-light"]};
    `}
`;

export const CartItem = styled.div`
    display: flex;
    justify-content: space-between;

    & + div {
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        border-top: 1px solid ${({ theme }) => theme.colors['base-button']};
    }

    > div {
        display: flex;
    }

    img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
`;

export const ItemActions = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

    > button {
        background-color: ${({ theme }) => theme.colors['base-button']};
        color: ${({ theme }) => theme.colors["base-text"]};
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 400;
        font-size: 0.85rem;
        text-transform: uppercase;
        cursor: pointer;

        svg {
            color: ${({ theme }) => theme.colors.purple};
        }
    }
`;

export const Prices = styled.div`
    div {
        display: flex;
        justify-content: space-between;

        & + div {
            margin-top: 0.8rem;
        }

        &:last-child {
            font-size: 1.25rem;
            font-weight: 600;
        }
    }
`;