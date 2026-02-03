import styled from 'styled-components'

export const StyledContact = styled.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`

export const ContactContainer = styled.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2rem;
`

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`

export const PageSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`

export const IntroText = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`

export const ContactSection = styled.section`
  margin-bottom: 2.5rem;
`

export const ContactSectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`

export const ContactCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ContactCard = styled.li`
  background: #fff;
  border: ${({ $plain }) => ($plain ? 'none' : '1px solid #e5e7eb')};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: ${({ $plain }) => ($plain ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.06)')};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${({ $plain }) => ($plain ? 'transparent' : '#d1d5db')};
    box-shadow: ${({ $plain }) => ($plain ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.06)')};
  }
`

export const ContactCardLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #c41e3a;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
    border-radius: 8px;
  }
`

export const ContactCardBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const ContactCardContent = styled.div`
  flex: 1;
  min-width: 0;
`

export const ContactCardLabel = styled.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`

export const ContactCardValue = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
`

export const ContactCardLines = styled.div`
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.5;

  p {
    margin: 0 0 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const ContactPhoneList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

export const ContactPhoneItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0c7c59;
  background: #dcfce7;
  border: 1px solid #86efac;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: #bbf7d0;
    border-color: #4ade80;
    color: #047857;
  }

  &:focus-visible {
    outline: 2px solid #0c7c59;
    outline-offset: 2px;
  }
`

export const ContactIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f3f4f6;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
