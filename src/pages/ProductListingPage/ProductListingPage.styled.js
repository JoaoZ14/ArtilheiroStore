import styled from 'styled-components'

export const StyledPLP = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`

export const PLPHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`

export const PLPHeaderImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PLPHeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`

export const PLPHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 2rem 1.5rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 280px;
    align-items: flex-start;
    text-align: left;
    padding: 3rem 2rem;
  }
`

export const PLPHeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const PLPHeaderSubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export const PLPMain = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem;
  }
`

export const PLPLayout = styled.div`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    padding-top: 2rem;
  }
`

export const PLPSidebar = styled.aside`
  @media (max-width: 991px) {
    order: 2;
  }
`

export const FilterSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FilterTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
`

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #444;
  cursor: pointer;
  padding: 0.35rem 0;
  transition: color 0.2s;

  &:hover {
    color: #c41e3a;
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: #c41e3a;
    cursor: pointer;
  }
`

export const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  margin: 0.25rem 0.25rem 0 0;
  font-size: 0.85rem;
  font-weight: 500;
  color: #444;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #eee;
    border-color: #c41e3a;
    color: #c41e3a;
  }

  &.active {
    background: #c41e3a;
    border-color: #c41e3a;
    color: #fff;
  }
`

export const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PriceInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`

export const PLPContent = styled.div`
  min-width: 0;
`

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`

export const ResultCount = styled.span`
  font-size: 0.9rem;
  color: #666;
`

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const SortLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  white-space: nowrap;
`

export const SortSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23444' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`

export const MobileFilterToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #c41e3a;
  background: #fff;
  border: 2px solid #c41e3a;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    display: none;
  }
`

export const SidebarWrapper = styled.div`
  @media (max-width: 991px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
  }
`
