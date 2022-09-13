import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const ButtonComponent = styled.button`
    background-color: var(--mars);
    width: ${pixelToRem(256)};
    height: ${pixelToRem(62)};
    border: none;
    border-radius: ${pixelToRem(6)};
    color: var(--text);
    font: var(--text-3);
`;