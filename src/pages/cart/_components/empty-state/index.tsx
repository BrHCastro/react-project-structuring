import { useNavigate } from 'react-router-dom'

import { EmptyStateFigure } from './empty-state-figure'
import {
  EmptyStateContainer,
  EmptyStateRefreshButton,
  EmptyStateSeparator,
} from './styles'

export function EmptyState() {
  const navigate = useNavigate()

  return (
    <EmptyStateContainer>
      <span>Parece que não há nada por aqui :(</span>
      <div>
        <EmptyStateFigure />
        <EmptyStateSeparator />
      </div>
      <EmptyStateRefreshButton type="button" onClick={() => navigate('/')}>
        Voltar para tela inicial
      </EmptyStateRefreshButton>
    </EmptyStateContainer>
  )
}
