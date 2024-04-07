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
      <EmptyStateRefreshButton>Recarregar página</EmptyStateRefreshButton>
    </EmptyStateContainer>
  )
}
