import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface HeaderProps {
  onSearch: (query: string, genre: string, year: string) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ onSearch, activeSection, onNavigate }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const handleSearch = () => {
    onSearch(searchQuery, selectedGenre, selectedYear);
  };

  const genres = [
    'Все жанры',
    'Экшен',
    'Комедия',
    'Драма',
    'Фантастика',
    'Триллер',
    'Ужасы',
    'Романтика',
    'Документальный',
  ];

  const years = ['Все годы', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Icon name="Film" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">КиноМир</h1>
          </div>
          
          <nav className="flex gap-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'movies' ? 'default' : 'ghost'}
              onClick={() => onNavigate('movies')}
            >
              <Icon name="Film" size={18} className="mr-2" />
              Фильмы
            </Button>
            <Button
              variant={activeSection === 'series' ? 'default' : 'ghost'}
              onClick={() => onNavigate('series')}
            >
              <Icon name="Tv" size={18} className="mr-2" />
              Сериалы
            </Button>
            <Button
              variant={activeSection === 'reviews' ? 'default' : 'ghost'}
              onClick={() => onNavigate('reviews')}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Отзывы
            </Button>
          </nav>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Поиск фильмов и сериалов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full"
            />
          </div>
          
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Жанр" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre, index) => (
                <SelectItem key={index} value={index === 0 ? 'all' : genre.toLowerCase()}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Год" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year, index) => (
                <SelectItem key={index} value={index === 0 ? 'all' : year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={handleSearch}>
            <Icon name="Search" size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
}