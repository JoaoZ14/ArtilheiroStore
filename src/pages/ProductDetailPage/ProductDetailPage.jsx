import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductCard from '../../components/ProductCard/ProductCard'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ProductInfo from './components/ProductInfo/ProductInfo'
import PDPDetailSkeleton from './components/PDPDetailSkeleton/PDPDetailSkeleton'
import ErrorState from '../../components/ErrorState/ErrorState'
import { productService } from '../../services/api/productService'
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
  const ligaLabel = product.liga || 'Produtos'
  return [
    { label: 'Home', path: '/' },
    { label: 'Camisas', path: '/produtos' },
    { label: ligaLabel, path: `/produtos?liga=${encodeURIComponent(ligaLabel)}` },
  ]
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem, openMiniCart } = useCart()
  const { showError } = useToast()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [showAddedFeedback, setShowAddedFeedback] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function fetchProduct() {
      setIsLoading(true)
      setHasError(false)

      try {
        // Buscar produto e produtos relacionados em paralelo
        const [productData, allProductsData] = await Promise.all([
          productService.getById(id),
          productService.getAll()
        ])

        if (!isMounted) return

        setProduct(productData)
        
        // Produtos relacionados: mesma liga ou categoria, exceto o atual
        const related = allProductsData
          .filter(
            (p) =>
              p.id !== productData?.id &&
              (p.liga === productData?.liga || p.category === productData?.category)
          )
          .slice(0, RELATED_COUNT)
        
        setRelatedProducts(related)
      } catch (error) {
        if (!isMounted) return

        console.error('Erro ao carregar produto:', error)
        setHasError(true)
        setProduct(null)
        
        // Se for 404, não mostra toast (página já mostra "não encontrado")
        if (error.status !== 404) {
          showError('Erro ao carregar produto. Tente novamente.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchProduct()

    return () => {
      isMounted = false
    }
  }, [id, retryCount, showError])

  const handleRetry = () => {
    setHasError(false)
    setRetryCount((c) => c + 1)
  }

  const maxQuantity =
    !selectedSize || !product?.sizeStock
      ? 10
      : Math.min(10, product.sizeStock[selectedSize] || 1)

  useEffect(() => {
    if (quantity > maxQuantity) setQuantity(maxQuantity)
  }, [maxQuantity, quantity])

  const handleAddToCart = async () => {
    await new Promise((r) => setTimeout(r, 600))
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

  if (isLoading) {
    return (
      <StyledPDP>
        <Navbar />
        <PDPContainer>
          <PDPDetailSkeleton />
        </PDPContainer>
        <Footer />
      </StyledPDP>
    )
  }

  if (hasError) {
    return (
      <StyledPDP>
        <Navbar />
        <PDPContainer>
          <ErrorState onRetry={handleRetry} />
        </PDPContainer>
        <Footer />
      </StyledPDP>
    )
  }

  if (!product) {
    return (
      <StyledPDP>
        <Navbar />
        <PDPContainer>
          <NotFoundWrap>
            <NotFoundTitle>Produto não encontrado</NotFoundTitle>
            <NotFoundText>O produto que você procura não existe ou foi removido.</NotFoundText>
            <NotFoundLink to="/produtos">Voltar para a loja</NotFoundLink>
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
                  liga={p.liga}
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
