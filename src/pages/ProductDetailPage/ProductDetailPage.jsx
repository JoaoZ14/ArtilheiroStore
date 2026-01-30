import { useState, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useCart } from '../../context/CartContext'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductCard from '../../components/ProductCard/ProductCard'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ProductInfo from './components/ProductInfo/ProductInfo'
import { getProductDetail, allProducts, LEAGUE_NAMES } from '../../data/mockData'
import {
  StyledPDP,
  PDPContainer,
  PDPGrid,
  GalleryCol,
  InfoCol,
  RelatedSection,
  RelatedTitle,
  RelatedGrid,
  NotFoundWrap,
  NotFoundTitle,
  NotFoundText,
  NotFoundLink,
} from './ProductDetailPage.styled'

const RELATED_COUNT = 4

function getBreadcrumbItems(product) {
  if (!product) return [{ label: 'Home', path: '/' }, { label: 'Camisas', path: '/produtos' }]
  const leagueName = LEAGUE_NAMES[product.league] || product.league
  return [
    { label: 'Home', path: '/' },
    { label: 'Camisas', path: '/produtos' },
    { label: leagueName, path: `/${product.league}` },
  ]
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem, openMiniCart } = useCart()
  const product = useMemo(() => getProductDetail(id), [id])

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [showAddedFeedback, setShowAddedFeedback] = useState(false)

  const relatedProducts = useMemo(() => {
    if (!product) return []
    const others = allProducts.filter((p) => p.id !== product.id)
    return others.slice(0, RELATED_COUNT)
  }, [product])

  const maxQuantity = useMemo(() => {
    if (!selectedSize || !product?.sizeStock) return 10
    return Math.min(10, product.sizeStock[selectedSize] || 1)
  }, [product?.sizeStock, selectedSize])

  useEffect(() => {
    if (quantity > maxQuantity) setQuantity(maxQuantity)
  }, [maxQuantity, quantity])

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.gallery?.[0]?.src || product.image,
      size: selectedSize,
      quantity,
      unitPrice: product.price,
    })
    setShowAddedFeedback(true)
    openMiniCart()
  }

  useEffect(() => {
    if (!showAddedFeedback) return
    const t = setTimeout(() => setShowAddedFeedback(false), 2500)
    return () => clearTimeout(t)
  }, [showAddedFeedback])

  if (!product) {
    return (
      <StyledPDP>
        <Navbar />
        <PDPContainer>
          <NotFoundWrap>
            <NotFoundTitle>Produto não encontrado</NotFoundTitle>
            <NotFoundText>O produto que você procura não existe ou foi removido.</NotFoundText>
            <NotFoundLink to="/produtos">Ver todos os produtos</NotFoundLink>
          </NotFoundWrap>
        </PDPContainer>
        <Footer />
      </StyledPDP>
    )
  }

  return (
    <StyledPDP>
      <Navbar />
      <PDPContainer>
        <Breadcrumb items={getBreadcrumbItems(product)} current={product.name} />

        <PDPGrid>
          <GalleryCol>
            <ImageGallery gallery={product.gallery} />
          </GalleryCol>
          <InfoCol>
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              quantity={quantity}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
              maxQuantity={maxQuantity}
              addedFeedback={showAddedFeedback}
            />
          </InfoCol>
        </PDPGrid>

        {relatedProducts.length > 0 && (
          <RelatedSection>
            <RelatedTitle>Você também pode gostar</RelatedTitle>
            <RelatedGrid>
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  name={p.name}
                  price={p.price}
                  originalPrice={p.originalPrice}
                  image={p.image}
                  imageHover={p.imageHover}
                  badge={p.badge}
                  link={p.link}
                />
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </PDPContainer>
      <Footer />
    </StyledPDP>
  )
}
