function gerarProdutos() {
  const produtosSection = document.getElementById('produtos');
  
  for (let i = 1; i <= 50; i++) {
    const caminhoImagem = `img/produto (${i}).jpg`;  
    const img = new Image();
    img.src = caminhoImagem;
    const imgPromise = new Promise((resolve, reject) => {
      img.onload = function() {
        resolve(caminhoImagem);  
      };
      img.onerror = function() {
        reject();  
      };
    });

    
    imgPromise
      .then(() => {
        const nomeImagem = `produto (${i})`.replace(/[()]/g, '');  
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        img.alt = nomeImagem;  
        divProduto.appendChild(img);
        const nomeImagemElement = document.createElement('p');
        nomeImagemElement.textContent = nomeImagem;  
        divProduto.appendChild(nomeImagemElement);
        produtosSection.appendChild(divProduto);
        img.addEventListener('click', () => {
          abrirModal(caminhoImagem, nomeImagem);
        });
      })
      .catch(() => {
      });
  }
}


function abrirModal(imagem, nomeImagem) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("modal-caption");
  modal.style.display = "block";  
  modalImg.src = imagem;  
  captionText.textContent = nomeImagem;  
  const closeBtn = document.getElementById("close");
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


gerarProdutos();
