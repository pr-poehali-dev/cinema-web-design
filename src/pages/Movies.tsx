import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import { movies } from '@/data/mockData';
import Icon from '@/components/ui/icon';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({ query: '', genre: '', year: '' });

  const handleSearch = (query: string, genre: string, year: string) => {
    setSearchParams({ query, genre, year });
  };

  const filteredMovies = movies.filter(movie => {
    const matchesQuery = !searchParams.query || 
      movie.title.toLowerCase().includes(searchParams.query.toLowerCase());
    const matchesGenre = !searchParams.genre || searchParams.genre === 'all' || 
      movie.genre.toLowerCase() === searchParams.genre.toLowerCase();
    const matchesYear = !searchParams.year || searchParams.year === 'all' || 
      movie.year.toString() === searchParams.year;
    return matchesQuery && matchesGenre && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Icon name="Film" size={48} />
            Фильмы
          </h1>
          <p className="text-xl">Огромная коллекция фильмов на любой вкус</p>
        </div>
      </section>

      <main className="flex-grow bg-muted/30">
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено: <span className="font-semibold text-foreground">{filteredMovies.length}</span> {filteredMovies.length === 1 ? 'фильм' : 'фильмов'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Movies;