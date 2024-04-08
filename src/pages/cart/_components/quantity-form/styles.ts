import styled from 'styled-components'

export const QuantityFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.6875rem;

  input {
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    width: 3.6875rem;
    height: 1.625rem;
    border-radius: 4px;
    text-align: center;

    @media (min-width: 640px) {
      width: 3.875rem;
    }
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
`
