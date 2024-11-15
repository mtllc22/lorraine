// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const produto = {
      nome: `Produto ${i}`,
      // Ajustando o caminho da imagem para 'produto (1).png', 'produto (2).png', etc.
      imagem: `img/produto (${i}).png`,
      descricao: `Descrição do produto ${i}.`
    };

    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');

    const imgProduto = document.createElement('img');
    imgProduto.src = produto.imagem;
    imgProduto.alt = produto.nome;

    const h2Produto = document.createElement('h2');
    h2Produto.textContent = produto.nome;

    const pDescricao = document.createElement('p');
    pDescricao.textContent = produto.descricao;

    // Adiciona os elementos ao produto
    divProduto.appendChild(imgProduto);
    divProduto.appendChild(h2Produto);
    divProduto.appendChild(pDescricao);

    // Adiciona o produto à seção de produtos
    produtosSection.appendChild(divProduto);
  }
}

// Chama a função para gerar os produtos
gerarProdutos();
