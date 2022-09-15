import styled, { keyframes } from "styled-components";
import pixelToRem from "../../utils/pxToRem";

const swiper = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(calc(${pixelToRem(-(345+32))} * 3))
  }
`;

export const ContentGallery = styled.div`
    overflow: hidden;
    max-width: ${pixelToRem(780)};
`;

export const Arrow = styled.div`
    background: url("/images/arrow-gallery.svg") no-repeat;
    width: ${pixelToRem(25)};
    height: ${pixelToRem(25)};
    margin: auto ${pixelToRem(18)} auto 0;
    cursor: pointer;  
`;

export const SlideTrack = styled.div`
    animation: ${swiper} 30s linear infinite;
    display: flex;
    flex-direction: column
`;

export const Slide = styled.div`
    width: calc(${pixelToRem(345+32)} * 6);
    height: ${pixelToRem(353)};

    img{
        width: ${pixelToRem(345)};
        height: ${pixelToRem(353)};
        border-radius: ${pixelToRem(12)};
        margin-right: ${pixelToRem(32)};
    }
`;