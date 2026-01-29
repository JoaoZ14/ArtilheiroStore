import { categories } from '../../data/mockData'
import CategoryCard from '../CategoryCard/CategoryCard'
import { StyledSection, SectionContainer, CategoriesGrid } from './CategoriesSection.styled'

export default function CategoriesSection() {
  return (
    <StyledSection>
      <SectionContainer>
        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </CategoriesGrid>
      </SectionContainer>
    </StyledSection>
  )
}
