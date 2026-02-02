import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`

export const SkeletonCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`

export const SkeletonLine = styled.div`
  height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SkeletonInput = styled(SkeletonLine)`
  height: 48px;
  margin-bottom: 1rem;
`

export const SkeletonButton = styled(SkeletonLine)`
  height: 52px;
  margin-top: 0.5rem;
`
