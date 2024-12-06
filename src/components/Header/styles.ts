import styled from "styled-components";

export const Container = styled.header`
    max-width: 1160px;
    padding: 32px 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
        display: flex;
        align-items: center;
        gap: 12px;

        div {
            background-color: ${({ theme }) => theme.colors["purple-light"]};
            border-radius: 6px;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            gap: 4px;
            
            svg {
                color: ${({ theme }) => theme.colors.purple};
            }

            span {
                color: ${({ theme }) => theme.colors["purple-dark"]};
                font-weight: 500;
            }
        }

        a {
            background-color: ${({ theme }) => theme.colors["yellow-light"]};
            color: ${({ theme }) => theme.colors["yellow-dark"]};
            padding: 0.5rem 0.6rem;
            border-radius: 6px;
            position: relative;

            span {
                content: '';
                position: absolute;
                border-radius: 50%;
                top: -9px;
                font-size: 0.75rem;
                padding: 3px 7px;
                background: ${({ theme }) => theme.colors["yellow-dark"]};
                color: ${({ theme }) => theme.colors.white};
              
            }
        }
    }
`;