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
`;

export const TitleH1 = styled.h1`
    color: var(--text);
    font: var(--font-heading-1);
    letter-spacing: ${pixelToRem(1)};
    padding: ${pixelToRem(8)} 0 ${pixelToRem(24)};

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

export const ContainerAbout = styled.div`
    background: url('./images/lines.svg'),  url('./images/stars.svg'), var(--background-section);
    background-repeat: no-repeat;
    background-position: left center;
`;

export const About = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${pixelToRem(112)};
    max-width: 1200px;
    margin: 0 auto;
`;

export const ImageAbout = styled.image`
    background-image: url('./images/mars.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: ${pixelToRem(518)};
    height: ${pixelToRem(518)};
    filter: drop-shadow(0px 14.5263px 29.0526px rgba(249, 133, 0, 0.29));
`;

export const DivTexts = styled.div`
    max-width: ${pixelToRem(603)}
`;

export const TitleH2 = styled.h2`
    font: var(--font-heading-2);
    color: var(--text);
    padding: ${pixelToRem(14)} 0;

    & > span{
        color: var(--sun);
    }
`;

export const Paragraph = styled.p`
    font: var(--text-1);
    letter-spacing: ${pixelToRem(1)};
    text-align: justify;
    color: var(--gray-05);
    padding: ${pixelToRem(12)} 0;
`;

export const DivGallery = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${pixelToRem(173)} 0 ${pixelToRem(100)} 0;
`;

export const DivTextGallery = styled.div`
    margin-right: ${pixelToRem(90)};
`;

export const ContainerForm = styled.div`
    background: url('./images/stars.svg'), var(--gray-01);
    padding-top: ${pixelToRem(150)};
`;

export const DivForm = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

export const BoxForm = styled.form`
    background-color: var(--background-form);
    border-radius: ${pixelToRem(20)};
    padding: ${pixelToRem(39)} ${pixelToRem(51)} ${pixelToRem(61)};
    max-width: ${pixelToRem(520)};
    width: ${pixelToRem(520)};
    max-height: ${pixelToRem(796)};
`;

export const TicketIcon = styled.div`
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
`;

export const TitleH3 = styled.h3`
    font: var(--font-heading-3);
    letter-spacing: ${pixelToRem(1)};
    color: var(--text);
    padding: ${pixelToRem(16)} 0;
    max-width: ${pixelToRem(264)};
`;

export const ParagraphForm = styled.h3`
    font: var(--text-1);
    color: var(--gray-05);
    max-width: ${pixelToRem(308)};
`;

export const ImageForm = styled.image`
    background-image: url('/images/rocket.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: ${pixelToRem(546)};
    height: ${pixelToRem(981)};
`;

export const CheckBox = styled.input.attrs({type: 'checkbox'})`
    width: ${pixelToRem(24)};
    height: ${pixelToRem(24)};
    border: 1.5px solid var(--gray-05);
    margin-right: ${pixelToRem(16)};
    background-color: transparent;
    border-radius: ${pixelToRem(6)};
    appearance: none;

    &:checked{
        background: var(--mars);
    }
`;

export const LabelCheckBox = styled.label`
    display: flex;
    color: var(--text);
    padding: ${pixelToRem(24)} 0 ${pixelToRem(32)};
`;