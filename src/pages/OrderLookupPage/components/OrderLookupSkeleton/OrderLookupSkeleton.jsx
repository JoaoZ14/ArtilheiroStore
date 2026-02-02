import { SkeletonCard, SkeletonLine, SkeletonInput, SkeletonButton } from './OrderLookupSkeleton.styled'

export default function OrderLookupSkeleton() {
  return (
    <SkeletonCard aria-hidden>
      <SkeletonLine style={{ width: '40%', marginBottom: '0.5rem' }} />
      <SkeletonInput />
      <SkeletonInput />
      <SkeletonButton />
    </SkeletonCard>
  )
}
