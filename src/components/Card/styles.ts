import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";
import { CardProps } from ".";

export const DivCard = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    max-width: ${({ small }) => (small ? pixelToRem(165) : pixelToRem(215))};
`;

type ImageProps = Omit<CardProps, 'text'>;
export const ImageCard = styled.svg<ImageProps>`
    width: ${pixelToRem(56)};
    height: ${pixelToRem(56)};
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
`;

export const TextCard = styled.p`
    color: var(--gray-05);
    font: var(--text-1);
    padding-top: ${pixelToRem(8.5)};
`;