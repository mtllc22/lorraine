// Função para gerar os 50 produtos dinamicamente
function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).png`;  // Caminho para a imagem

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
        const nomeImagem = `produto (${i})`.replace(/[()]/g, '');  //
