import styled from 'styled-components'

export const GalleryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

export const MainImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${MainImageWrap}:hover & {
    transform: scale(1.05);
  }
`

export const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ThumbButton = styled.button`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  padding: 0;
  border: 2px solid ${({ $active }) => ($active ? '#1a1a1a' : '#e5e7eb')};
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`

export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`
