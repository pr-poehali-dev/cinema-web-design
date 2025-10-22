import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import ReviewCard from '@/components/ReviewCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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
    }
  ];

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
    }
  ];

  const reviews = [
    {
      author: 'Алексей Иванов',
      movie: 'Космическая Одиссея',
      rating: 9,
      text: 'Потрясающий фильм! Визуальные эффекты на высоте, сюжет захватывает с первых минут.',
      date: '15 октября 2024'
    },
    {
      author: 'Мария Петрова',
      movie: 'Тёмные Тайны',
      rating: 10,
      text: 'Лучший сериал года! Не могла оторваться, смотрела все сезоны за выходные.',
      date: '12 октября 2024'
    },
    {
      author: 'Дмитрий Сидоров',
      movie: 'Легенда Героя',
      rating: 8,
      text: 'Отличный боевик с продуманным сценарием. Рекомендую всем любителям жанра!',
      date: '10 октября 2024'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/3769710b-8fc1-49bd-af3e-3d86fd4a92a3.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Добро пожаловать в КиноЗал
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Тысячи фильмов и сериалов в отличном качестве
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Play" size={24} className="mr-2" />
            Начать просмотр
          </Button>
        </div>
      </section>

      <main className="flex-grow">
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                <Icon name="Film" size={36} className="text-primary" />
                Популярные фильмы
              </h2>
              <Button variant="outline">
                Все фильмы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {movies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                <Icon name="Tv" size={36} className="text-primary" />
                Популярные сериалы
              </h2>
              <Button variant="outline">
                Все сериалы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {series.map((item, index) => (
                <MovieCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Icon name="MessageCircle" size={36} />
              Отзывы зрителей
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">О нашем кинотеатре</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              КиноЗал - это современная онлайн-платформа для просмотра фильмов и сериалов 
              в высоком качестве. Мы предлагаем огромную коллекцию контента на любой вкус: 
              от классики до новинок кино, от захватывающих боевиков до трогательных драм.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Icon name="Library" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Фильмов и сериалов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">500,000+</h3>
                <p className="text-muted-foreground">Активных пользователей</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">HD/4K</h3>
                <p className="text-muted-foreground">Качество видео</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
