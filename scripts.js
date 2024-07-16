'Comédia', poster: 'posters/comedy/poster23.jpg' },
        { title: 'Filme 24 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster24.jpg' },
        { title: 'Filme 25 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster25.jpg' },
        { title: 'Filme 26 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster26.jpg' },
        { title: 'Filme 27 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster27.jpg' },
        { title: 'Filme 28 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster28.jpg' },
        { title: 'Filme 29 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster29.jpg' },
        { title: 'Filme 30 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster30.jpg' },
        { title: 'Filme 31 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster31.jpg' },
        { title: 'Filme 32 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster32.jpg' },
        { title: 'Filme 33 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster33.jpg' },
        { title: 'Filme 34 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster34.jpg' },
        { title: 'Filme 35 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster35.jpg' },

        // Filmes de Drama
        { title: 'Filme 1 de Drama', category: 'Drama', poster: 'posters/drama/poster1.jpg' },
        { title: 'Filme 2 de Drama', category: 'Drama', poster: 'posters/drama/poster2.jpg' },
        { title: 'Filme 3 de Drama', category: 'Drama', poster: 'posters/drama/poster3.jpg' },
        // Adicione mais 35 filmes de Drama...
        { title: 'Filme 4 de Drama', category: 'Drama', poster: 'posters/drama/poster4.jpg' },
        { title: 'Filme 5 de Drama', category: 'Drama', poster: 'posters/drama/poster5.jpg' },
        { title: 'Filme 6 de Drama', category: 'Drama', poster: 'posters/drama/poster6.jpg' },
        { title: 'Filme 7 de Drama', category: 'Drama', poster: 'posters/drama/poster7.jpg' },
        { title: 'Filme 8 de Drama', category: 'Drama', poster: 'posters/drama/poster8.jpg' },
        { title: 'Filme 9 de Drama', category: 'Drama', poster: 'posters/drama/poster9.jpg' },
        { title: 'Filme 10 de Drama', category: 'Drama', poster: 'posters/drama/poster10.jpg' },
        { title: 'Filme 11 de Drama', category: 'Drama', poster: 'posters/drama/poster11.jpg' },
        { title: 'Filme 12 de Drama', category: 'Drama', poster: 'posters/drama/poster12.jpg' },
        { title: 'Filme 13 de Drama', category: 'Drama', poster: 'posters/drama/poster13.jpg' },
        { title: 'Filme 14 de Drama', category: 'Drama', poster: 'posters/drama/poster14.jpg' },
        { title: 'Filme 15 de Drama', category: 'Drama', poster: 'posters/drama/poster15.jpg' },
        { title: 'Filme 16 de Drama', category: 'Drama', poster: 'posters/drama/poster16.jpg' },
        { title: 'Filme 17 de Drama', category: 'Drama', poster: 'posters/drama/poster17.jpg' },
        { title: 'Filme 18 de Drama', category: 'Drama', poster: 'posters/drama/poster18.jpg' },
        { title: 'Filme 19 de Drama', category: 'Drama', poster: 'posters/drama/poster19.jpg' },
        { title: 'Filme 20 de Drama', category: 'Drama', poster: 'posters/drama/poster20.jpg' },
        { title: 'Filme 21 de Drama', category: 'Drama', poster: 'posters/drama/poster21.jpg' },
        { title: 'Filme 22 de Drama', category: 'Drama', poster: 'posters/drama/poster22.jpg' },
        { title: 'Filme 23 de Drama', category: 'Drama', poster: 'posters/drama/poster23.jpg' },
        { title: 'Filme 24 de Drama', category: 'Drama', poster: 'posters/drama/poster24.jpg' },
        { title: 'Filme 25 de Drama', category: 'Drama', poster: 'posters/drama/poster25.jpg' },
        { title: 'Filme 26 de Drama', category: 'Drama', poster: 'posters/drama/poster26.jpg' },
        { title: 'Filme 27 de Drama', category: 'Drama', poster: 'posters/drama/poster27.jpg' },
        { title: 'Filme 28 de Drama', category: 'Drama', poster: 'posters/drama/poster28.jpg' },
        { title: 'Filme 29 de Drama', category: 'Drama', poster: 'posters/drama/poster29.jpg' },
        { title: 'Filme 30 de Drama', category: 'Drama', poster: 'posters/drama/poster30.jpg' },
        { title: 'Filme 31 de Drama', category: 'Drama', poster: 'posters/drama/poster31.jpg' },
        { title: 'Filme 32 de Drama', category: 'Drama', poster: 'posters/drama/poster32.jpg' },
        { title: 'Filme 33 de Drama', category: 'Drama', poster: 'posters/drama/poster33.jpg' },
        { title: 'Filme 34 de Drama', category: 'Drama', poster: 'posters/drama/poster34.jpg' },
        { title: 'Filme 35 de Drama', category: 'Drama', poster: 'posters/drama/poster35.jpg' },

        // Adicione mais filmes para outras categorias conforme necessário
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