import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const ShimmerBase = styled.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
`

export const SkeletonSearch = styled(ShimmerBase)`
  height: 48px;
  width: 100%;
  border-radius: 8px;
`

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SkeletonCard = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`

export const SkeletonCardIcon = styled(ShimmerBase)`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 6px;
`

export const SkeletonCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SkeletonCardTitle = styled(ShimmerBase)`
  height: 1rem;
  width: 60%;
`

export const SkeletonCardDesc = styled(ShimmerBase)`
  height: 0.75rem;
  width: 90%;
`

export const SkeletonFAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`

export const SkeletonFAQLine = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`

export const SkeletonFAQText = styled(ShimmerBase)`
  height: 0.9375rem;
  width: 85%;
`
