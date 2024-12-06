import styled from "styled-components";

export const Banner = styled.section`
    position: relative;
`;

export const BannerContent = styled.div`
    max-width: 1160px;
    padding: 92px 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3.5rem;
`;

export const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
`;

export const Title = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
`;

export const Subtitle = styled.h6`
    margin-top: 0.75rem;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
`;

export const FeatureHighlights = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    margin-top: 3.5rem;

    div {
        display: flex;
        align-items: center;

        svg {
            border-radius: 50%;
            padding: 0.3rem;
        }

        span {
            margin-left: 0.75rem;
        }
    }
`;

export const MainContent = styled.main`
    max-width: 1160px;
    padding: 32px 20px 150px;
    margin: 0 auto;

    h3 {
        color: ${({ theme }) => theme.colors['base-subtitle']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
        font-weight: 800;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 3.75rem;
    grid-column-gap: 2rem;
    margin-top: 2.5rem;
`;