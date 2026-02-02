# ✅ Checklist de Testes - Integração API

Use este checklist para validar a integração do frontend com o backend.

---

## 🚀 Pré-requisitos

- [ ] Backend Spring Boot rodando em `http://localhost:8080`
- [ ] Frontend rodando em `http://localhost:5173` (`npm run dev`)
- [ ] Arquivo `.env.local` criado com `VITE_API_URL=http://localhost:8080`

---

## 🧪 Testes de Funcionalidade

### 1. Landing Page (/)
- [ ] Página carrega sem erros
- [ ] Hero banner exibido
- [ ] Seção de destaques exibida (mock estático - OK)
- [ ] Seção de categorias exibida
- [ ] Footer exibido

**Status:** Usa dados estáticos (não precisa backend)

---

### 2. Página de Times (/times)
- [ ] Carrega lista de times da API
- [ ] Times agrupados por liga (Brasileirão, Premier League, La Liga)
- [ ] Ao clicar em um time, redireciona para `/produtos?time=NomeDoTime`
- [ ] Loading state durante carregamento
- [ ] Empty state se não houver produtos

**Endpoint usado:** `GET /products`

**Como testar:**
1. Acesse `http://localhost:5173/times`
2. Verifique se os times aparecem
3. Clique em um time (ex: Flamengo)
4. Deve redirecionar para listagem filtrada

---

### 3. Product Listing Page (/produtos)

#### 3.1 Listagem Geral
- [ ] Carrega todos os produtos da API
- [ ] Exibe skeleton durante carregamento (12 cards)
- [ ] Grid de produtos exibido corretamente
- [ ] Contador de produtos correto (ex: "13 produtos")

**Endpoint usado:** `GET /products`

#### 3.2 Filtros
- [ ] Filtro por Time funciona
- [ ] Filtro por Tamanho funciona
- [ ] Filtro por Preço (mín/máx) funciona
- [ ] Filtro por Promoção funciona
- [ ] Contador atualiza conforme filtros

**Observação:** Filtros aplicados no frontend

#### 3.3 Ordenação
- [ ] "Mais vendidos" ordena por `salesCount`
- [ ] "Menor preço" ordena crescente
- [ ] "Maior preço" ordena decrescente
- [ ] "Lançamentos" ordena por data de criação

#### 3.4 Rotas Especiais
- [ ] `/produtos` - Todos os produtos
- [ ] `/brasileirao` - Apenas camisas brasileiras
- [ ] `/europeus` - Apenas camisas europeias
- [ ] `/lancamentos` - Ordenado por data
- [ ] `/promocoes` - Apenas produtos em promoção
- [ ] `/produtos?time=Flamengo` - Filtrado por time
- [ ] `/produtos?q=camisa` - Busca por termo

#### 3.5 Estados de Erro
- [ ] Se backend estiver offline, exibe erro com botão "Tentar novamente"
- [ ] Toast vermelho aparece: "Erro ao carregar produtos"
- [ ] Ao clicar "Tentar novamente", recarrega

---

### 4. Product Detail Page (/produto/:id)

#### 4.1 Carregamento Normal
- [ ] Carrega produto específico da API
- [ ] Exibe skeleton durante carregamento
- [ ] Galeria de imagens exibida
- [ ] Nome, preço, badge exibidos
- [ ] Seletor de tamanho exibido
- [ ] Tamanhos sem estoque aparecem desabilitados
- [ ] Seletor de quantidade funciona
- [ ] Botão "Adicionar ao carrinho" habilitado após selecionar tamanho

**Endpoint usado:** `GET /products/{id}`

#### 4.2 Adicionar ao Carrinho
- [ ] Selecionar tamanho e quantidade
- [ ] Clicar em "Adicionar ao carrinho"
- [ ] Loading no botão durante 600ms
- [ ] Mini-cart abre automaticamente
- [ ] Produto aparece no mini-cart
- [ ] Contador do carrinho atualiza na navbar

#### 4.3 Produtos Relacionados
- [ ] Exibe até 4 produtos relacionados (mesma categoria/liga)
- [ ] Cards clicáveis levam para PDP do produto

#### 4.4 Estados de Erro
- [ ] Se produto não existir (404), exibe página "Produto não encontrado"
- [ ] Link "Voltar para a loja" funciona
- [ ] Não exibe toast para erro 404
- [ ] Se backend offline, exibe erro com botão "Tentar novamente"

---

### 5. Carrinho (/carrinho)

- [ ] Lista todos os itens do carrinho
- [ ] Exibe imagem, nome, tamanho, preço unitário
- [ ] Controles +/- de quantidade funcionam
- [ ] Botão de remover item funciona
- [ ] Subtotal calculado corretamente
- [ ] Botão "Finalizar compra" leva para `/checkout`
- [ ] Se carrinho vazio, exibe "Carrinho vazio" + link para voltar

**Observação:** Carrinho é 100% frontend (localStorage)

---

### 6. Checkout (/checkout)

#### 6.1 Step 1 - Dados Pessoais
- [ ] Campos: Nome, Email, CPF
- [ ] Validação básica funciona
- [ ] Botão "Continuar" habilitado apenas com dados válidos
- [ ] Avança para Step 2

#### 6.2 Step 2 - Endereço
- [ ] Campos: CEP, Rua, Número, Complemento, Cidade, Estado
- [ ] Validação básica funciona
- [ ] Botão "Continuar" habilitado apenas com dados válidos
- [ ] Avança para Step 3

#### 6.3 Step 3 - Pagamento
- [ ] Opções: Cartão de crédito, Pix (mock)
- [ ] Campos de pagamento desabilitados (apenas visual)
- [ ] Resumo do pedido exibido na lateral
- [ ] Botão "Finalizar compra" habilitado

#### 6.4 Finalização do Pedido
- [ ] Clicar em "Finalizar compra"
- [ ] Botão mostra loading: "Processando pedido…"
- [ ] Requisição POST enviada para `/orders`
- [ ] Se sucesso:
  - [ ] Toast verde: "Pedido realizado com sucesso!"
  - [ ] Carrinho limpo
  - [ ] Redireciona para `/checkout/sucesso`
  - [ ] Página de sucesso exibe número do pedido
- [ ] Se erro:
  - [ ] Toast vermelho com mensagem de erro
  - [ ] Carrinho mantido intacto
  - [ ] Usuário pode tentar novamente

**Endpoint usado:** `POST /orders`

---

### 7. Página de Sucesso (/checkout/sucesso)

- [ ] Exibe mensagem "Pedido realizado com sucesso"
- [ ] Exibe número do pedido (vindo do backend)
- [ ] Exibe valor total
- [ ] Link "Continuar comprando" funciona

---

### 8. Busca

#### 8.1 Busca na Navbar
- [ ] Digitar termo no campo de busca
- [ ] Pressionar Enter
- [ ] Redireciona para `/produtos?q=termo`
- [ ] Produtos filtrados pelo termo aparecem

#### 8.2 Página de Busca (/busca)
- [ ] Se acessar sem query, exibe "Digite algo para buscar"
- [ ] Com query, busca por nome/time/categoria
- [ ] Exibe resultados
- [ ] Se nenhum resultado, exibe empty state

---

## 🔴 Testes de Error Handling

### 1. Backend Offline
- [ ] Parar backend: `Ctrl+C` no terminal do Spring Boot
- [ ] Acessar `/produtos`
- [ ] Deve exibir erro + botão "Tentar novamente"
- [ ] Toast vermelho: "Erro ao carregar produtos"

### 2. Produto Inexistente
- [ ] Acessar `/produto/999999` (ID inexistente)
- [ ] Deve exibir página "Produto não encontrado"
- [ ] Não deve exibir toast

### 3. Timeout (Opcional)
- [ ] Simular resposta lenta do backend (>30s)
- [ ] Deve exibir erro: "Tempo limite excedido"

### 4. Erro no Checkout
- [ ] Backend retornando erro 500 em `/orders`
- [ ] Toast vermelho: "Não foi possível finalizar o pedido"
- [ ] Carrinho mantido

---

## 🎨 Testes de UX

### Loading States
- [ ] Skeletons aparecem durante carregamento (PLP, PDP)
- [ ] Botões mostram loading (checkout)
- [ ] Texto "Carregando..." aparece (TimesPage)

### Empty States
- [ ] Carrinho vazio exibe mensagem + link
- [ ] Busca sem resultados exibe mensagem
- [ ] Filtros sem resultados exibe mensagem

### Toast Feedback
- [ ] Toast de erro aparece no canto superior direito
- [ ] Toast desaparece após 5 segundos
- [ ] Botão "X" fecha o toast
- [ ] Múltiplos toasts empilham verticalmente

---

## 📱 Testes Responsivos

- [ ] Mobile (< 768px): Layout em coluna, filtros colapsados
- [ ] Tablet (768px - 1024px): Grid ajustado
- [ ] Desktop (> 1024px): Layout completo

---

## 🔄 Testes de Estado

### Persistência do Carrinho
- [ ] Adicionar produto ao carrinho
- [ ] Recarregar página (F5)
- [ ] Carrinho mantém itens (localStorage)

### Navegação
- [ ] Botão "Voltar" do navegador funciona
- [ ] Breadcrumbs funcionam na PDP
- [ ] Links do footer funcionam

---

## 🛠️ Comandos Úteis para Debug

### Ver chamadas de API no console do navegador
```javascript
// Abrir DevTools (F12) → Console
// Filtrar por "ProductService" ou "OrderService"
```

### Verificar localStorage (carrinho)
```javascript
// DevTools → Application → Local Storage
// Chave: artilheiro-cart
localStorage.getItem('artilheiro-cart')
```

### Verificar sessionStorage (checkout)
```javascript
// DevTools → Application → Session Storage
// Chave: artilheiro-checkout-success
sessionStorage.getItem('artilheiro-checkout-success')
```

---

## ✅ Checklist Rápido de Integração

- [ ] `GET /products` retorna lista de produtos
- [ ] `GET /products/{id}` retorna produto específico
- [ ] `POST /orders` cria pedido e retorna orderId
- [ ] CORS habilitado no backend para `http://localhost:5173`
- [ ] Frontend consome endpoints corretamente
- [ ] Erros tratados com toast
- [ ] Loading states funcionando
- [ ] Carrinho persistindo no localStorage
- [ ] Checkout enviando pedidos para backend

---

## 📝 Observações Finais

1. **Mock Data Preservado:** `mockData.js` ainda é usado para dados estáticos (categorias, footer, etc.)
2. **Filtros no Frontend:** Atualmente implementados no frontend. Considere mover para backend para performance.
3. **Sem Autenticação:** MVP não inclui login/JWT.
4. **Sem Pagamento Real:** Campos de pagamento são mock apenas visual.

---

**Última atualização:** 30/01/2025
