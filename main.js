function configuraBotaoCarrosel() {
    const container = document.querySelector('.cartoes');
    const btnDireita = document.querySelector('.passdireita');
    const btnEsquerda = document.querySelector('.passesquerda')
    const valorRotacao = 300;

    btnDireita.addEventListener('click', () => {
        container.scrollLeft += valorRotacao;
    });
    btnEsquerda.addEventListener('click', () => {
        container.scrollLeft -= valorRotacao;
    });
}


window.onload = function () {
  const projetos = [
    {
      inf: 'clique para visualizar',  
      imagem: 'img/javascript.png',  
      nome: 'Quality Board',
      descricao: 'Quadro de ações onde é possivel visualizar graficamente as atividades de sua equipe',
    },
    {
      inf: 'clique para visualizar',
      imagem: 'img/cypress.png',
      nome: 'Project Name',
      descricao: 'Description project',
    },
    {
      inf: 'clique para visualizar',
      imagem: 'img/cypress.png',
      nome: 'Project Name',
      descricao: 'Description project',
    },
    {
      inf: 'clique para visualizar',
      imagem: 'img/cypress.png',
      nome: 'Project Name',
      descricao: 'Description project',
    },
        {
      inf: 'clique para visualizar',
      imagem: 'img/cypress.png',
      nome: 'Project Name',
      descricao: 'Description project',
    },
    {
      inf: 'clique para visualizar',
      imagem: 'img/cypress.png',
      nome: 'Project Name',
      descricao: 'Description project',
    },
    
  ];

    const container = document.querySelector('.cartoes'); // ← ponto antes do nome da classe

  projetos.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'cartao';
    card.innerHTML = `
        <div class="imagem-informativo">
            <img src="${proj.imagem}" alt="${proj.nome}" class="icone-projeto">
            <p class="informativo">${proj.inf}</p>
        </div>
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>`;
    container.appendChild(card); // ← aqui o nome correto da variável
  });


};

//função para rodar a lista de cartoes
configuraBotaoCarrosel()

