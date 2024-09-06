function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(campoPesquisa == ""){
      section.innerHTML = "Opa, digite Quaresma, Novena ou Festa para aparecer algum resultado";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados da pesquisa e cria HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank"> Oração de São Miguel Arcanjo</a>
        </div>
      `;
      }
    }

    if(!resultados){
      resultados = "<p>Digite alguma palavra que tenha a ver com Festa, Quaresma ou Novenário de São Miguel Arcanjo</p>";
    };
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }


