import styled from "styled-components";

export const Container = styled.div`
    max-width: 1160px;
    margin: 0 auto;
    padding: 80px 20px;
    display: flex;
    gap: 3rem;

    img {
    margin-bottom: -1rem;
  }
`;

export const Heading = styled.div`
    h1 {
        color: ${({ theme }) => theme.colors['yellow-dark']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
        font-weight: 800;
    }

    h5 {
        color: ${({ theme }) => theme.colors['base-subtitle']};
        font-size: 1.15rem;
        font-weight: 500;
    }
`;

export const Info = styled.div`
    position: relative;
    margin-top: 2rem;
    background: ${({ theme }) =>
        `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
    border-radius: 6px 36px;
    border: 1px solid transparent;

    > div {
        background: ${({ theme }) => theme.colors.white};
        border-radius: 6px 36px;
        padding: 3rem;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    div {
        display: flex;
        flex-direction: column;
    }

    & + div {
        margin-top: 1.75rem;
    }
    
    svg {
        color: ${({ theme }) => theme.colors.white};
        padding: 8px 10px;
        border-radius: 50%;
        font-size: 2.5rem;
    }
`;