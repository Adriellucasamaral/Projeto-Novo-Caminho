export const rotas = {
  inicio: `
    <section class="hero">
      <div class="hero-texto">
        <span class="badge creme">Educação e solidariedade</span>
        <h2>Um novo começo pode caber em uma mochila</h2>
        <p>O Projeto Novo Caminho arrecada materiais escolares para crianças que precisam de apoio para estudar.</p>
        <div class="acoes">
          <a class="botao" href="#projetos">Conhecer os projetos</a>
          <a class="botao" href="#cadastro">Quero participar</a>
        </div>
      </div>
      <img src="/src/img/materiais-escolares.jpg" alt="Materiais escolares organizados para doação">
    </section>
    <section class="alerta"><strong>Campanha em andamento:</strong> estamos recebendo cadernos, lápis, estojos e mochilas.</section>
    <section class="bloco"><h2>Como ajudamos</h2><p>Reunimos os materiais recebidos, organizamos os kits com apoio de voluntários e preparamos tudo para a entrega.</p></section>
  `,
  projetos: `
    <section class="bloco">
      <span class="badge">Projetos</span>
      <h2>Ações do Projeto Novo Caminho</h2>
      <p>Veja as principais formas de participação e apoio.</p>
      <div class="grade-cards" id="listaProjetos"></div>
    </section>
  `,
  cadastro: `
    <section class="formulario">
      <div class="form-cabecalho">
        <img src="/src/img/icone-cadastro.png" alt="Ilustração de uma ficha de cadastro com lápis">
        <div><h2>Cadastro</h2><p>Preencha seus dados e informe como deseja participar.</p></div>
      </div>
      <form id="form-cadastro" novalidate>
        <fieldset><legend>Sobre você</legend>
          <div class="campo"><label for="nome">Nome completo:</label><input type="text" id="nome" name="nome" required></div>
          <div class="campo"><label for="nascimento">Data de nascimento:</label><input type="date" id="nascimento" name="nascimento" required></div>
          <div class="campo"><label for="email">E-mail:</label><input type="email" id="email" name="email" required></div>
          <div class="campo"><label for="celular">Celular:</label><input type="tel" id="celular" name="celular" placeholder="(19) 99999-9999" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" required></div>
          <div class="campo"><label for="documento">CPF:</label><input type="text" id="documento" name="documento" placeholder="000.000.000-00" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" required></div>
        </fieldset>
        <fieldset><legend>Onde você mora</legend>
          <div class="campo"><label for="cep">CEP:</label><input type="text" id="cep" name="cep" placeholder="00000-000" pattern="[0-9]{5}-[0-9]{3}" required></div>
          <div class="campo"><label for="endereco">Rua e número:</label><input type="text" id="endereco" name="endereco" required></div>
          <div class="campo"><label for="cidade">Cidade:</label><input type="text" id="cidade" name="cidade" required></div>
          <div class="campo"><label for="estado">Estado:</label><input type="text" id="estado" name="estado" required></div>
        </fieldset>
        <fieldset><legend>Como deseja participar</legend>
          <div class="opcoes">
            <label><input type="radio" name="participacao" value="voluntario" required> Trabalho voluntário</label>
            <label><input type="radio" name="participacao" value="doador"> Realizar uma doação</label>
          </div>
        </fieldset>
        <button type="submit">Enviar cadastro</button>
      </form>
    </section>
  `
};

const projetos = [
  { titulo: 'Campanha de materiais', status: 'ARRECADAÇÃO ABERTA', classe: '', texto: 'Recebemos cadernos, lápis, canetas, estojos e mochilas para montar novos kits.', imagem: '/src/img/projetos-escolares.png', alt: 'Mochilas e materiais escolares para doação' },
  { titulo: 'Equipe voluntária', status: 'PRECISA DE VOLUNTÁRIOS', classe: 'oliva', texto: 'Os voluntários ajudam na separação dos materiais e na organização dos kits.', imagem: '', alt: '' },
  { titulo: 'Entrega das doações', status: 'EM ORGANIZAÇÃO', classe: 'creme', texto: 'Depois da arrecadação, os materiais são conferidos e preparados para a entrega.', imagem: '', alt: '' }
];

export function renderProjetos() {
  const lista = document.querySelector('#listaProjetos');
  if (!lista) return;
  lista.replaceChildren();
  projetos.forEach((projeto) => {
    const card = document.createElement('article');
    const badge = document.createElement('span');
    const titulo = document.createElement('h3');
    const texto = document.createElement('p');
    badge.className = `badge ${projeto.classe}`;
    badge.textContent = projeto.status;
    titulo.textContent = projeto.titulo;
    texto.textContent = projeto.texto;
    card.className = 'card';
    card.append(badge);
    if (projeto.imagem) {
      const imagem = document.createElement('img');
      imagem.src = projeto.imagem;
      imagem.alt = projeto.alt;
      card.append(imagem);
    }
    card.append(titulo, texto);
    if (projeto.titulo === 'Equipe voluntária') {
      const link = document.createElement('a');
      link.className = 'botao';
      link.href = '#cadastro';
      link.textContent = 'Participar';
      card.append(link);
    }
    lista.appendChild(card);
  });
}

export function render() {
  const conteudo = document.querySelector('#conteudo');
  const rota = location.hash.replace('#', '') || 'inicio';
  conteudo.innerHTML = rotas[rota] || rotas.inicio;
  if (rota === 'projetos') renderProjetos();
  conteudo.focus();
}
