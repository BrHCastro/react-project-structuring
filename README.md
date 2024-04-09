# WeMovies

**Run**:
```sh
  # Cria uma copia das variáveis de ambiente
  cp .env.local.example .env.local

  # Instala as dependências
  npm install

  # Executa o servidor fake com json server em http://localhost:3333
  npm run server

  # Executa o projeto em http://localhost:5173
  npm run dev
```

> 💡 Caso a variável `VITE_ENABLE_API_DELAY` esteja habilitada, um interceptor é adicionado para introduzir um atraso aleatório de até 3 segundos nas requisições.

Telas:
- [x] Load state
- [x] Empty state
- [x] Default State
- [x] Seleção de filme
- [x] Carrinho de compras
- [x] Compra Realizada

Interação:
- [x] Ao clicar em *Adicionar ao carrinho* o estado do card de filme irá mudar, porém o usuário ainda não será redirecionado. 

RN: 
- [x] Retornar lista de filmes através de uma requisição HTTP.
- [x] Component *Input* deve mudar para estado de *Focus* ao digitar.
- [x] A busca só deve ser executada no click do ícone de lupa ou apos *blur* no input.
- [x] Ao executar a pesquisa, a url deve mudar para exibição do resultado da busca.
- [x] Busca deve considerar um “match” parcial e case insensitive do termo buscado.
- [x] Ao clicar em *Adicionar ao carrinho*, no header, um item é adicionado ao carrinho.
- [x] O usuário entrará no carrinho clicando no item no header.
- [x] O usuário poderá ver os itens que foram adicionados clicando no carrinho, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. 
- [x] Se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de *empty* com a opção de voltar para tela inicial.
- [x] Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado com opção de voltar para tela inicial.

