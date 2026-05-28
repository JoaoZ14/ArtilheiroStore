-- Tabela de produtos
CREATE TABLE IF NOT EXISTS products (
  id               SERIAL PRIMARY KEY,
  name             VARCHAR(255) NOT NULL,
  price            NUMERIC(10,2) NOT NULL,
  original_price   NUMERIC(10,2),
  image            TEXT,
  image_hover      TEXT,
  badge            VARCHAR(50),
  link             VARCHAR(255),
  team             VARCHAR(100),
  liga             VARCHAR(100),
  category         VARCHAR(100),
  sizes            TEXT[]         DEFAULT '{}',
  size_stock       JSONB          DEFAULT '{}',
  is_promo         BOOLEAN        DEFAULT false,
  sales_count      INTEGER        DEFAULT 0,
  gallery          JSONB          DEFAULT '[]',
  material         TEXT,
  shipping         TEXT           DEFAULT 'Envio em até 5 dias úteis',
  exchange         TEXT           DEFAULT 'Troca fácil em até 7 dias',
  season           VARCHAR(100),
  frete_gratis     BOOLEAN        DEFAULT false,
  active           BOOLEAN        DEFAULT true,
  created_at       TIMESTAMP      DEFAULT NOW()
);

-- Sequência de numeração de pedidos por ano
CREATE TABLE IF NOT EXISTS order_sequences (
  year   INTEGER PRIMARY KEY,
  last_n INTEGER DEFAULT 0
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS orders (
  id                  VARCHAR(30) PRIMARY KEY,
  customer_name       VARCHAR(255) NOT NULL,
  customer_email      VARCHAR(255) NOT NULL,
  customer_cpf        VARCHAR(14)  NOT NULL,
  address_cep         VARCHAR(9)   NOT NULL,
  address_rua         TEXT         NOT NULL,
  address_numero      VARCHAR(20)  NOT NULL,
  address_complemento VARCHAR(100),
  address_cidade      VARCHAR(100) NOT NULL,
  address_estado      CHAR(2)      NOT NULL,
  status              VARCHAR(50)  DEFAULT 'PAYMENT_PENDING',
  total               NUMERIC(10,2) NOT NULL,
  created_at          TIMESTAMP    DEFAULT NOW(),
  updated_at          TIMESTAMP    DEFAULT NOW()
);

-- Itens de cada pedido
CREATE TABLE IF NOT EXISTS order_items (
  id         SERIAL PRIMARY KEY,
  order_id   VARCHAR(30)   REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER       REFERENCES products(id),
  size       VARCHAR(20),
  quantity   INTEGER       NOT NULL,
  unit_price NUMERIC(10,2) NOT NULL
);

-- Pagamentos associados a pedidos
CREATE TABLE IF NOT EXISTS payments (
  id              SERIAL PRIMARY KEY,
  order_id        VARCHAR(30)  REFERENCES orders(id) ON DELETE CASCADE,
  mp_payment_id   VARCHAR(100),
  status          VARCHAR(50),
  status_detail   VARCHAR(100),
  method          VARCHAR(50),
  qr_code_base64  TEXT,
  qr_code         TEXT,
  ticket_url      TEXT,
  paid_at         TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_email     ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_cpf       ON orders(customer_cpf);
CREATE INDEX IF NOT EXISTS idx_payments_order   ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_mp_id   ON payments(mp_payment_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
