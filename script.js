// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).jpg`;  // Caminho para a imagem

    // Cria uma nova imagem para verificar se o arquivo existe
    const img = new Image();
    img.src = caminhoImagem;

    // Usar uma Promise para verificar a imagem de forma assíncrona
    const imgPromise = new Promise((resolve, reject) => {
      img.onload = function() {
        resolve(caminhoImagem);  // A imagem foi carregada corretamente
      };
      img.onerror = function() {
        reject();  // Se falhar, rejeitamos a Promise
      };
    });

    // Trabalhando com a Promise para decidir se criamos o produto
    imgPromise
      .then(() => {
        // Se a imagem carregou com sucesso, criamos o produto
        // Remover os parênteses do nome da imagem
        const nomeImagem = `produto (${i})`.replace(/[()]/g, '');  // Remove os parênteses

        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        // A imagem é carregada corretamente, então a adicionamos à div
        img.alt = nomeImagem;  // Definir texto alternativo para a imagem
        divProduto.appendChild(img);

        // Cria e adiciona o nome da imagem abaixo da foto
        const nomeImagemElement = document.createElement('p');
        nomeImagemElement.textContent = nomeImagem;  // Agora sem parênteses
        divProduto.appendChild(nomeImagemElement);

        // Adiciona a div do produto à seção de produtos
        produtosSection.appendChild(divProduto);

        // Adicionar o evento de clique para abrir a imagem no modal
        img.addEventListener('click', () => {
          abrirModal(caminhoImagem, nomeImagem);
        });
      })
      .catch(() => {
        // Se a imagem falhou, não faz nada (não adiciona o produto)
      });
  }
}

// Função para abrir a imagem no modal
function abrirModal(imagem, nomeImagem) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("modal-caption");

  modal.style.display = "block";  // Exibe o modal
  modalImg.src = imagem;  // Define a imagem do modal
  captionText.textContent = nomeImagem;  // Define o nome da imagem na legenda

  // Quando o usuário clica no "X", fecha o modal
  const closeBtn = document.getElementById("close");
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Fechar o modal se clicar fora da imagem
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Chama a função para gerar os produtos
gerarProdutos();
