import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 4px;
    width: 4rem;

    span {
        width: 15px;
        text-align: center;
    }

    button {
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.colors.purple};
        cursor: pointer;
    }
`;