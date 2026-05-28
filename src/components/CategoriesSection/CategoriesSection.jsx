import { useState, useEffect } from 'react'
import { categories as fallbackCategories } from '../../data/mockData'
import CategoryCard from '../CategoryCard/CategoryCard'
import { StyledSection, SectionContainer, CategoriesGrid } from './CategoriesSection.styled'
import { httpClient } from '../../services/api/httpClient'

export default function CategoriesSection() {
  const [categories, setCategories] = useState(fallbackCategories)

  useEffect(() => {
    httpClient.get('/api/categories')
      .then((data) => {
        if (data?.length) {
          setCategories(data.map((c) => ({
            id: c.id,
            title: c.name,
            image: c.image,
            link: c.link || `/categoria/${c.slug}`,
          })))
        }
      })
      .catch(() => {})
  }, [])

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
