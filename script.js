// Função para exibir ou ocultar o botão de rolagem ao topo
function handleScroll() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }

  // Função para rolar suavemente ao topo
  function scrollToTop() {
    const navbarNav = document.querySelector('.navbar-nav');
    const navbarNavOffsetTop = navbarNav.offsetTop;
    window.scrollTo({
      top: navbarNavOffsetTop,
      behavior: 'smooth'
    });
  }

  // Adiciona eventos de clique e rolagem
  window.addEventListener('scroll', handleScroll);
  document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);

  function enviarFormulario() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const enderecoInput = document.getElementById('endereco');
  const messageInput = document.getElementById('message');

  alert("Enviado com Sucesso!");
}

// Função para exibir a janela modal com a imagem correspondente
function exibirModal(id) {
  var imagemModal = document.getElementById("imagemModal");
  var figura = document.getElementById(id);

  imagemModal.src = figura.src;

  var modal = new bootstrap.Modal(document.getElementById("modalImagem"));
  modal.show();
}

// Evento de clique nos botões "Ver Mais"
document.getElementById("lerMaisBtn").addEventListener("click", function() {
  exibirModal("figura");
});

document.getElementById("lerMaisBtn2").addEventListener("click", function() {
  exibirModal("figura2");
});

document.getElementById("lerMaisBtn3").addEventListener("click", function() {
  exibirModal("figura3");
});

document.getElementById("lerMaisBtn4").addEventListener("click", function() {
  exibirModal("figura4");
});

document.getElementById("lerMaisBtn5").addEventListener("click", function() {
  exibirModal("figura5");
});

document.getElementById("lerMaisBtn6").addEventListener("click", function() {
  exibirModal("figura6");
});   