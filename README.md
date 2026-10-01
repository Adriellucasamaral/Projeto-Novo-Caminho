# Projeto Novo Caminho

## Sobre o projeto
O Projeto Novo Caminho é uma interface voltada para uma iniciativa de educação e solidariedade. A aplicação apresenta os projetos, permite o cadastro de participantes e guarda os dados no navegador.

**Tecnologias:** HTML, CSS e JavaScript.

## Estrutura do projeto
- `index.html` — página principal da aplicação.
- `src/css/style.css` — estilos da interface e responsividade.
- `src/js/main.js` — inicialização e ligação dos módulos.
- `src/js/navegacao.js` — rotas por hash e criação dos cards.
- `src/js/formulario.js` — validação e armazenamento do cadastro.
- `src/img/` — imagens utilizadas no projeto.

## Funcionalidades
- Navegação por hash sem recarregar a página.
- Cards de projetos gerados pelo JavaScript.
- Cadastro com validação e mensagens por campo.
- Armazenamento do cadastro com `localStorage`.
- Toast de confirmação após cadastro válido.
- Menu mobile.

## Como executar
1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no terminal.
3. Execute `npm install` para instalar o Vite usado na build.
4. Execute `npm run dev` para abrir o projeto em desenvolvimento.
5. Para gerar a versão de produção, execute `npm run build`.

## Versionamento
O projeto segue a organização proposta pelo GitFlow, com `main` para a versão principal, `develop` para desenvolvimento e `feature/` para novas funcionalidades.

Commits principais documentados:
- `feat: adiciona navegacao dinamica`
- `feat: adiciona cadastro interativo`
- `fix: ajusta validacao do formulario`

## Acessibilidade
Foram usados elementos semânticos como `header`, `nav`, `main` e `footer`, além de `label` nos campos do formulário. O botão do menu usa `aria-expanded`, e os estados de foco são visíveis para navegação por teclado.


## Build de produção
A ferramenta usada para a build é o Vite. O projeto mantém os módulos JavaScript separados durante o desenvolvimento e o Vite prepara os arquivos para produção com minificação.

## Fluxo de versionamento

O projeto foi organizado utilizando branches para separar a versão principal do desenvolvimento. A branch main representa a versão principal do projeto, enquanto a develop é utilizada para o desenvolvimento das alterações. Para novas funcionalidades, pode ser utilizada uma branch com o padrão feature/.

Esse fluxo ajuda a manter as alterações organizadas antes de serem integradas ao desenvolvimento.
