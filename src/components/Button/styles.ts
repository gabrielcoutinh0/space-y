import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";
import { ButtonProps } from '.'

export const ButtonComponent = styled.button<ButtonProps>`
    background-color: ${({ primary }) => (primary ? 'var(--mars)' : 'transparent')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : pixelToRem(256))};
    height: ${pixelToRem(60)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: ${({ primary }) => (primary ? 'var(--text)' : 'var(--mars-light)')};
    font: var(--text-3);
    font-weight: 700;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
        background: ${({ primary }) => (primary ? 'var(--mars-hover)' : 'transparent')};
        box-shadow: ${({ primary }) => (primary ? '0px 11px 16px rgba(255, 140, 112, 0.2)' : 'none')};
        color: ${({ primary }) => (primary ? 'var(--gray-01)' : 'var(--mars)')};
    }
`;