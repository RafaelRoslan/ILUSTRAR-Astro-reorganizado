# ILUSTRAR — versão Astro (arquitetura reorganizada)

Projeto Astro da landing page **ILUSTRAR**. Esta entrega reorganiza pastas,
nomes de arquivos e caminhos de importação; não implementa os recursos da V2.

## Iniciar localmente

```bash
npm ci
npm run dev
```

Build de produção: `npm run build`; prévia: `npm run preview`.

> **Fontes locais:** os arquivos `.otf` e `.ttf` não estão incluídos neste
> pacote. Recoloque seus arquivos originais na pasta `src/assets/fonts/`,
> usando os nomes `Brownist.otf`, `SONGER_G_Regular.otf` e `Rubik-Regular.ttf`,
> antes de instalar/compilar. Eles estão no seu ZIP original do projeto Astro.

## Organização

- `src/pages/index.astro`: entrada da landing page, chama o layout e o conteúdo.
- `src/layouts/BaseLayout.astro`: HTML base e importação do CSS global.
- `src/components/layout/PageContent.astro`: ordem das seções; não altera sua aparência.
- `src/components/sections/<Seção>/`: cada seção tem seu `.astro` e `.css` juntos.
- `src/components/ui/`: componentes reutilizáveis (cards, FAQ, botão WhatsApp).
- `src/styles/tokens.css`: cores originais e outras variáveis globais futuras.
- `src/styles/global.css`: fontes, reset e elementos globais; importa os tokens.
- `src/styles/page.css`: largura e área principal da landing page.
- `src/scripts/global.js`: script legado mantido, ainda não refatorado.
- `src/assets/icons/`: ícones usados pela área de FAQ/contato.
- `src/assets/images/`: imagens existentes; nenhuma foi substituída ou convertida.
- `src/assets/fonts/`: pasta onde devem ficar suas fontes locais originais.

### Convenções

1. Nomes de arquivos e componentes em `PascalCase` (por exemplo, `CourseCard.astro`).
2. O CSS específico da seção fica ao lado do `.astro` e é importado nesse componente.
3. Estilos compartilhados e variáveis ficam em `src/styles/`; não colocar CSS
   de seção em `global.css`.
4. Preservar as classes CSS existentes enquanto não houver etapa de refatoração.
5. Alterar dados de contato/preços/cursos com validação do cliente. A futura pasta
   `src/data/` será criada quando extrairmos esses dados dos componentes.

## Próximas etapas (não implementadas)

1. Auditoria de arquivos, dependências e conteúdo.
2. Cabeçalho/menu responsivo e rodapé (ainda **não** foram criados).
3. `SectionHeading` e títulos editoriais das seções.
4. Faixa de diferenciais e seção dedicada de inclusão.
5. Carrossel infinito de cursos (3 níveis, com cards responsivos e descrição).
6. Localização e CTA final de matrícula.
7. Testes de acessibilidade, mobile-first, SEO, vídeo e desempenho.

## Observações preservadas

- `Benefits.astro` já existe, mas segue **desativado**.
- O FAQ usa a tag nativa `<details>` e o script legado ainda existe;
  sua limpeza será avaliada na auditoria.
- As imagens dos 12 cursos ainda usam o mesmo arquivo original `aurora.png`.
- Os SVGs de teste que vieram no projeto permanecem em `src/assets/`,
  para uma decisão explícita de remoção na auditoria.
- O arquivo `Welcome.astro` de demonstração do Astro não foi levado para
  a arquitetura organizada porque não era importado pela página.

## Verificações realizadas nesta entrega

- Os arquivos `.astro` e `.css` da arquitetura foram processados por validadores
  de sintaxe, sem erros.
- As marcações HTML dos 15 arquivos comparados permaneceram idênticas às originais.
- Os 14 CSS individuais comparados permaneceram idênticos, exceto a atualização
  necessária de caminhos relativos para imagens ao mover o componente Hero.
- Os caminhos locais importados foram verificados. As únicas referências que
  dependem da reposição de arquivos são as três fontes originais mencionadas acima.
- O build final não pôde ser executado neste ambiente: o ZIP de origem contém
  dependências nativas de Windows; elas devem ser reinstaladas localmente com
  `npm ci` conforme indicado no início deste README.
