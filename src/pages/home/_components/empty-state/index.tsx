import { EmptyStateFigure } from './empty-state-figure'
import {
  EmptyStateContainer,
  EmptyStateRefreshButton,
  EmptyStateSeparator,
} from './styles'

export function EmptyState() {
  return (
    <EmptyStateContainer>
      <span>Parece que não há nada por aqui :(</span>
      <div>
        <EmptyStateFigure />
        <EmptyStateSeparator />
      </div>
      <EmptyStateRefreshButton
        type="button"
        onClick={() => window.location.reload()}
      >
        Recarregar página
      </EmptyStateRefreshButton>
    </EmptyStateContainer>
  )
}
