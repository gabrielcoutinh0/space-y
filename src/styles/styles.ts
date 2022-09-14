import styled from "styled-components";
import pixelToRem from "../utils/pxToRem";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin:  ${pixelToRem(24)} auto ${pixelToRem(50)};

    /* @media (max-width: 375px){
        max-width: 375px;
    } */
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: ${pixelToRem(50)};
    padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
    width: ${pixelToRem(201)};
    height: ${pixelToRem(41)};
`;


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-width: ${pixelToRem(815)};
    padding-bottom: ${pixelToRem(135)};
`;

export const FeaturedText = styled.p`
    color: var(--sun);
    font-size: var(--text-3);
    text-transform: uppercase;
    letter-spacing: ${pixelToRem(5)};
    padding-bottom: ${pixelToRem(8)};
`;

export const Title = styled.h1`
    color: var(--text);
    font: var(--font-heading-1);
    letter-spacing: ${pixelToRem(1)};
    padding-bottom: ${pixelToRem(24)};

    & > span{
        color: var(--mars);
    }
`;

export const SubTitle = styled.h4`
    max-width: ${pixelToRem(728)};
    color: var(--gray-05);
    font: var(--font-heading-4);
    letter-spacing: ${pixelToRem(1)};
    padding-bottom: ${pixelToRem(32)};
`;

export const ImageMain = styled.image`
    position: absolute;
    right: 0;
    top: ${pixelToRem(10)};
    background-image: url('./images/home-mars-right.svg');
    background-repeat: no-repeat;
    width: ${pixelToRem(472)};
    height: ${pixelToRem(600)};
`;

export const CardsMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;