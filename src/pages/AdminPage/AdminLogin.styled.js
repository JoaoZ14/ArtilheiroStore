import styled from 'styled-components'

export const LoginWrap = styled.div`
  min-height: 100vh;
  background: #2C2420;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const LoginCard = styled.div`
  background: #FAF7F2;
  border-radius: 16px;
  padding: 48px 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
`

export const LoginTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: #3D3229;
  font-weight: 400;
  margin-bottom: 4px;
`

export const LoginSub = styled.p`
  color: #7A6B5D;
  font-size: 0.875rem;
  margin-bottom: 32px;
`

export const Field = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #3D3229;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  input {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid #E5DDD3;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: var(--font-body);
    background: white;
    color: #3D3229;
    outline: none;
    transition: border-color 0.15s;

    &:focus {
      border-color: #9B7349;
    }
  }
`

export const LoginBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #9B7349;
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: #82613D;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const LoginError = styled.p`
  color: #DC2626;
  font-size: 0.85rem;
  margin-top: 12px;
  text-align: center;
`
