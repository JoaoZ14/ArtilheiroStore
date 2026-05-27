import { Link } from 'react-router-dom'
import { footerData } from '../../data/mockData'
import LogoMark from '../LogoMark/LogoMark'
import { IconHeart } from '../icons/westernIcons'
import {
  StyledFooter,
  FooterContainer,
  FooterLogoWrapper,
  FooterLogoLink,
  FooterGrid,
  FooterColumn,
  ColumnTitle,
  ColumnList,
  ColumnLink,
  SocialRow,
  SocialLink,
  Copyright,
} from './Footer.styled'

export default function Footer() {
  const { institutional, help, account, social, copyright } = footerData

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogoWrapper>
          <FooterLogoLink as={Link} to="/">
            <LogoMark $footer />
          </FooterLogoLink>
        </FooterLogoWrapper>
        <FooterGrid>
          <FooterColumn>
            <ColumnTitle>Institucional</ColumnTitle>
            <ColumnList>
              {institutional.map((item) => (
                <li key={item.path}>
                  <ColumnLink as={Link} to={item.path}>
                    {item.label}
                  </ColumnLink>
                </li>
              ))}
            </ColumnList>
          </FooterColumn>
          <FooterColumn>
            <ColumnTitle>Ajuda</ColumnTitle>
            <ColumnList>
              {help.map((item) => (
                <li key={item.path}>
                  <ColumnLink as={Link} to={item.path}>
                    {item.label}
                  </ColumnLink>
                </li>
              ))}
            </ColumnList>
          </FooterColumn>
          <FooterColumn>
            <ColumnTitle>Minha conta</ColumnTitle>
            <ColumnList>
              {account.map((item) => (
                <li key={item.path}>
                  <ColumnLink as={Link} to={item.path}>
                    {item.label}
                  </ColumnLink>
                </li>
              ))}
            </ColumnList>
          </FooterColumn>
          <FooterColumn>
            <ColumnTitle>Redes sociais</ColumnTitle>
            <SocialRow>
              {social.map((item) => (
                <SocialLink
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <IconHeart size={18} aria-hidden />
                </SocialLink>
              ))}
            </SocialRow>
          </FooterColumn>
        </FooterGrid>
        <Copyright>{copyright}</Copyright>
      </FooterContainer>
    </StyledFooter>
  )
}
