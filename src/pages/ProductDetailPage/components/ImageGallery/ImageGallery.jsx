import { useState } from 'react'
import {
  GalleryWrap,
  MainImageWrap,
  MainImage,
  Thumbnails,
  ThumbButton,
  ThumbImage,
} from './ImageGallery.styled'

export default function ImageGallery({ gallery = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = gallery[activeIndex] || gallery[0]

  if (!gallery?.length) return null

  return (
    <GalleryWrap>
      <MainImageWrap>
        <MainImage
          src={current?.src}
          alt={current?.label || 'Imagem do produto'}
        />
      </MainImageWrap>
      <Thumbnails>
        {gallery.map((img, i) => (
          <ThumbButton
            key={i}
            type="button"
            $active={activeIndex === i}
            onClick={() => setActiveIndex(i)}
            aria-label={img.label}
            aria-pressed={activeIndex === i}
          >
            <ThumbImage src={img.src} alt="" />
          </ThumbButton>
        ))}
      </Thumbnails>
    </GalleryWrap>
  )
}
