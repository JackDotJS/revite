// import classNames from "classnames";
// import { memo } from "preact/compat";
// import styles from "./TextArea.module.scss";
// import { useState, useEffect, useRef, useLayoutEffect } from "preact/hooks";
import styled, { css } from "styled-components";

export interface TextAreaProps {
    code?: boolean;
    padding?: number;
    lineHeight?: number;
    hideBorder?: boolean;
}

export const TEXT_AREA_BORDER_WIDTH = 2;
export const DEFAULT_TEXT_AREA_PADDING = 16;
export const DEFAULT_LINE_HEIGHT = 20;

export default styled.textarea<TextAreaProps>`
    width: 100%;
    resize: none;
    display: block;
    color: var(--foreground);
    background: var(--secondary-background);
    padding: ${ props => props.padding ?? DEFAULT_TEXT_AREA_PADDING }px;
    line-height: ${ props => props.lineHeight ?? DEFAULT_LINE_HEIGHT }px;

    ${ props => props.hideBorder && css`
        border: none;
    ` }

    ${ props => !props.hideBorder && css`
        border-radius: 4px;
        transition: border-color .2s ease-in-out;
        border: ${TEXT_AREA_BORDER_WIDTH}px solid transparent;
    ` }

    &:focus {
        outline: none;

        ${ props => !props.hideBorder && css`
            border: ${TEXT_AREA_BORDER_WIDTH}px solid var(--accent);
        ` }
    }

    ${ props => props.code ? css`
        font-family: 'Fira Mono', 'Courier New', Courier, monospace;
    ` : css`
        font-family: 'Open Sans', sans-serif;
    ` }
`;
