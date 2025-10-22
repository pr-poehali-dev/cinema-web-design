import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import Icon from '@/components/ui/icon';

const Series = () => {
  const [searchParams, setSearchParams] = useState({ query: '', genre: '', year: '' });

  const handleSearch = (query: string, genre: string, year: string) => {
    setSearchParams({ query, genre, year });
  };

  const series = [
    {
      title: 'Тёмные Тайны',
      year: '2024',
      genre: 'Драма',
      rating: 9.3,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Звёздный Путь',
      year: '2024',
      genre: 'Фантастика',
      rating: 8.7,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Детектив',
      year: '2023',
      genre: 'Триллер',
      rating: 8.9,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Семейная Сага',
      year: '2023',
      genre: 'Драма',
      rating: 8.4,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Космическая База',
      year: '2024',
      genre: 'Фантастика',
      rating: 8.8,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Комедийное Шоу',
      year: '2024',
      genre: 'Комедия',
      rating: 7.6,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Мистические Истории',
      year: '2023',
      genre: 'Ужасы',
      rating: 8.1,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    },
    {
      title: 'Боевые Хроники',
      year: '2023',
      genre: 'Боевик',
      rating: 8.5,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/b89f17da-23df-4150-84a4-6bb04eeeaef9.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Icon name="Tv" size={48} />
            Сериалы
          </h1>
          <p className="text-xl">Захватывающие сериалы для долгих вечеров</p>
        </div>
      </section>

      <main className="flex-grow">
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {series.map((item, index) => (
              <MovieCard key={index} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Series;
