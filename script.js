function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');

  // Array para armazenar os nomes das imagens
  const imagens = [];
  
  // Criar nomes e armazenar no array
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).jpg`;
    const nomeImagem = `produto (${i})`.replace(/[()]/g, '');
    imagens.push({ caminho: caminhoImagem, nome: nomeImagem });
  }

  // Ordenar as imagens em ordem alfabética
  imagens.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { numeric: true }));

  // Criar os elementos no DOM com base na ordem
  imagens.forEach(imagem => {
    const img = new Image();
    img.src = imagem.caminho;
    const imgPromise = new Promise((resolve, reject) => {
      img.onload = function () {
        resolve(imagem);
      };
      img.onerror = function () {
        reject();
      };
    });

    imgPromise
      .then(({ caminho, nome }) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        img.alt = nome;
        divProduto.appendChild(img);
        const nomeImagemElement = document.createElement('p');
        nomeImagemElement.textContent = nome;
        divProduto.appendChild(nomeImagemElement);
        produtosSection.appendChild(divProduto);
        img.addEventListener('click', () => {
          abrirModal(caminho, nome);
        });
      })
      .catch(() => {
        console.warn(`Erro ao carregar a imagem: ${imagem.caminho}`);
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
