import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px;
    width: 256px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 0 2rem 1.5rem 2rem;

    img {
        margin-top: -20px;
        max-width: 120px;
        max-height: 120px;
    }
`;

export const TagWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 1rem;

    span {
        background-color: ${({ theme }) => theme.colors["yellow-light"]};
        color: ${({ theme }) => theme.colors["yellow-dark"]};
        text-transform: uppercase;
        border-radius: 10px;
        padding: 4px 8px;
        font-size: 0.625rem;
        font-weight: 700;
    }
`;

export const Content = styled.div`
    text-align: center;
    margin-top: 0.75rem;

    h4 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
        font-size: 0.875rem;
        line-height: 1rem;
        font-weight: 400;
        margin-top: 0.5rem;
        color: ${({ theme }) => theme.colors['base-label']};
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
`;

export const Price = styled.div`
    span {
        font-size: 0.875rem;
        font-weight: 400;
    }

    strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        font-size: 1.5rem;
        margin-left: 0.25rem;
    }
`;

export const WrapperPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const ButtonCard = styled.button`
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    border: 0;
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
`;