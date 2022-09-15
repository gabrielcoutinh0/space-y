import styled from "styled-components";
import pixelToRem from "../utils/pxToRem";
import { device } from "./responsive";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: var(--max-width);
    margin:  ${pixelToRem(24)} auto ${pixelToRem(50)};
    padding-left: 17px;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: ${pixelToRem(50)};
    padding-bottom: ${pixelToRem(95)};

    @media ${device.mobile} {
        justify-content: center;
    }
`;

export const Logo = styled.div`
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

export const ImageMain = styled.svg`
    position: absolute;
    right: 0;
    top: ${pixelToRem(10)};
    background-image: url('./images/home-mars-right.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: ${pixelToRem(472)};
    height: ${pixelToRem(600)};

    @media ${device.custom} {
        filter: brightness(.5);
        z-index: -1;
    }    
`;

export const CardsMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerAbout = styled.section`
    background: url('./images/lines.svg'),  url('./images/stars.svg'), var(--background-section);
    background-repeat: no-repeat;
    background-position: left center;
`;

export const About = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${pixelToRem(112)};
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 17px;

    @media ${device.custom3} {
        flex-direction: column;
    }
`;

export const ImageAbout = styled.svg`
    background-image: url('./images/mars.svg');
    background-repeat: no-repeat;
    background-size: contain;
    max-width: ${pixelToRem(518)};
    width: 100%;
    height: ${pixelToRem(518)};
    filter: drop-shadow(0px 14.5263px 29.0526px rgba(249, 133, 0, 0.29));
`;

export const DivTexts = styled.div`
    max-width: ${pixelToRem(603)};

    @media ${device.custom3} {
        max-width: ${pixelToRem(480)};
    } 
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
    max-width: var(--max-width);
    margin: 0 auto;
    padding: ${pixelToRem(173)} 17px ${pixelToRem(100)};

    @media ${device.custom2} {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const DivTextGallery = styled.div`
    margin-right: ${pixelToRem(90)};
`;

export const ContainerForm = styled.section`
    background: url('./images/stars.svg'), var(--gray-01);
    padding-top: ${pixelToRem(150)};
`;

export const DivForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 17px;

    @media ${device.custom3} {
        flex-direction: column;
        gap: ${pixelToRem(35)};
    }
`;

export const BoxForm = styled.form`
    background-color: var(--background-form);
    border-radius: ${pixelToRem(20)};
    padding: ${pixelToRem(39)} ${pixelToRem(51)} ${pixelToRem(61)};
    max-width: ${pixelToRem(520)};
    width: 100%;
    max-height: ${pixelToRem(796)};

    @media ${device.custom2} {
        padding: ${pixelToRem(24)};
    }
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

export const ImageForm = styled.svg`
    background-image: url('/images/rocket.svg');
    background-repeat: no-repeat;
    background-size: contain;
    max-width: ${pixelToRem(546)};
    height: ${pixelToRem(981)};
    width: 100%;

    @media ${device.custom2}{
        max-width: ${pixelToRem(340)};
        height: ${pixelToRem(600)};
    }
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

export const ContainerFooter = styled.section`
    padding-top: ${pixelToRem(272)};
    background: url('./images/stars.svg'), var(--gray-01);

    @media (max-width: 375px){
        padding-top: ${pixelToRem(128)};
    }
`;

export const DivFooter = styled.div`
    position: relative;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 17px;

    @media ${device.custom2} {
        padding: unset;
    }
`;

export const ImageFooter = styled.svg`
    position: absolute;
    background-image: url('./images/smoke.svg');
    background-size: contain;
    background-repeat: no-repeat;
    max-width: ${pixelToRem(1440)};
    height: ${pixelToRem(370)};
    width: 98%;
    bottom: ${pixelToRem(30)};

    @media (max-width: 374px){
        bottom: ${pixelToRem(192)};
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.custom2} {
        flex-direction: column;
        flex-wrap: wrap;
    }

    @media (max-width: 374px){
        flex-wrap: nowrap;
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    padding: ${pixelToRem(51)} 0;

    & > a{
        margin-left: ${pixelToRem(18)};
    }

    & > a:first-child{
            margin-left: 0 !important;
    }
`;

export const LinkFooter = styled.nav``;

export const ULFooter = styled.ul`
    display: flex;
    list-style: none;
    gap: ${pixelToRem(34)};
    padding: ${pixelToRem(51)} 0;

    & > a{
        text-decoration: none;
    }

    @media (max-width: 374px){
        flex-direction: column;
    }
`;

export const LIFooter = styled.li`
    color: var(--text);
    font: var(--text-1);
    text-decoration: none;
`;