import { ComponentProps } from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.img`
  width: 5.1875rem;
  height: 5.1875rem;
  animation: ${spinner} 1.4s linear infinite;
`

export function Loading(props: ComponentProps<'img'>) {
  return <Spinner src="/loader.png" alt="" {...props} />
}
