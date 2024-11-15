function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');

  // Array para armazenar os nomes e caminhos das imagens
  const imagens = [];
  for (let i = 1; i <= 40; i++) { // Garantir até 40 produtos
    const caminhoImagem = `img/produto (${i}).jpg`;
    const nomeImagem = `produto (${i})`.replace(/[()]/g, '');
    imagens.push({ caminho: caminhoImagem, nome: nomeImagem });
  }

  // Ordenar as imagens em ordem alfabética
  imagens.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { numeric: true }));

  // Garantir que os produtos sejam renderizados na ordem correta
  imagens.forEach(imagem => {
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');

    const img = new Image();
    img.src = imagem.caminho;
    img.alt = imagem.nome;

    // Tratar erros de carregamento
    img.onerror = function () {
      img.src = 'img/placeholder.jpg'; // Exibir imagem padrão em caso de erro
    };

    divProduto.appendChild(img);

    const nomeImagemElement = document.createElement('p');
    nomeImagemElement.textContent = imagem.nome;
    divProduto.appendChild(nomeImagemElement);

    produtosSection.appendChild(divProduto);

    // Adicionar funcionalidade de clique para abrir modal
    img.addEventListener('click', () => {
      abrirModal(imagem.caminho, imagem.nome);
    });
  });
}

function abrirModal(imagem, nomeImagem) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("modal-caption");
  modal.style.display = "block";
  modalImg.src = imagem;
  captionText.textContent = nomeImagem;

  const closeBtn = document.getElementById("close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

gerarProdutos();
