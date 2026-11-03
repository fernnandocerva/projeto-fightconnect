const menu = document.getElementById("menu");
const botao = document.getElementById("menu-btn");
const topo = document.getElementById("topo");

// Menu do celular: o botão ☰ liga/desliga a classe "aberto"
botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botao.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach(l => l.addEventListener("click", () => {
  menu.classList.remove("aberto");
  botao.setAttribute("aria-expanded", "false");
}));

// Sombra no topo quando a página rola
window.addEventListener("scroll", () => {
  topo.classList.toggle("rolou", window.scrollY > 10);
});

// Formulário de cadastro: só mostra uma mensagem (não envia dados para lugar nenhum)
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const perfil = document.getElementById("perfil").value;
  document.getElementById("retorno").textContent = "Obrigado! Registramos seu interesse (" + perfil.toLowerCase() + ").";
  e.target.reset();
});
