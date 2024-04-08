import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Button } from '@/components/ui/button'

interface PurchaseButtonProps extends ComponentProps<typeof Button> {}

export const PurchaseButton = styled(Button)<PurchaseButtonProps>`
  text-transform: uppercase;
  width: 10.8125rem;
  height: 2.125rem;
  padding-block: 0.5rem;
`
