import styled from 'styled-components'

export const FormCard = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  padding: 28px;
  max-width: 860px;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  &.full { grid-column: 1 / -1; }

  label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #3D3229;
  }

  input, select, textarea {
    padding: 10px 14px;
    border: 1.5px solid #E5DDD3;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: var(--font-body);
    color: #3D3229;
    background: white;
    outline: none;
    transition: border-color 0.15s;

    &:focus { border-color: #9B7349; }
  }

  textarea { resize: vertical; min-height: 80px; }

  small { color: #7A6B5D; font-size: 0.75rem; }
`

export const SectionTitle = styled.h3`
  grid-column: 1 / -1;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7A6B5D;
  padding-bottom: 12px;
  border-bottom: 1px solid #E5DDD3;
  margin-top: 8px;
`

export const CheckRow = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #3D3229;

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    accent-color: #9B7349;
    cursor: pointer;
  }
`

export const SizesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const SizeToggle = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1.5px solid ${({ $selected }) => ($selected ? '#9B7349' : '#E5DDD3')};
  background: ${({ $selected }) => ($selected ? '#9B7349' : 'white')};
  color: ${({ $selected }) => ($selected ? 'white' : '#7A6B5D')};
  cursor: pointer;
  transition: all 0.15s;
`

export const ImagePreview = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 8px;
  border: 2px dashed #E5DDD3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #FAF7F2;
  margin-top: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    color: #7A6B5D;
    font-size: 0.8rem;
  }
`

export const UploadBtn = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #F5EFE8;
  border: 1.5px solid #E5DDD3;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #3D3229;
  cursor: pointer;
  transition: border-color 0.15s;
  &:hover { border-color: #9B7349; }

  input[type='file'] { display: none; }
`

export const FormFooter = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #E5DDD3;
`

export const SaveBtn = styled.button`
  padding: 12px 28px;
  background: #9B7349;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover:not(:disabled) { background: #82613D; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

export const CancelBtn = styled.button`
  padding: 12px 28px;
  background: transparent;
  color: #7A6B5D;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1.5px solid #E5DDD3;
  border-radius: 8px;
  cursor: pointer;
  &:hover { border-color: #9B7349; color: #9B7349; }
`

export const ErrorMsg = styled.p`
  color: #DC2626;
  font-size: 0.85rem;
  margin-top: 8px;
`
