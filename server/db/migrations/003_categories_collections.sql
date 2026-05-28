-- Tabela de categorias (substituindo hardcoded do frontend)
CREATE TABLE IF NOT EXISTS categories (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  slug       VARCHAR(100) NOT NULL UNIQUE,
  image      TEXT,
  link       VARCHAR(255),
  active     BOOLEAN      DEFAULT true,
  sort_order INTEGER      DEFAULT 0,
  created_at TIMESTAMP    DEFAULT NOW()
);

-- Tabela de coleções / ligas (substituindo hardcoded do frontend)
CREATE TABLE IF NOT EXISTS collections (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100) NOT NULL UNIQUE,
  slug        VARCHAR(100) NOT NULL UNIQUE,
  image       TEXT,
  link        VARCHAR(255),
  description TEXT,
  active      BOOLEAN      DEFAULT true,
  sort_order  INTEGER      DEFAULT 0,
  created_at  TIMESTAMP    DEFAULT NOW()
);

-- Seed inicial: categorias
INSERT INTO categories (name, slug, image, link, sort_order) VALUES
  ('Chapéus de palha',  'chapeus-palha',    '/categorias/chapeu-palha.jpg',     '/categoria/chapeus-palha',    1),
  ('Chapéus aba larga', 'chapeus-aba',      '/categorias/chapeu-aba-larga.jpg', '/categoria/chapeus-aba',      2),
  ('Clássicos & feltro','chapeus-classicos','/categorias/chapeu-feltro.jpg',    '/categoria/chapeus-classicos',3),
  ('Artigos country',   'country',          '/categorias/cinta-country.jpg',    '/country',                    4)
ON CONFLICT (slug) DO NOTHING;

-- Seed inicial: coleções
INSERT INTO collections (name, slug, image, link, description, sort_order) VALUES
  ('Palha',     'palha',     '/categorias/chapeu-palha.jpg',     '/categoria/chapeus-palha',    'Palha natural com charme country e leveza no dia a dia.',   1),
  ('Aba larga', 'aba-larga', '/categorias/chapeu-aba-larga.jpg', '/categoria/chapeus-aba',      'Aba ampla para proteção solar com elegância western.',       2),
  ('Feltro',    'feltro',    '/categorias/chapeu-feltro.jpg',    '/categoria/chapeus-classicos','Feltro premium com forma americana clássica.',               3),
  ('Clássicos', 'classicos', '/categorias/chapeu-feltro.jpg',    '/categoria/chapeus-classicos','Modelos atemporais para momentos especiais.',                4),
  ('Country',   'country',   '/categorias/cinta-country.jpg',   '/country',                    'Cintas, lenços e acessórios para completar o look.',         5)
ON CONFLICT (slug) DO NOTHING;
