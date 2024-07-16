document.addEventListener('DOMContentLoaded', function() {
    const categoryButton = document.getElementById('category-button');
    const categoryList = document.getElementById('category-list');
    const movieGrid = document.getElementById('movie-grid');

    // Exibir/ocultar lista de categorias ao clicar no botão
    categoryButton.addEventListener('click', function() {
        categoryList.style.display = categoryList.style.display === 'block' ? 'none' : 'block';
    });

    // Simulação de dados de filmes (para teste)
    const movies = [
        { title: 'Filme 1', category: 'Ação', poster: 'poster1.jpg' },
        { title: 'Filme 2', category: 'Comédia', poster: 'poster2.jpg' },
        { title: 'Filme 3', category: 'Drama', poster: 'poster3.jpg' },
        // Adicione mais filmes conforme necessário
    ];

    // Função para exibir filmes com base na categoria selecionada
    function showMoviesByCategory(category) {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            if (movie.category === category) {
                const movieElement = document.createElement('img');
                movieElement.src = movie.poster;
                movieElement.alt = movie.title;
                movieElement.classList.add('movie-poster');
                movieGrid.appendChild(movieElement);
            }
        });
    }

    // Adicionar evento de clique para cada categoria de filme
    const categoryItems = categoryList.getElementsByTagName('li');
    Array.from(categoryItems).forEach(item => {
        item.addEventListener('click', function() {
            showMoviesByCategory(item.textContent);
            categoryList.style.display = 'none'; // Ocultar a lista após selecionar uma categoria
        });
    });

    // Exibir todos os filmes ao carregar a página (categoria padrão)
    showMoviesByCategory('Ação'); // Exemplo: mostrar inicialmente filmes de ação
});