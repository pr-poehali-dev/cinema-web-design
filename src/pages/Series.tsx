import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { series } from '@/data/mockData';
import Icon from '@/components/ui/icon';

const Series = () => {
  const [filteredSeries, setFilteredSeries] = useState(series);

  const handleSearch = (query: string, genre: string, year: string) => {
    let filtered = [...series];

    if (query) {
      filtered = filtered.filter(show =>
        show.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (genre !== 'all') {
      filtered = filtered.filter(show =>
        show.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    if (year !== 'all') {
      filtered = filtered.filter(show =>
        show.year.toString() === year
      );
    }

    setFilteredSeries(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Icon name="Tv" size={48} />
            Сериалы
          </h1>
          <p className="text-xl text-white/90">
            Лучшие сериалы со всего мира
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <main className="flex-1 bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено сериалов: <span className="font-semibold text-foreground">{filteredSeries.length}</span>
            </p>
          </div>
          
          {filteredSeries.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSeries.map(show => (
                <MovieCard key={show.id} {...show} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Series;
