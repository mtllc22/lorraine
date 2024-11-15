// Exemplo de função para trocar a imagem de um produto
function atualizarImagem(produtoId, novaImagemUrl) {
  const produto = document.getElementById(produtoId);
  const imagem = produto.querySelector('img');
  imagem.src = novaImagemUrl;
}
