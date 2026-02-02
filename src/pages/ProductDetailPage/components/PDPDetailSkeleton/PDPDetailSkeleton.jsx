import {
  SkeletonGrid,
  GallerySkeleton,
  MainImageSkeleton,
  ThumbnailsSkeleton,
  ThumbSkeleton,
  InfoSkeleton,
  SkeletonBadge,
  SkeletonTitle,
  SkeletonPrice,
  SkeletonSizeLabel,
  SkeletonSizeChips,
  SkeletonChip,
  SkeletonCta,
} from './PDPDetailSkeleton.styled'

const THUMB_COUNT = 3
const SIZE_CHIP_COUNT = 5

export default function PDPDetailSkeleton() {
  return (
    <SkeletonGrid aria-hidden>
      <GallerySkeleton>
        <MainImageSkeleton />
        <ThumbnailsSkeleton>
          {Array.from({ length: THUMB_COUNT }, (_, i) => (
            <ThumbSkeleton key={`thumb-${i}`} />
          ))}
        </ThumbnailsSkeleton>
      </GallerySkeleton>
      <InfoSkeleton>
        <SkeletonBadge />
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonSizeLabel />
        <SkeletonSizeChips>
          {Array.from({ length: SIZE_CHIP_COUNT }, (_, i) => (
            <SkeletonChip key={`chip-${i}`} />
          ))}
        </SkeletonSizeChips>
        <SkeletonCta />
      </InfoSkeleton>
    </SkeletonGrid>
  )
}
