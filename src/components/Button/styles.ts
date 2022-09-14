import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";
import { ButtonProps } from '.'

export const ButtonComponent = styled.button<ButtonProps>`
    background-color: var(--mars);
    width: ${({ fullWidth }) => (fullWidth ? '100%' : pixelToRem(256))};
    height: ${pixelToRem(60)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: var(--text);
    font: var(--text-3);
    font-weight: 700;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
        background: var(--mars-hover);
        box-shadow: 0px 11px 16px rgba(255, 140, 112, 0.2);
        color: var(--gray-01);
    }
`;