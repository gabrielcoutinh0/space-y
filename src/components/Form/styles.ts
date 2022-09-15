import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";


export const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${pixelToRem(24)};
`;

export const Label = styled.label`
    font: var(--text-1);
    color: var(--text);
    padding-bottom: ${pixelToRem(12)};
`;

export const Input = styled.input`
    width: 100%;
    height: ${pixelToRem(56)};
    border: 1px solid var(--gray-05);
    border-radius: ${pixelToRem(6)};
    background: transparent;
    font: var(--text-1);
    color: var(--text);
    padding: ${pixelToRem(24)} ${pixelToRem(17)};

    &:focus{
        border: 1px solid var(--mars-light);
        outline: none;
    }
`;
