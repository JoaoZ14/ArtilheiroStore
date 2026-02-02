# Logos dos times (Wikimedia Commons)

Os logos da tela de times podem vir de **Wikimedia Commons**: 100% gratuito, licenças abertas e alta qualidade (muitos em SVG).

## Fluxo recomendado

1. **Buscar no Wikimedia Commons**  
   👉 https://commons.wikimedia.org  

   Dicas de busca:
   - `Flamengo logo svg`
   - `Palmeiras logo svg`
   - `São Paulo FC logo svg`

2. **Baixar o SVG**  
   Escolha um arquivo com licença aberta (verifique a página do arquivo).

3. **Otimizar com SVGO**  
   Reduz o tamanho do SVG sem perder qualidade.
   ```bash
   npx svgo logo-flamengo.svg -o logo-flamengo-otimizado.svg
   ```

4. **Subir no Supabase Storage (ou CDN)**  
   Crie um bucket (ex.: `logos`) e faça upload dos SVGs. Obtenha a URL pública de cada arquivo.

5. **Usar no frontend**  
   Em `src/pages/TimesPage/TimesPage.jsx`, adicione a URL no objeto `TEAM_LOGOS`:
   ```javascript
   const TEAM_LOGOS = {
     Flamengo: 'https://xxx.supabase.co/storage/v1/object/public/logos/flamengo.svg',
     Palmeiras: 'https://xxx.supabase.co/storage/v1/object/public/logos/palmeiras.svg',
     // ...
   }
   ```
   Se a chave do time existir em `TEAM_LOGOS`, essa URL é usada. Caso contrário, cai no fallback (`TEAM_IMAGES_BRASILEIRAO` ou imagem do produto).

## Vantagens

- Muitos logos em SVG (escala em qualquer tamanho)
- Licenças abertas (sempre verifique cada arquivo)
- Alta qualidade
- Sem dependência de API externa para logos
- Controle total sobre os arquivos e o CDN
