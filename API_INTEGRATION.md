# 🔌 Integração com API Backend

Este documento descreve a integração do frontend com a API REST do backend Spring Boot.

---

## 📋 Sumário
- [Configuração](#configuração)
- [Camada de API](#camada-de-api)
- [Endpoints](#endpoints)
- [Tratamento de Erros](#tratamento-de-erros)
- [Testando a Integração](#testando-a-integração)

---

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto usa variáveis de ambiente via Vite. Configure a URL base da API:

**Arquivo: `.env.local`** (desenvolvimento)
```env
VITE_API_URL=http://localhost:8080
```

**Arquivo: `.env.production`** (produção)
```env
VITE_API_URL=https://backend-url.onrender.com
```

> ⚠️ **Importante:** O arquivo `.env.local` está no `.gitignore` e não deve ser commitado.

---

## 🏗️ Camada de API

A camada de serviços está organizada em `src/services/api/`:

```
src/services/api/
├── httpClient.js       → Cliente HTTP base (fetch + tratamento de erros)
├── productService.js   → Serviço de produtos
└── orderService.js     → Serviço de pedidos
```

### httpClient.js

Cliente HTTP centralizado com:
- ✅ Configuração de baseURL
- ✅ Timeout de 30s
- ✅ Tratamento global de erros (400, 401, 404, 500, timeout)
- ✅ Retries automáticos não implementados (pode ser adicionado)

**Uso:**
```javascript
import { httpClient } from './httpClient'

const data = await httpClient.get('/products')
const response = await httpClient.post('/orders', orderData)
```

---

## 🌐 Endpoints

### 1. Listar Produtos

**GET** `/products`

**Resposta:**
```json
[
  {
    "id": "uuid",
    "name": "Camisa Flamengo I 2024",
    "team": "Flamengo",
    "season": "2024",
    "price": 199.90,
    "originalPrice": 249.90,
    "images": ["url1", "url2"],
    "sizes": [
      { "label": "P", "stock": 5 },
      { "label": "M", "stock": 10 }
    ],
    "category": "brasileirao",
    "league": "brasileirao",
    "isPromotion": false,
    "isNew": true,
    "salesCount": 120,
    "createdAt": "2025-01-15T00:00:00Z"
  }
]
```

**Uso no Frontend:**
```javascript
import { productService } from '@/services/api/productService'

const products = await productService.getAll()
```

---

### 2. Detalhe do Produto

**GET** `/products/{id}`

**Resposta:**
```json
{
  "id": "uuid",
  "name": "Camisa Flamengo I 2024",
  "team": "Flamengo",
  "season": "2024",
  "price": 199.90,
  "originalPrice": 249.90,
  "images": ["url1", "url2", "url3"],
  "sizes": [
    { "label": "P", "stock": 5 },
    { "label": "M", "stock": 10 },
    { "label": "G", "stock": 0 }
  ],
  "category": "brasileirao",
  "league": "brasileirao",
  "isPromotion": false,
  "material": "100% Poliéster",
  "shipping": "Envio em até 48h",
  "exchange": "Troca fácil em até 7 dias"
}
```

**Uso no Frontend:**
```javascript
const product = await productService.getById('uuid-do-produto')
```

---

### 3. Criar Pedido

**POST** `/orders`

**Request Body:**
```json
{
  "customer": {
    "name": "João Silva",
    "email": "joao@example.com",
    "cpf": "12345678900"
  },
  "address": {
    "cep": "12345-678",
    "rua": "Rua Exemplo",
    "numero": "123",
    "complemento": "Apto 45",
    "cidade": "São Paulo",
    "estado": "SP"
  },
  "items": [
    {
      "productId": "uuid",
      "size": "M",
      "quantity": 2,
      "unitPrice": 199.90
    }
  ],
  "total": 399.80
}
```

**Resposta de Sucesso (201):**
```json
{
  "orderId": "uuid-do-pedido",
  "status": "confirmed",
  "total": 399.80
}
```

**Uso no Frontend:**
```javascript
import { orderService } from '@/services/api/orderService'

const response = await orderService.createOrder({
  customer: { name, email, cpf },
  address: { ... },
  items: [...],
  total: 399.80
})
```

---

## 🚨 Tratamento de Erros

### Sistema de Toast

O projeto usa um **Context de Toast** para feedback visual de erros:

**Localização:** `src/context/ToastContext.jsx`

**Uso:**
```javascript
import { useToast } from '@/context/ToastContext'

const { showError, showSuccess, showInfo } = useToast()

try {
  await productService.getAll()
  showSuccess('Produtos carregados!')
} catch (error) {
  showError('Erro ao carregar produtos. Tente novamente.')
}
```

### Tipos de Erro

| Status | Descrição | Tratamento |
|--------|-----------|------------|
| `0` | Erro de rede/conexão | Toast: "Erro de conexão. Verifique sua internet." |
| `400` | Bad Request | Toast: mensagem do backend |
| `404` | Not Found | Página específica "Produto não encontrado" |
| `408` | Timeout | Toast: "Tempo limite excedido" |
| `500` | Server Error | Toast: "Erro inesperado. Tente novamente." |

---

## 🧪 Testando a Integração

### 1. Backend Rodando

Certifique-se de que o backend está rodando em `http://localhost:8080`:

```bash
# No diretório do backend Spring Boot
./mvnw spring-boot:run
```

### 2. Frontend

```bash
# No diretório do frontend
npm run dev
```

Acesse: `http://localhost:5173`

### 3. Verificar Endpoints

**Teste manual:**
```bash
# Listar produtos
curl http://localhost:8080/products

# Detalhe do produto
curl http://localhost:8080/products/{id}

# Criar pedido (POST)
curl -X POST http://localhost:8080/orders \
  -H "Content-Type: application/json" \
  -d '{"customer": {...}, "address": {...}, "items": [...], "total": 399.80}'
```

---

## 🔄 Normalização de Dados

O `productService` normaliza automaticamente os dados da API para o formato esperado pelos componentes:

**API → Frontend:**
- `sizes: [{ label, stock }]` → `sizes: ['P', 'M', 'G']` + `sizeStock: { P: 5, M: 10 }`
- `images: [url1, url2]` → `image: url1`, `imageHover: url2`, `gallery: [{src, label}]`
- `isPromotion` → `isPromo`, `badge: 'Promo'`

Isso garante **zero breaking changes** nos componentes existentes.

---

## 📦 Estado do Carrinho

O **carrinho permanece 100% frontend** usando:
- **Context API** (`CartContext`)
- **localStorage** para persistência

O carrinho só é enviado ao backend no momento do checkout via `POST /orders`.

---

## ✅ Checklist de Integração

- [x] Variáveis de ambiente configuradas
- [x] httpClient implementado com timeout e tratamento de erros
- [x] productService integrado na PLP
- [x] productService integrado na PDP
- [x] orderService integrado no checkout
- [x] Sistema de Toast implementado
- [x] Tratamento de erro 404 na PDP
- [x] Loading states em todas as páginas
- [x] Carrinho mantido no frontend
- [x] Normalização de dados da API

---

## 📝 Observações

1. **CORS:** O backend deve permitir requisições do frontend (`http://localhost:5173` em dev)
2. **Timeout:** Configurado em 30s. Ajuste em `httpClient.js` se necessário
3. **Retry:** Não implementado. O usuário pode clicar em "Tentar novamente" manualmente
4. **Cache:** Não implementado. Considere adicionar cache com React Query se necessário

---

## 🚀 Próximos Passos (Opcionais)

- [ ] Adicionar React Query para cache e retry automático
- [ ] Implementar paginação na listagem de produtos
- [ ] Adicionar filtros de produtos no backend
- [ ] Implementar autenticação JWT
- [ ] Adicionar sistema de busca no backend

---

**Documentação criada em:** 30/01/2025
**Versão do Frontend:** 1.0.0
