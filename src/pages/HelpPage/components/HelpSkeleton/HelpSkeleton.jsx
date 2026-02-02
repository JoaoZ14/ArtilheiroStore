import {
  SkeletonSearch,
  SkeletonGrid,
  SkeletonCard,
  SkeletonCardIcon,
  SkeletonCardContent,
  SkeletonCardTitle,
  SkeletonCardDesc,
  SkeletonFAQList,
  SkeletonFAQLine,
  SkeletonFAQText,
} from './HelpSkeleton.styled'

export default function HelpSkeleton() {
  return (
    <>
      <SkeletonSearch aria-hidden />
      <SkeletonGrid aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonCard key={i}>
            <SkeletonCardIcon />
            <SkeletonCardContent>
              <SkeletonCardTitle />
              <SkeletonCardDesc />
            </SkeletonCardContent>
          </SkeletonCard>
        ))}
      </SkeletonGrid>
      <SkeletonFAQList aria-hidden>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SkeletonFAQLine key={i}>
            <SkeletonFAQText />
          </SkeletonFAQLine>
        ))}
      </SkeletonFAQList>
    </>
  )
}
