import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import ReviewCard from '@/components/ReviewCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  description: string;
  type: 'movie' | 'series';
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [filteredContent, setFilteredContent] = useState<Movie[]>([]);
  
  const moviesRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const movies: Movie[] = [
    {
      id: 1,
      title: 'Межзвёздный',
      year: 2023,
      genre: 'фантастика',
      rating: 9.2,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'Эпическое космическое путешествие за пределы галактики',
      type: 'movie'
    },
    {
      id: 2,
      title: 'Тайна города',
      year: 2024,
      genre: 'триллер',
      rating: 8.5,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'Детектив раскрывает загадочные преступления',
      type: 'movie'
    },
    {
      id: 3,
      title: 'Смех сквозь слёзы',
      year: 2023,
      genre: 'комедия',
      rating: 7.8,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'Весёлая история о семейных приключениях',
      type: 'movie'
    },
    {
      id: 4,
      title: 'Драма века',
      year: 2022,
      genre: 'драма',
      rating: 8.9,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'История о силе духа и преодолении',
      type: 'movie'
    },
    {
      id: 5,
      title: 'Кибер-панк',
      year: 2024,
      genre: 'экшен',
      rating: 8.3,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'Футуристический боевик о борьбе за свободу',
      type: 'movie'
    },
    {
      id: 6,
      title: 'Романтика в Париже',
      year: 2023,
      genre: 'романтика',
      rating: 7.6,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/cb643b75-661f-4c4c-9b68-59697328d627.jpg',
      description: 'Трогательная история любви во французской столице',
      type: 'movie'
    },
  ];

  const series: Movie[] = [
    {
      id: 7,
      title: 'Хроники будущего',
      year: 2024,
      genre: 'фантастика',
      rating: 9.0,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Захватывающий сериал о технологическом будущем человечества',
      type: 'series'
    },
    {
      id: 8,
      title: 'Следствие ведут',
      year: 2023,
      genre: 'триллер',
      rating: 8.7,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Криминальный сериал о расследовании сложных дел',
      type: 'series'
    },
    {
      id: 9,
      title: 'Семейные узы',
      year: 2024,
      genre: 'драма',
      rating: 8.4,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Трогательная история о семейных отношениях',
      type: 'series'
    },
    {
      id: 10,
      title: 'Офисная жизнь',
      year: 2023,
      genre: 'комедия',
      rating: 7.9,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Забавные приключения офисных работников',
      type: 'series'
    },
    {
      id: 11,
      title: 'Тайны прошлого',
      year: 2022,
      genre: 'ужасы',
      rating: 8.1,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Мистический триллер о древних проклятиях',
      type: 'series'
    },
    {
      id: 12,
      title: 'Документы века',
      year: 2024,
      genre: 'документальный',
      rating: 8.6,
      image: 'https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/70121413-1f5e-46f0-b062-e87f0c3555c7.jpg',
      description: 'Исторические события глазами очевидцев',
      type: 'series'
    },
  ];

  const reviews = [
    {
      id: 1,
      movieTitle: 'Межзвёздный',
      author: 'Алексей К.',
      rating: 10,
      text: 'Невероятный фильм! Визуальные эффекты просто потрясающие. Каждый кадр - произведение искусства.',
      date: '15 октября 2024'
    },
    {
      id: 2,
      movieTitle: 'Хроники будущего',
      author: 'Мария С.',
      rating: 9,
      text: 'Лучший сериал года! Сюжет держит в напряжении с первой до последней серии.',
      date: '10 октября 2024'
    },
    {
      id: 3,
      movieTitle: 'Тайна города',
      author: 'Дмитрий П.',
      rating: 8,
      text: 'Отличный детектив с неожиданными поворотами. Актёры великолепно справились со своими ролями.',
      date: '5 октября 2024'
    },
    {
      id: 4,
      movieTitle: 'Драма века',
      author: 'Елена В.',
      rating: 10,
      text: 'До слёз! Такие эмоциональные и глубокие персонажи. Смотрела на одном дыхании.',
      date: '1 октября 2024'
    },
  ];

  const handleSearch = (query: string, genre: string, year: string) => {
    let results = [...movies, ...series];

    if (query) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (genre !== 'all') {
      results = results.filter(item => item.genre === genre);
    }

    if (year !== 'all') {
      results = results.filter(item => item.year.toString() === year);
    }

    setFilteredContent(results);
    setActiveSection('search');
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    if (section === 'movies' && moviesRef.current) {
      moviesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'series' && seriesRef.current) {
      seriesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'reviews' && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearch={handleSearch} 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {activeSection === 'home' && (
        <>
          <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-5xl font-bold leading-tight">
                    Смотрите лучшие фильмы и сериалы онлайн
                  </h1>
                  <p className="text-xl text-white/90">
                    Тысячи фильмов и сериалов в HD качестве. Новинки каждую неделю. Смотрите где угодно и когда угодно.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => handleNavigate('movies')}
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      Смотреть фильмы
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => handleNavigate('series')}
                    >
                      <Icon name="Tv" size={20} className="mr-2" />
                      Сериалы
                    </Button>
                  </div>
                </div>
                <div className="animate-slide-up">
                  <img 
                    src="https://cdn.poehali.dev/projects/dc61e5ba-4de9-43e2-ab2a-e8a6e57069a8/files/6f7a9e94-5fde-4f95-91f1-7850c9e68659.jpg" 
                    alt="Кино" 
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white" ref={moviesRef}>
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-foreground">Фильмы</h2>
                <Button variant="ghost" onClick={() => handleNavigate('movies')}>
                  Смотреть все
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted" ref={seriesRef}>
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-foreground">Сериалы</h2>
                <Button variant="ghost" onClick={() => handleNavigate('series')}>
                  Смотреть все
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {series.map(show => (
                  <MovieCard key={show.id} movie={show} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-accent text-white" ref={reviewsRef}>
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">Отзывы зрителей</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'search' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Результаты поиска ({filteredContent.length})
            </h2>
            {filteredContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map(item => (
                  <MovieCard key={item.id} movie={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-xl text-muted-foreground">
                  По вашему запросу ничего не найдено
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
