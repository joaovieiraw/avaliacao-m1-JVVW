const catalogo = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Cientifica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Cientifica" },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Cientifica" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
  ];
  
  function listarfilmesporgenero(genero){
    return catalogo.filter(catalogo => catalogo.genero === genero); // 1- ele vai filtrar o catalogo de filmes e vai mostrar os filmes apenas com o genero que voce escolheu
  }

  const titulos = catalogo.map(catalogo => catalogo.titulo); // 2- aqui9 esse coisa ele vai pegar o catalogo de filmes e vai mostrar apenas os titulos dos flmes


  function listarFilmesApartirDoAno(ano) {
    return catalogo
      .filter(catalogo => catalogo.ano >= ano) // pega só os lançados depois ou igual ao anoMinimo
      .map(catalogo => catalogo.titulo);             // extrai apenas os títulos
  }
    console.log("filmes do catalogo")
    console.log(listarfilmesporgenero("Ficção Cientifica")); // 1 (coloque o genero que tu quer ver os filmes ali onde ta escrto "ficção cientifica")
    console.log("\ntitulos dos filmes em cartaz: " + titulos); // 2- titulos
    console.log("\nfilmes lançados a partir de 2000: " + listarFilmesApartirDoAno(2000)); // 3- filmes apartir do ano que tu quer (coloque o ano ali onde ta escrito 2000)