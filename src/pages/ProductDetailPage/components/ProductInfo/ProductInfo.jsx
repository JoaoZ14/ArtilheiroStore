import SizeSelector from '../SizeSelector/SizeSelector'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import QuickInfo from '../QuickInfo/QuickInfo'
import {
  ProductInfoWrap,
  ProductBadge,
  ProductTitle,
  PriceBlock,
  PriceCurrent,
  PriceOriginal,
  PromoBadge,
  SelectorsRow,
  QuantityCol,
  CtaWrap,
  AddedFeedback,
} from './ProductInfo.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function ProductInfo({
  product,
  selectedSize,
  onSizeChange,
  quantity,
  onQuantityChange,
  onAddToCart,
  maxQuantity = 10,
  addedFeedback = false,
}) {
  const badgeLabel = product?.badge || 'Oficial'
  const isPromo = product?.isPromo && product?.originalPrice

  return (
    <ProductInfoWrap>
      {badgeLabel && <ProductBadge>{badgeLabel}</ProductBadge>}
      <ProductTitle>{product?.name}</ProductTitle>

      <PriceBlock>
        <PriceCurrent>{formatPrice(product?.price ?? 0)}</PriceCurrent>
        {isPromo && (
          <>
            <PriceOriginal>{formatPrice(product.originalPrice)}</PriceOriginal>
            <PromoBadge>Promoção</PromoBadge>
          </>
        )}
      </PriceBlock>

      <SizeSelector
        sizeStock={product?.sizeStock ?? {}}
        value={selectedSize}
        onChange={onSizeChange}
      />

      <SelectorsRow>
        <QuantityCol>
          <QuantitySelector
            value={quantity}
            onChange={onQuantityChange}
            min={1}
            max={maxQuantity}
          />
        </QuantityCol>
      </SelectorsRow>

      <CtaWrap>
        <AddToCartButton
          disabled={!selectedSize}
          onAddToCart={onAddToCart}
        />
        {addedFeedback && <AddedFeedback>Adicionado ao carrinho!</AddedFeedback>}
      </CtaWrap>

      <QuickInfo
        items={[
          { icon: '◆', label: 'Material', text: product?.material || '100% Poliéster' },
          { icon: '✈', label: 'Envio', text: product?.shipping || 'Envio em até 48h' },
          { icon: '↔', label: 'Troca', text: product?.exchange || 'Troca fácil em até 7 dias' },
        ]}
      />
    </ProductInfoWrap>
  )
}
