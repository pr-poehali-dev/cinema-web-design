import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import ReviewCard from '@/components/ReviewCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { movies, series, reviews } from '@/data/mockData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative bg-gradient-to-br from-primary via-accent to-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              🎬 Твой онлайн кинотеатр
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Тысячи фильмов и сериалов в HD качестве
            </p>
            <p className="text-lg text-white/90">
              Смотри новинки кино, популярные сериалы и классику. Без рекламы, в любое время!
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/movies">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/95 shadow-lg text-lg px-8"
                >
                  <Icon name="Film" size={24} className="mr-2" />
                  Смотреть фильмы
                </Button>
              </Link>
              <Link to="/series">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 shadow-lg text-lg px-8"
                >
                  <Icon name="Tv" size={24} className="mr-2" />
                  Смотреть сериалы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="Film" size={36} className="text-primary" />
                <h2 className="text-4xl font-bold text-foreground">Популярные фильмы</h2>
              </div>
              <Link to="/movies">
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Все фильмы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {movies.slice(0, 4).map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Icon name="Tv" size={36} className="text-primary" />
                <h2 className="text-4xl font-bold text-secondary-foreground">Популярные сериалы</h2>
              </div>
              <Link to="/series">
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Все сериалы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {series.slice(0, 4).map(show => (
                <MovieCard key={show.id} {...show} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="MessageCircle" size={36} className="text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Отзывы зрителей</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {reviews.map(review => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">О нашем кинотеатре</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              КиноМир - это современная онлайн-платформа для просмотра фильмов и сериалов 
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