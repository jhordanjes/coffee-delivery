import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    padding: 0.75rem;
    border-radius: 6px;

    input {
        height: 100%;
        width: 100%;
        border: 0;
        outline: none;
        background: transparent;
    }
`;

export const ErrorMessage = styled.span`
    font-weight: 400;
    color: red;
`;