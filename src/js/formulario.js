const chaveCadastro = 'novo-caminho-cadastro';

function mostrarErro(campo, mensagem) {
  campo.classList.add('erro');
  campo.classList.remove('sucesso');
  let aviso = campo.parentElement.querySelector('.mensagem-campo');
  if (!aviso) {
    aviso = document.createElement('small');
    aviso.className = 'mensagem-campo';
    campo.parentElement.appendChild(aviso);
  }
  aviso.textContent = mensagem;
}

function limparErro(campo) {
  campo.classList.remove('erro');
  campo.classList.add('sucesso');
  const aviso = campo.parentElement.querySelector('.mensagem-campo');
  if (aviso) aviso.remove();
}

export function validarFormulario(form) {
  let valido = true;
  form.querySelectorAll('input').forEach((campo) => {
    if (!campo.checkValidity()) {
      valido = false;
      if (campo.validity.valueMissing) mostrarErro(campo, 'Preencha este campo.');
      else if (campo.validity.typeMismatch) mostrarErro(campo, 'Confira o formato informado.');
      else mostrarErro(campo, 'Confira o valor informado.');
    } else {
      limparErro(campo);
    }
  });
  return valido;
}

export function iniciarFormulario(mostrarToast) {
  const form = document.querySelector('#form-cadastro');
  if (!form) return;

  const salvo = localStorage.getItem(chaveCadastro);
  if (salvo) {
    const dados = JSON.parse(salvo);
    Object.entries(dados).forEach(([nome, valor]) => {
      const campo = form.elements[nome];
      if (!campo) return;
      if (campo instanceof RadioNodeList) {
        campo.forEach((radio) => { radio.checked = radio.value === valor; });
      } else {
        campo.value = valor;
      }
    });
  }

  form.addEventListener('input', () => validarFormulario(form));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validarFormulario(form)) return;
    const dados = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem(chaveCadastro, JSON.stringify(dados));
    mostrarToast('Cadastro salvo com sucesso!');
  });
}
