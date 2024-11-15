// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).png`;  // Caminho para a imagem

    // Cria uma nova imagem para verificar se o arquivo existe
    const img = new Image();
    img.src = caminhoImagem;

    // Quando a imagem for carregada corretamente, mostramos o produto
    img.onload = function() {
      const nomeImagem = `produto (${i})`;  // Nome da imagem sem a extensão

      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');

      // Adiciona a imagem à div do produto
      divProduto.appendChild(img);

      // Cria e adiciona o nome da imagem abaixo da foto
      const nomeImagemElement = document.createElement('p');
      nomeImagemElement.textContent = nomeImagem;
      divProduto.appendChild(nomeImagemElement);

      // Adiciona a div do produto à seção de produtos
      produtosSection.appendChild(divProduto);
    };

    // Se houver erro ao carregar a imagem, não mostramos nada
    img.onerror = function() {
      // A imagem não existe, portanto, não fazemos nada (não exibimos o produto)
    };
  }
}

// Chama a função para gerar os produtos
gerarProdutos();
