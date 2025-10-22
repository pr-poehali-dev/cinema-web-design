import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import Icon from '@/components/ui/icon';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({ query: '', genre: '', year: '' });

  const handleSearch = (query: string, genre: string, year: string) => {
    setSearchParams({ query, genre, year });
  };

  const movies = [
    {
      title: 'Космическая Одиссея',
      year: '2024',
      genre: 'Фантастика',
      rating: 8.9,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Тайна Города',
      year: '2024',
      genre: 'Триллер',
      rating: 8.5,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Легенда Героя',
      year: '2023',
      genre: 'Боевик',
      rating: 9.1,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Комедия Года',
      year: '2023',
      genre: 'Комедия',
      rating: 7.8,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Драма Жизни',
      year: '2024',
      genre: 'Драма',
      rating: 8.7,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Ужас Ночи',
      year: '2024',
      genre: 'Ужасы',
      rating: 7.5,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Приключение Века',
      year: '2023',
      genre: 'Боевик',
      rating: 8.3,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    },
    {
      title: 'Романтика',
      year: '2023',
      genre: 'Комедия',
      rating: 7.9,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/0820f2e4-0d1e-47a2-841c-40ff84771f54.jpg'
    }
  ];

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

      <main className="flex-grow">
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Movies;
