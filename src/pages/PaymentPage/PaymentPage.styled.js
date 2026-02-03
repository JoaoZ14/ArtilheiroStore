import styled from 'styled-components'

export const StyledPayment = styled.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`

export const PaymentContainer = styled.div`
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

export const ProcessorNote = styled.section`
  background: linear-gradient(135deg, #009ee3 0%, #00b1ea 100%);
  border: none;
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 14px rgba(0, 158, 227, 0.25);
`

export const ProcessorNoteIcon = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #fff;
  font-size: 28px;
`

export const ProcessorNoteContent = styled.div`
  flex: 1;
  min-width: 0;
`

export const ProcessorNoteTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`

export const ProcessorNoteText = styled.p`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
`

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 1rem;
  line-height: 1.3;
`

export const MethodList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MethodCard = styled.li`
  background: #fff;
  border: none;
  border-radius: 12px;
  padding: 1.5rem 1.5rem;
  box-shadow: none;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const MethodCardIcon = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 10px;
  color: #374151;
  font-size: 1.25rem;
`

export const MethodCardBody = styled.div`
  flex: 1;
  min-width: 0;
`

export const MethodCardTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`

export const MethodCardContent = styled.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
