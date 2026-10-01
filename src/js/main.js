import { render } from './navegacao.js';
import { iniciarFormulario } from './formulario.js';

const menu = document.querySelector('#menuLateral');
const botaoMenu = document.querySelector('#botaoMenu');
const modoBtn = document.querySelector('#modoBtn');
const toast = document.querySelector('#toast');

export function mostrarToast(mensagem) {
  toast.textContent = `✓ ${mensagem}`;
  toast.classList.add('mostrar');
  window.setTimeout(() => toast.classList.remove('mostrar'), 4000);
}

function fecharMenu() {
  menu.classList.remove('ativo');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
}

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('ativo');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.addEventListener('click', (event) => {
  if (event.target.matches('a')) fecharMenu();
});




window.addEventListener('hashchange', () => {
  render();
  iniciarFormulario(mostrarToast);
});

window.addEventListener('DOMContentLoaded', () => {
  render();
  iniciarFormulario(mostrarToast);
});
