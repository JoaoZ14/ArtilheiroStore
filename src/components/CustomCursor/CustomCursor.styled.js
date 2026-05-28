import styled, { createGlobalStyle } from 'styled-components'

export const PublicCursorStyles = createGlobalStyle`
  @media (hover: hover) and (pointer: fine) {
    body.public-custom-cursor,
    body.public-custom-cursor * {
      cursor: none !important;
    }

    body.public-custom-cursor input:not([type='hidden']):not([type='checkbox']):not([type='radio']),
    body.public-custom-cursor textarea,
    body.public-custom-cursor [contenteditable='true'] {
      cursor: text !important;
    }
  }
`

export const CursorRoot = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 99999;
  color: #000;
  font-size: 36px;
  line-height: 1;
  transform: translate(-6px, -6px) rotate(-42deg);
  opacity: 0.9;
  will-change: transform;

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`
