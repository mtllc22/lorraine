// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const produto = {
      imagem: `img/produto (${i}).png`,  // Caminho para a imagem
    };

    // Extrair o nome do arquivo (sem a extensão)
    const nomeImagem = `produto (${i})`;  // Nome da imagem sem a extensão

    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');

    const imgProduto = document.createElement('img');
    imgProduto.src = produto.imagem;
    imgProduto.alt = nomeImagem;  // Usamos o nome do produto como texto alternativo

    const nomeImagemElement = document.createElement('p');
    nomeImagemElement.textContent = nomeImagem;  // Exibimos o nome da imagem abaixo

    // Adiciona a imagem e o nome à div do produto
    divProduto.appendChild(imgProduto);
    divProduto.appendChild(nomeImagemElement);

    // Adiciona a div do produto à seção de produtos
    produtosSection.appendChild(divProduto);
  }
}

// Chama a função para gerar os produtos
gerarProdutos();
