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

export const SkeletonCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`

export const SkeletonImageWrapper = styled(ShimmerBase)`
  aspect-ratio: 1;
  width: 100%;
`

export const SkeletonInfo = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SkeletonTitle = styled(ShimmerBase)`
  height: 0.95rem;
  width: 85%;
`

export const SkeletonPrice = styled(ShimmerBase)`
  height: 1.1rem;
  width: 40%;
`
