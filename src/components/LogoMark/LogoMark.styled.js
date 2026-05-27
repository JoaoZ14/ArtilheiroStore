import styled from 'styled-components'

export const StyledLogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 0;
`

export const LogoImage = styled.img`
  height: ${({ $footer }) => ($footer ? '140px' : '64px')};
  width: auto;
  max-width: ${({ $footer }) => ($footer ? '280px' : '200px')};
  object-fit: contain;
  transition: opacity 0.2s ease;

  ${StyledLogoMark}:hover & {
    opacity: 0.88;
  }

  @media (min-width: 768px) {
    height: ${({ $footer }) => ($footer ? '160px' : '80px')};
  }
`
