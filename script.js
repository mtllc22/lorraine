// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const produto = {
      imagem: `img/produto (${i}).png`,  // Caminho para a imagem
    };

    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');

    const imgProduto = document.createElement('img');
    imgProduto.src = produto.imagem;
    imgProduto.alt = `Produto ${i}`;  // A imagem terá um texto alternativo com o número do produto

    // Adiciona a imagem à div do produto
    divProduto.appendChild(imgProduto);

    // Adiciona a div do produto à seção de produtos
    produtosSection.appendChild(divProduto);
  }
}

// Chama a função para gerar os produtos
gerarProdutos();
