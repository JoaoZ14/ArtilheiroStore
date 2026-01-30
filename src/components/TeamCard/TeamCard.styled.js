import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledTeamCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 120px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const TeamCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;


`

export const TeamCardName = styled.span`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.2;
`
