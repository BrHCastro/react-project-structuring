import { useNavigate } from 'react-router-dom'

import { SuccessContainer, SuccessFigure, SuccessRefreshButton } from './styles'

export function SuccessPage() {
  const navigate = useNavigate()

  return (
    <SuccessContainer>
      <span>Compra realizada com sucesso!</span>
      <SuccessFigure />
      <SuccessRefreshButton type="button" onClick={() => navigate('/')}>
        Voltar
      </SuccessRefreshButton>
    </SuccessContainer>
  )
}
