import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const ShimmerBox = styled.div`
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

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: start;
  }
`

export const GallerySkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

export const MainImageSkeleton = styled(ShimmerBox)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`

export const ThumbnailsSkeleton = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ThumbSkeleton = styled(ShimmerBox)`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 6px;
`

export const InfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`

export const SkeletonBadge = styled(ShimmerBox)`
  height: 14px;
  width: 60px;
  margin-bottom: 0.5rem;
`

export const SkeletonTitle = styled(ShimmerBox)`
  height: 28px;
  width: 85%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 32px;
  }
`

export const SkeletonPrice = styled(ShimmerBox)`
  height: 32px;
  width: 140px;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    height: 36px;
  }
`

export const SkeletonSizeLabel = styled(ShimmerBox)`
  height: 14px;
  width: 80px;
  margin-bottom: 0.5rem;
`

export const SkeletonSizeChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`

export const SkeletonChip = styled(ShimmerBox)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`

export const SkeletonCta = styled(ShimmerBox)`
  height: 48px;
  width: 100%;
  max-width: 280px;
  margin-top: 0.5rem;
  border-radius: 8px;
`
