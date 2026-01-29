import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: #1a1a1a;
  color: #aaa;
  padding: 3rem 0 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
  }
`

export const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`

export const FooterLogoLink = styled.a`
  display: inline-block;
  line-height: 0;
`

export const FooterLogoImage = styled.img`
  height: 200px !important;
  width: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 200px;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

export const FooterColumn = styled.div``

export const ColumnTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`

export const ColumnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ColumnLink = styled.a`
  font-size: 0.9rem;
  color: #aaa;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #aaa;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
`
