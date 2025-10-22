import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import { series } from '@/data/mockData';
import Icon from '@/components/ui/icon';

const Series = () => {
  const [searchParams, setSearchParams] = useState({ query: '', genre: '', year: '' });

  const handleSearch = (query: string, genre: string, year: string) => {
    setSearchParams({ query, genre, year });
  };

  const filteredSeries = series.filter(show => {
    const matchesQuery = !searchParams.query || 
      show.title.toLowerCase().includes(searchParams.query.toLowerCase());
    const matchesGenre = !searchParams.genre || searchParams.genre === 'all' || 
      show.genre.toLowerCase() === searchParams.genre.toLowerCase();
    const matchesYear = !searchParams.year || searchParams.year === 'all' || 
      show.year.toString() === searchParams.year;
    return matchesQuery && matchesGenre && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Icon name="Tv" size={48} />
            Сериалы
          </h1>
          <p className="text-xl">Популярные сериалы с захватывающим сюжетом</p>
        </div>
      </section>

      <main className="flex-grow bg-muted/30">
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено: <span className="font-semibold text-foreground">{filteredSeries.length}</span> {filteredSeries.length === 1 ? 'сериал' : 'сериалов'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSeries.map((show) => (
              <MovieCard key={show.id} {...show} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Series;