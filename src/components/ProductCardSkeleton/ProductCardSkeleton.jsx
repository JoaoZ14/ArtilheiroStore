import {
  SkeletonCard,
  SkeletonImageWrapper,
  SkeletonInfo,
  SkeletonTitle,
  SkeletonPrice,
} from './ProductCardSkeleton.styled'

export default function ProductCardSkeleton() {
  return (
    <SkeletonCard aria-hidden>
      <SkeletonImageWrapper />
      <SkeletonInfo>
        <SkeletonTitle />
        <SkeletonPrice />
      </SkeletonInfo>
    </SkeletonCard>
  )
}
