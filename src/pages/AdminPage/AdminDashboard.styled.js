import styled from 'styled-components'

export const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`

export const KpiCard = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $color }) => $color || '#9B7349'};
  }
`

export const KpiLabel = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7A6B5D;
  font-weight: 600;
  margin-bottom: 8px;
`

export const KpiValue = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: #3D3229;
  line-height: 1;
`

export const KpiIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${({ $color }) => $color || '#9B7349'};
  opacity: 0.25;
`

export const ChartSection = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`

export const ChartTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7A6B5D;
  margin-bottom: 20px;
`

export const ChartWrap = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
`

export const ChartBar = styled.div`
  flex: 1;
  background: linear-gradient(to top, #9B7349, #B8956A);
  border-radius: 4px 4px 0 0;
  height: ${({ $pct }) => $pct}%;
  min-height: 2px;
  position: relative;
  cursor: default;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.8;

    &::after {
      content: attr(data-tip);
      position: absolute;
      bottom: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      background: #2C2420;
      color: #E8D5B7;
      font-size: 0.7rem;
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
    }
  }
`

export const ChartEmpty = styled.p`
  color: #7A6B5D;
  font-size: 0.875rem;
  padding: 40px 0;
  text-align: center;
  width: 100%;
`

export const ChartLegend = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
  font-size: 0.75rem;
  color: #7A6B5D;

  strong { color: #3D3229; }
`
