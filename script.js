// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).png`;  // Caminho para a imagem

    // Verificar se a imagem existe antes de criar o produto
    const imagemExiste = verificarImagem(caminhoImagem);

    if (imagemExiste) {
      const nomeImagem = `produto (${i})`;  // Nome da imagem sem a extensão

      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');

      const imgProduto = document.createElement('img');
      imgProduto.src = caminhoImagem;
      imgProduto.alt = nomeImagem;

      const nomeImagemElement = document.createElement('p');
      nomeImagemElement.textContent = nomeImagem;  // Exibimos o nome da imagem abaixo

      // Adiciona a imagem e o nome à div do produto
      divProduto.appendChild(imgProduto);
      divProduto.appendChild(nomeImagemElement);

      // Adiciona a div do produto à seção de produtos
      produtosSection.appendChild(divProduto);
    }
  }
}

// Função para verificar se a imagem existe
function verificarImagem(caminho) {
  const img = new Image();
  img.src = caminho;

  // Verificar se a imagem está carregada corretamente
  img.onload = function() {
    return true;
  };
  img.onerror = function() {
    return false;
  };
  return false;
}

// Chama a função para gerar os produtos
gerarProdutos();
